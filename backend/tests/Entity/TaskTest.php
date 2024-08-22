<?php

namespace App\Tests\Entity;

use App\Entity\Task;
use PHPUnit\Framework\TestCase;

class TaskTest extends TestCase
{
    public function testGetId()
    {
        $task = new Task();
        $this->assertNull($task->getId());
    }

    public function testTitle()
    {
        $task = new Task();
        $task->setTitle('Test Title');
        $this->assertEquals('Test Title', $task->getTitle());
    }

    public function testDescription()
    {
        $task = new Task();
        $task->setDescription('Test Description');
        $this->assertEquals('Test Description', $task->getDescription());
    }
}
