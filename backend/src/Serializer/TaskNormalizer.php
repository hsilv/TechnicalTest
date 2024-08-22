<?php

namespace App\Serializer;

use App\Entity\Task;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class TaskNormalizer implements NormalizerInterface
{
    private const ALREADY_CALLED = 'TASK_NORMALIZER_ALREADY_CALLED';

    public function normalize($object, $format = null, array $context = [])
    {
        if (isset($context[self::ALREADY_CALLED])) {
            return $object;
        }

        $context[self::ALREADY_CALLED] = true;

        return [
            'id' => $object->getId(),
            'title' => $object->getTitle(),
            'description' => $object->getDescription(),
        ];
    }

    public function supportsNormalization(mixed $data, ?string $format = null, array $context = []): bool
    {
        return $data instanceof Task && !isset($context[self::ALREADY_CALLED]) && ($format === 'json' || $format === 'jsonld');
    }

    public function getSupportedTypes(?string $format): array
    {
        return [
            Task::class => true,
        ];
    }
}
