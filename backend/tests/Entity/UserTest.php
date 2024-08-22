<?php

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testGetId()
    {
        $user = new User();
        $this->assertNull($user->getId());
    }

    public function testEmail()
    {
        $user = new User();
        $user->setEmail('test@example.com');
        $this->assertEquals('test@example.com', $user->getEmail());
    }

    public function testRoles()
    {
        $user = new User();
        $this->assertEquals(['ROLE_USER'], $user->getRoles());

        $user->setRoles(['ROLE_ADMIN']);
        $this->assertEquals(['ROLE_ADMIN', 'ROLE_USER'], $user->getRoles());
    }

    public function testPassword()
    {
        $user = new User();
        $user->setPassword('password123');
        $this->assertEquals('password123', $user->getPassword());
    }

    public function testPlainPassword()
    {
        $user = new User();
        $user->setPlainPassword('plainpassword');
        $this->assertEquals('plainpassword', $user->getPlainPassword());

        $user->eraseCredentials();
        $this->assertNull($user->getPlainPassword());
    }

    public function testUserIdentifier()
    {
        $user = new User();
        $user->setEmail('identifier@example.com');
        $this->assertEquals('identifier@example.com', $user->getUserIdentifier());
    }
}
