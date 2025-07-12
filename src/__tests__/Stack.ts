import { it, expect } from "vitest";
import Stack from "@code/Stack";

it("stack", function () {
    const list = new Stack<number>();

    list.push(5);
    list.push(7);
    list.push(9);

    expect(list.pop()).toEqual(9);
    expect(list.length).toEqual(2);

    list.push(11);
    expect(list.pop()).toEqual(11);
    expect(list.pop()).toEqual(7);
    expect(list.peek()).toEqual(5);
    expect(list.pop()).toEqual(5);
    expect(list.pop()).toEqual(undefined);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    list.push(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);

    //yayaya
});

it("stack-2", function () {
    const stack = new Stack<number>();
    
    expect(stack.length).toEqual(0);
    expect(stack.pop()).toEqual(undefined);
    expect(stack.peek()).toEqual(undefined);
});

it("stack-3", function () {
    const stack = new Stack<string>();
    
    stack.push("hello");
    stack.push("world");
    
    expect(stack.peek()).toEqual("world");
    expect(stack.length).toEqual(2);
    expect(stack.pop()).toEqual("world");
    expect(stack.peek()).toEqual("hello");
    expect(stack.length).toEqual(1);
});

it("stack-4", function () {
    const stack = new Stack<number>();
    
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    expect(stack.pop()).toEqual(1);
    expect(stack.length).toEqual(0);
    expect(stack.peek()).toEqual(undefined);
});

it("stack-5", function () {
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
