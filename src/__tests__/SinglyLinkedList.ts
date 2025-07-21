import { it, expect } from "vitest";
import SinglyLinkedList from "@code/SinglyLinkedList";

it("linked-list - should append elements", function () {
    const list = new SinglyLinkedList<number>();
    
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.length).toEqual(3);
});

it("linked-list - should remove element at index", function () {
    const list = new SinglyLinkedList<number>();
    
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);
});

it("linked-list - should handle remove operations correctly", function () {
    const list = new SinglyLinkedList<number>();
    
    list.append(5);
    list.append(9);
    list.append(11);

    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);
});

it("linked-list - should prepend elements", function () {
    const list = new SinglyLinkedList<number>();
    
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.length).toEqual(3);
});

it("linked-list - should remove prepended elements", function () {
    const list = new SinglyLinkedList<number>();
    
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
});

it("linked-list - should handle empty list operations", function () {
    const list = new SinglyLinkedList<number>();
    
    expect(list.length).toEqual(0);
    expect(list.get(0)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(undefined);
    expect(list.remove(42)).toEqual(undefined);
});

it("linked-list - should handle single element operations", function () {
    const list = new SinglyLinkedList<number>();
    
    list.append(1);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(1);
    expect(list.get(1)).toEqual(undefined);
    expect(list.get(-1)).toEqual(undefined);

    expect(list.remove(1)).toEqual(1);
    expect(list.length).toEqual(0);
});

it("linked-list - should handle prepend to empty list", function () {
    const list = new SinglyLinkedList<number>();
    
    list.prepend(10);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(10);
});

it("linked-list - should handle mixed prepend and append operations", function () {
    const list = new SinglyLinkedList<number>();
    
    list.prepend(10);
    list.append(20);
    list.append(30);
    expect(list.length).toEqual(3);
    expect(list.removeAt(1)).toEqual(20);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(10);
    expect(list.get(1)).toEqual(30);
});

it("linked-list - should handle invalid operations", function () {
    const list = new SinglyLinkedList<number>();
    
    list.prepend(10);
    list.append(30);
    
    expect(list.removeAt(10)).toEqual(undefined);
    expect(list.remove(100)).toEqual(undefined);
});

it("linked-list - should handle clearing all elements", function () {
    const list = new SinglyLinkedList<number>();
    
    list.prepend(10);
    list.append(30);
    
    list.removeAt(0);
    list.removeAt(0);
    expect(list.length).toEqual(0);
});

it("linked-list-3", function () {
    const list = new SinglyLinkedList<number>();

    for (let i = 0; i < 100; i++) {
        list.append(i);
    }

    expect(list.length).toEqual(100);

    for (let i = 0; i < 100; i++) {
        expect(list.get(i)).toEqual(i);
    }

    for (let i = 99; i >= 0; i--) {
        expect(list.removeAt(i)).toEqual(i);
    }

    expect(list.length).toEqual(0);
});

it("linked-list-4", function () {
    const list = new SinglyLinkedList<string>();

    list.append("hello");
    list.prepend("world");

    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual("world");
    expect(list.get(1)).toEqual("hello");

    expect(list.remove("hello")).toEqual("hello");
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual("world");
});
