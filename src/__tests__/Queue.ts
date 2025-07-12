import { it, expect } from "vitest";
import Queue from "@code/Queue";

it("queue", function () {
    const list = new Queue<number>();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.deque()).toEqual(5);
    expect(list.length).toEqual(2);

    // this must be wrong..?
    debugger;

    // i hate using debuggers
    list.enqueue(11);
    debugger;
    expect(list.deque()).toEqual(7);
    expect(list.deque()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.length).toEqual(0);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    list.enqueue(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
});

it("queue-2", function () {
    const queue = new Queue<number>();
    
    expect(queue.length).toEqual(0);
    expect(queue.deque()).toEqual(undefined);
    expect(queue.peek()).toEqual(undefined);
});

it("queue-3", function () {
    const queue = new Queue<string>();
    
    queue.enqueue("first");
    queue.enqueue("second");
    
    expect(queue.peek()).toEqual("first");
    expect(queue.length).toEqual(2);
    expect(queue.deque()).toEqual("first");
    expect(queue.peek()).toEqual("second");
    expect(queue.length).toEqual(1);
});

it("queue-4", function () {
    const queue = new Queue<number>();
    
    queue.enqueue(42);
    expect(queue.peek()).toEqual(42);
    expect(queue.deque()).toEqual(42);
    expect(queue.length).toEqual(0);
    expect(queue.peek()).toEqual(undefined);
});

it("queue-5", function () {
    const queue = new Queue<number>();
    
    for (let i = 0; i < 100; i++) {
        queue.enqueue(i);
    }
    
    expect(queue.length).toEqual(100);
    expect(queue.peek()).toEqual(0);
    
    for (let i = 0; i < 100; i++) {
        expect(queue.deque()).toEqual(i);
    }
    
    expect(queue.length).toEqual(0);
});
