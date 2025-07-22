import { it, expect } from "vitest";
import Queue from "@code/Queue";

it("should initialize empty queue with length 0", function () {
    const queue = new Queue<number>();
    
    expect(queue.length).toEqual(0);
});

it("should return undefined when peeking empty queue", function () {
    const queue = new Queue<number>();
    
    expect(queue.peek()).toEqual(undefined);
});

it("should return undefined when dequeuing from empty queue", function () {
    const queue = new Queue<number>();
    
    expect(queue.deque()).toEqual(undefined);
});

it("should enqueue single element and update length", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(42);
    
    expect(queue.length).toEqual(1);
});

it("should peek single element without removing it", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(42);
    
    expect(queue.peek()).toEqual(42);
    expect(queue.length).toEqual(1);
});

it("should dequeue single element and update length", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(42);
    
    expect(queue.deque()).toEqual(42);
    expect(queue.length).toEqual(0);
});

it("should return undefined when peeking after dequeuing last element", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(42);
    queue.deque();
    
    expect(queue.peek()).toEqual(undefined);
});

it("should enqueue multiple elements in order", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(9);
    
    expect(queue.length).toEqual(3);
});

it("should peek first element after multiple enqueues", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(9);
    
    expect(queue.peek()).toEqual(5);
});

it("should dequeue elements in FIFO order", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(9);
    
    expect(queue.deque()).toEqual(5);
    expect(queue.deque()).toEqual(7);
    expect(queue.deque()).toEqual(9);
});

it("should update length correctly after each dequeue", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(9);
    
    queue.deque();
    expect(queue.length).toEqual(2);
    
    queue.deque();
    expect(queue.length).toEqual(1);
    
    queue.deque();
    expect(queue.length).toEqual(0);
});

it("should handle mixed enqueue and dequeue operations", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(5);
    queue.enqueue(7);
    queue.enqueue(9);
    queue.deque();
    queue.enqueue(11);
    
    expect(queue.deque()).toEqual(7);
    expect(queue.deque()).toEqual(9);
    expect(queue.peek()).toEqual(11);
    expect(queue.deque()).toEqual(11);
});

it("should return undefined when dequeuing from emptied queue", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(5);
    queue.deque();
    
    expect(queue.deque()).toEqual(undefined);
});

it("should allow re-enqueuing after queue becomes empty", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(5);
    queue.deque();
    queue.enqueue(69);
    
    expect(queue.peek()).toEqual(69);
    expect(queue.length).toEqual(1);
});

it("should work with string data type", function () {
    const queue = new Queue<string>();
    
    queue.enqueue("first");
    queue.enqueue("second");
    
    expect(queue.peek()).toEqual("first");
    expect(queue.length).toEqual(2);
    expect(queue.deque()).toEqual("first");
    expect(queue.peek()).toEqual("second");
    expect(queue.length).toEqual(1);
});

it("should handle large number of elements efficiently", function () {
    const queue = new Queue<number>();
    
    for (let i = 0; i < 100; i++) {
        queue.enqueue(i);
    }
    
    expect(queue.length).toEqual(100);
    expect(queue.peek()).toEqual(0);
});

it("should maintain FIFO order with large dataset", function () {
    const queue = new Queue<number>();
    
    for (let i = 0; i < 100; i++) {
        queue.enqueue(i);
    }
    
    for (let i = 0; i < 100; i++) {
        expect(queue.deque()).toEqual(i);
    }
    
    expect(queue.length).toEqual(0);
});

it("should handle alternating enqueue and dequeue operations", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(1);
    expect(queue.deque()).toEqual(1);
    queue.enqueue(2);
    expect(queue.deque()).toEqual(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(3);
    expect(queue.length).toEqual(1);
});

it("should maintain correct state after multiple peek operations", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(10);
    queue.enqueue(20);
    
    expect(queue.peek()).toEqual(10);
    expect(queue.peek()).toEqual(10);
    expect(queue.peek()).toEqual(10);
    expect(queue.length).toEqual(2);
});
