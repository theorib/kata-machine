import { it, expect } from "vitest";
import Stack from "@code/Stack";

it("should push elements and maintain correct length", function () {
    const stack = new Stack<number>();

    stack.push(5);
    expect(stack.length).toEqual(1);

    stack.push(7);
    expect(stack.length).toEqual(2);

    stack.push(9);
    expect(stack.length).toEqual(3);
});

it("should pop elements in LIFO order", function () {
    const stack = new Stack<number>();
    
    stack.push(5);
    stack.push(7);
    stack.push(9);

    expect(stack.pop()).toEqual(9);
    expect(stack.pop()).toEqual(7);
    expect(stack.pop()).toEqual(5);
});

it("should update length correctly after pop operations", function () {
    const stack = new Stack<number>();
    
    stack.push(5);
    stack.push(7);
    stack.push(9);
    
    expect(stack.length).toEqual(3);
    
    stack.pop();
    expect(stack.length).toEqual(2);
    
    stack.pop();
    expect(stack.length).toEqual(1);
    
    stack.pop();
    expect(stack.length).toEqual(0);
});

it("should peek at top element without removing it", function () {
    const stack = new Stack<number>();
    
    stack.push(5);
    expect(stack.peek()).toEqual(5);
    expect(stack.length).toEqual(1);
    
    stack.push(7);
    expect(stack.peek()).toEqual(7);
    expect(stack.length).toEqual(2);
});

it("should handle push and pop operations after becoming empty", function () {
    const stack = new Stack<number>();
    
    stack.push(5);
    stack.push(7);
    
    stack.pop();
    stack.pop();
    expect(stack.length).toEqual(0);
    
    stack.push(69);
    expect(stack.peek()).toEqual(69);
    expect(stack.length).toEqual(1);
});

it("should return undefined when popping from empty stack", function () {
    const stack = new Stack<number>();

    expect(stack.pop()).toEqual(undefined);
});

it("should return undefined when peeking at empty stack", function () {
    const stack = new Stack<number>();

    expect(stack.peek()).toEqual(undefined);
});

it("should have length of 0 when newly created", function () {
    const stack = new Stack<number>();

    expect(stack.length).toEqual(0);
});

it("should work with string type elements", function () {
    const stack = new Stack<string>();

    stack.push("hello");
    stack.push("world");

    expect(stack.peek()).toEqual("world");
    expect(stack.length).toEqual(2);
    expect(stack.pop()).toEqual("world");
    expect(stack.peek()).toEqual("hello");
    expect(stack.length).toEqual(1);
});

it("should handle single element operations correctly", function () {
    const stack = new Stack<number>();

    stack.push(1);
    expect(stack.peek()).toEqual(1);
    expect(stack.pop()).toEqual(1);
    expect(stack.length).toEqual(0);
    expect(stack.peek()).toEqual(undefined);
});

it("should handle large number of elements correctly", function () {
    const stack = new Stack<number>();

    for (let i = 0; i < 100; i++) {
        stack.push(i);
    }

    expect(stack.length).toEqual(100);
    expect(stack.peek()).toEqual(99);

    for (let i = 99; i >= 0; i--) {
        expect(stack.pop()).toEqual(i);
    }

    expect(stack.length).toEqual(0);
});

it("should maintain LIFO behavior with mixed push/pop operations", function () {
    const stack = new Stack<number>();
    
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toEqual(4);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(1);
});
