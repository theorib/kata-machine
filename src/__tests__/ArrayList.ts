import { it, expect } from "vitest";
import ArrayList from "@code/ArrayList";

// Basic append operations
it("append - should add single element to empty list", function () {
    const list = new ArrayList<number>(3);

    list.append(5);

    expect(list.get(0)).toEqual(5);
    expect(list.length).toEqual(1);
});

it("append - should add multiple elements maintaining order", function () {
    const list = new ArrayList<number>(5);

    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(7);
    expect(list.get(2)).toEqual(9);
    expect(list.length).toEqual(3);
});

it("append - should grow beyond initial capacity", function () {
    const list = new ArrayList<number>(2);

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(1);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(3);
});

// Basic prepend operations
it("prepend - should add single element to empty list", function () {
    const list = new ArrayList<number>(3);

    list.prepend(10);

    expect(list.get(0)).toEqual(10);
    expect(list.length).toEqual(1);
});

it("prepend - should add multiple elements in reverse order", function () {
    const list = new ArrayList<number>(5);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(0)).toEqual(9);
    expect(list.get(1)).toEqual(7);
    expect(list.get(2)).toEqual(5);
    expect(list.length).toEqual(3);
});

it("prepend - should grow beyond initial capacity", function () {
    const list = new ArrayList<number>(2);

    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(3);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(1);
});

// Get operations
it("get - should return undefined for empty list", function () {
    const list = new ArrayList<number>(3);

    expect(list.get(0)).toEqual(undefined);
    expect(list.get(5)).toEqual(undefined);
});

it("get - should return undefined for invalid indices", function () {
    const list = new ArrayList<number>(3);
    list.append(1);

    expect(list.get(-1)).toEqual(undefined);
    expect(list.get(1)).toEqual(undefined);
    expect(list.get(100)).toEqual(undefined);
});

it("get - should return correct element at valid index", function () {
    const list = new ArrayList<number>(3);
    list.append(10);
    list.append(20);

    expect(list.get(0)).toEqual(10);
    expect(list.get(1)).toEqual(20);
});

// RemoveAt operations
it("removeAt - should return undefined on empty list", function () {
    const list = new ArrayList<number>(3);

    expect(list.removeAt(0)).toEqual(undefined);
    expect(list.length).toEqual(0);
});

it("removeAt - should return undefined for invalid index", function () {
    const list = new ArrayList<number>(3);
    list.append(5);
    list.append(7);

    expect(list.removeAt(-1)).toEqual(undefined);
    expect(list.removeAt(10)).toEqual(undefined);
    expect(list.length).toEqual(2);
});

it("removeAt - should remove first element", function () {
    const list = new ArrayList<number>(3);
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(0)).toEqual(5);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
    expect(list.get(1)).toEqual(9);
});

it("removeAt - should remove middle element", function () {
    const list = new ArrayList<number>(3);
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(9);
});

it("removeAt - should remove last element", function () {
    const list = new ArrayList<number>(3);
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(2)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(7);
});

it("removeAt - should remove single element from list", function () {
    const list = new ArrayList<number>(1);
    list.append(42);

    expect(list.removeAt(0)).toEqual(42);
    expect(list.length).toEqual(0);
    expect(list.get(0)).toEqual(undefined);
});

it("removeAt - should handle sequential removal from head", function () {
    const list = new ArrayList<number>(3);

    list.append(5);
    list.append(11);

    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);
});

// Remove by value operations
it("remove - should return undefined on empty list", function () {
    const list = new ArrayList<number>(3);

    expect(list.remove(42)).toEqual(undefined);
    expect(list.length).toEqual(0);
});

it("remove - should return undefined for non-existent value", function () {
    const list = new ArrayList<number>(3);
    list.append(5);
    list.append(7);

    expect(list.remove(100)).toEqual(undefined);
    expect(list.length).toEqual(2);
});

it("remove - should remove first occurrence of value", function () {
    const list = new ArrayList<number>(5);
    list.append(5);
    list.append(7);
    list.append(5);

    expect(list.remove(5)).toEqual(5);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
    expect(list.get(1)).toEqual(5);
});

it("remove - should remove head element by value", function () {
    const list = new ArrayList<number>(5);
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
});

it("remove - should remove single element by value", function () {
    const list = new ArrayList<number>(1);
    list.append(1);

    expect(list.remove(1)).toEqual(1);
    expect(list.length).toEqual(0);
});

it("remove - should not find element after it's removed", function () {
    const list = new ArrayList<number>(5);
    list.append(5);
    list.append(9);
    list.append(11);

    list.removeAt(1);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.length).toEqual(2);
});

// Length property tests
it("length - should start at zero for empty list", function () {
    const list = new ArrayList<number>(3);

    expect(list.length).toEqual(0);
});

it("length - should update correctly with operations", function () {
    const list = new ArrayList<number>(5);

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

// Capacity and growth tests
it("capacity - should handle initial capacity constraint", function () {
    const list = new ArrayList<number>(2);

    list.append(1);
    list.append(2);

    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(1);
    expect(list.get(1)).toEqual(2);
});

it("capacity - should grow when exceeding initial capacity with append", function () {
    const list = new ArrayList<number>(1);

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(1);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(3);
});

it("capacity - should grow when exceeding initial capacity with prepend", function () {
    const list = new ArrayList<number>(1);

    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(3);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(1);
});

// Mixed operations
it("mixed operations - should handle prepend and append together", function () {
    const list = new ArrayList<number>(5);

    list.prepend(10);
    list.append(20);
    list.prepend(5);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(10);
    expect(list.get(2)).toEqual(20);
});

it("mixed operations - should handle growth with mixed operations", function () {
    const list = new ArrayList<number>(1);

    list.prepend(10);
    list.append(20);
    list.append(30);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(10);
    expect(list.get(1)).toEqual(20);
    expect(list.get(2)).toEqual(30);
});

// Stress test
it("stress test - should handle large capacity growth", function () {
    const list = new ArrayList<number>(10);

    for (let i = 0; i < 15; i++) {
        list.append(i);
    }

    expect(list.length).toEqual(15);

    for (let i = 0; i < 15; i++) {
        expect(list.get(i)).toEqual(i);
    }
});
