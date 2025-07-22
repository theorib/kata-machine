import { it, expect } from "vitest";
import LinkedList from "@code/DoublyLinkedList";

// Basic append operations
it("append - should add single element to empty list", function () {
    const list = new LinkedList<number>();
    
    list.append(5);
    
    expect(list.get(0)).toEqual(5);
    expect(list.length).toEqual(1);
});

it("append - should add multiple elements maintaining order", function () {
    const list = new LinkedList<number>();
    
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(7);
    expect(list.get(2)).toEqual(9);
    expect(list.length).toEqual(3);
});

// Basic prepend operations
it("prepend - should add single element to empty list", function () {
    const list = new LinkedList<number>();
    
    list.prepend(10);
    
    expect(list.get(0)).toEqual(10);
    expect(list.length).toEqual(1);
});

it("prepend - should add multiple elements in reverse order", function () {
    const list = new LinkedList<number>();
    
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(0)).toEqual(9);
    expect(list.get(1)).toEqual(7);
    expect(list.get(2)).toEqual(5);
    expect(list.length).toEqual(3);
});

// Get operations
it("get - should return undefined for empty list", function () {
    const list = new LinkedList<number>();
    
    expect(list.get(0)).toEqual(undefined);
    expect(list.get(5)).toEqual(undefined);
});

it("get - should return undefined for invalid indices", function () {
    const list = new LinkedList<number>();
    list.append(1);
    
    expect(list.get(-1)).toEqual(undefined);
    expect(list.get(1)).toEqual(undefined);
    expect(list.get(100)).toEqual(undefined);
});

it("get - should return correct element at valid index", function () {
    const list = new LinkedList<number>();
    list.append(10);
    list.append(20);
    
    expect(list.get(0)).toEqual(10);
    expect(list.get(1)).toEqual(20);
});

// RemoveAt operations
it("removeAt - should return undefined on empty list", function () {
    const list = new LinkedList<number>();
    
    expect(list.removeAt(0)).toEqual(undefined);
    expect(list.length).toEqual(0);
});

it("removeAt - should return undefined for invalid index", function () {
    const list = new LinkedList<number>();
    list.append(5);
    list.append(7);
    
    expect(list.removeAt(-1)).toEqual(undefined);
    expect(list.removeAt(10)).toEqual(undefined);
    expect(list.length).toEqual(2);
});

it("removeAt - should remove first element", function () {
    const list = new LinkedList<number>();
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(0)).toEqual(5);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
    expect(list.get(1)).toEqual(9);
});

it("removeAt - should remove middle element", function () {
    const list = new LinkedList<number>();
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(9);
});

it("removeAt - should remove last element", function () {
    const list = new LinkedList<number>();
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(2)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(7);
});

it("removeAt - should remove single element from list", function () {
    const list = new LinkedList<number>();
    list.append(42);

    expect(list.removeAt(0)).toEqual(42);
    expect(list.length).toEqual(0);
    expect(list.get(0)).toEqual(undefined);
});

// Remove by value operations
it("remove - should return undefined on empty list", function () {
    const list = new LinkedList<number>();
    
    expect(list.remove(42)).toEqual(undefined);
    expect(list.length).toEqual(0);
});

it("remove - should return undefined for non-existent value", function () {
    const list = new LinkedList<number>();
    list.append(5);
    list.append(7);
    
    expect(list.remove(100)).toEqual(undefined);
    expect(list.length).toEqual(2);
});

it("remove - should remove first occurrence of value", function () {
    const list = new LinkedList<number>();
    list.append(5);
    list.append(7);
    list.append(5);
    
    expect(list.remove(5)).toEqual(5);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
    expect(list.get(1)).toEqual(5);
});

it("remove - should remove head element by value", function () {
    const list = new LinkedList<number>();
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
});

it("remove - should remove single element by value", function () {
    const list = new LinkedList<number>();
    list.append(1);
    
    expect(list.remove(1)).toEqual(1);
    expect(list.length).toEqual(0);
});

it("remove - should not find element after it's removed", function () {
    const list = new LinkedList<number>();
    list.append(5);
    list.append(9);
    list.append(11);

    list.removeAt(1);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.length).toEqual(2);
});

// Length property tests
it("length - should start at zero for empty list", function () {
    const list = new LinkedList<number>();
    
    expect(list.length).toEqual(0);
});

it("length - should update correctly with operations", function () {
    const list = new LinkedList<number>();
    
    expect(list.length).toEqual(0);
    
    list.append(1);
    expect(list.length).toEqual(1);
    
    list.prepend(2);
    expect(list.length).toEqual(2);
    
    list.removeAt(0);
    expect(list.length).toEqual(1);
    
    list.remove(1);
    expect(list.length).toEqual(0);
});

// Mixed operations
it("mixed operations - should handle prepend and append together", function () {
    const list = new LinkedList<number>();

    list.prepend(10);
    list.append(20);
    list.prepend(5);
    
    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(10);
    expect(list.get(2)).toEqual(20);
});

// Stress test with alternating operations
it("stress test - should handle alternating append/prepend operations", function () {
    const list = new LinkedList<number>();

    for (let i = 0; i < 50; i++) {
        if (i % 2 === 0) {
            list.append(i);
        } else {
            list.prepend(i);
        }
    }

    expect(list.length).toEqual(50);

    // Remove all elements from head
    while (list.length > 0) {
        list.removeAt(0);
    }

    expect(list.length).toEqual(0);
});

// Generic type support
it("generic types - should work with strings", function () {
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
