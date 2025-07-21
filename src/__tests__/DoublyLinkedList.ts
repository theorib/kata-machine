import { it, expect } from "vitest";
import LinkedList from "@code/DoublyLinkedList";

it("DoublyLinkedList - should append elements", function () {
    const list = new LinkedList<number>();
    
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.length).toEqual(3);
});

it("DoublyLinkedList - should remove element at index", function () {
    const list = new LinkedList<number>();
    
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);
});

it("DoublyLinkedList - should handle remove by value after removeAt", function () {
    const list = new LinkedList<number>();
    
    list.append(5);
    list.append(9);
    list.append(11);

    list.removeAt(1);
    expect(list.remove(9)).toEqual(undefined);
});

it("DoublyLinkedList - should remove first element", function () {
    const list = new LinkedList<number>();
    
    list.append(5);
    list.append(11);

    expect(list.removeAt(0)).toEqual(5);
    expect(list.length).toEqual(1);
});

it("DoublyLinkedList - should remove last element", function () {
    const list = new LinkedList<number>();
    
    list.append(11);

    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);
});

it("DoublyLinkedList - should prepend elements", function () {
    const list = new LinkedList<number>();
    
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.length).toEqual(3);
});

it("DoublyLinkedList - should remove prepended element by value", function () {
    const list = new LinkedList<number>();
    
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
});

it("DoublyLinkedList - should handle empty list get operations", function () {
    const list = new LinkedList<number>();
    
    expect(list.length).toEqual(0);
    expect(list.get(0)).toEqual(undefined);
});

it("DoublyLinkedList - should handle empty list removeAt operations", function () {
    const list = new LinkedList<number>();
    
    expect(list.removeAt(0)).toEqual(undefined);
});

it("DoublyLinkedList - should handle empty list remove operations", function () {
    const list = new LinkedList<number>();
    
    expect(list.remove(42)).toEqual(undefined);
});

it("DoublyLinkedList - should handle single element append", function () {
    const list = new LinkedList<number>();
    
    list.append(1);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(1);
});

it("DoublyLinkedList - should handle invalid get index", function () {
    const list = new LinkedList<number>();
    
    list.append(1);
    expect(list.get(1)).toEqual(undefined);
});

it("DoublyLinkedList - should handle negative get index", function () {
    const list = new LinkedList<number>();
    
    list.append(1);
    expect(list.get(-1)).toEqual(undefined);
});

it("DoublyLinkedList - should remove single element by value", function () {
    const list = new LinkedList<number>();
    
    list.append(1);
    expect(list.remove(1)).toEqual(1);
    expect(list.length).toEqual(0);
});

it("DoublyLinkedList - should handle prepend to empty list", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(10);
});

it("DoublyLinkedList - should handle append after prepend", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    list.append(20);
    expect(list.length).toEqual(2);
});

it("DoublyLinkedList - should handle multiple appends after prepend", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    list.append(20);
    list.append(30);
    expect(list.length).toEqual(3);
});

it("DoublyLinkedList - should remove from middle after mixed operations", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    list.append(20);
    list.append(30);
    
    expect(list.removeAt(1)).toEqual(20);
    expect(list.length).toEqual(2);
});

it("DoublyLinkedList - should maintain order after middle removal", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    list.append(20);
    list.append(30);
    
    list.removeAt(1);
    expect(list.get(0)).toEqual(10);
    expect(list.get(1)).toEqual(30);
});

it("DoublyLinkedList - should handle invalid removeAt index", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    list.append(30);
    
    expect(list.removeAt(10)).toEqual(undefined);
});

it("DoublyLinkedList - should handle remove non-existent value", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    list.append(30);
    
    expect(list.remove(100)).toEqual(undefined);
});

it("DoublyLinkedList - should remove first element by index", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    list.append(30);
    
    list.removeAt(0);
    expect(list.length).toEqual(1);
});

it("DoublyLinkedList - should clear all elements by index", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    
    list.removeAt(0);
    expect(list.length).toEqual(0);
});

it("DoublyLinkedList-3", function () {
    const list = new LinkedList<string>();

    list.append("a");
    list.append("b");
    list.prepend("c");

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual("c");
    expect(list.get(1)).toEqual("a");
    expect(list.get(2)).toEqual("b");

    expect(list.remove("a")).toEqual("a");
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual("c");
    expect(list.get(1)).toEqual("b");
});

it("DoublyLinkedList-4", function () {
    const list = new LinkedList<number>();

    for (let i = 0; i < 50; i++) {
        if (i % 2 === 0) {
            list.append(i);
        } else {
            list.prepend(i);
        }
    }

    expect(list.length).toEqual(50);

    while (list.length > 0) {
        list.removeAt(0);
    }

    expect(list.length).toEqual(0);
});
