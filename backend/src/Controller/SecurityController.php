<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Psr\Log\LoggerInterface;

class SecurityController extends AbstractController
{
    private $jwtManager;
    private $logger;

    public function __construct(JWTTokenManagerInterface $jwtManager, LoggerInterface $logger)
    {
        $this->jwtManager = $jwtManager;
        $this->logger = $logger;
    }

    public function login(Request $request, AuthenticationUtils $authenticationUtils): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);

            if (!isset($data['email']) || !isset($data['password'])) {
                return new JsonResponse([
                    'title' => 'Validation Error',
                    'detail' => 'Email and password are required',
                    'status' => JsonResponse::HTTP_UNPROCESSABLE_ENTITY,
                    'type' => '/errors/validation'
                ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
            }

            $user = $this->getUser();

            if (!$user instanceof UserInterface) {
                return new JsonResponse(['message' => 'Invalid credentials'], JsonResponse::HTTP_UNAUTHORIZED);
            }

            $token = $this->jwtManager->create($user);

            return new JsonResponse(['token' => $token]);
        } catch (\Exception $e) {
            $this->logger->error('Login error: ' . $e->getMessage());
            return new JsonResponse([
                'title' => 'An error occurred',
                'detail' => $e->getMessage(),
                'status' => JsonResponse::HTTP_INTERNAL_SERVER_ERROR,
                'type' => '/errors/500'
            ], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
