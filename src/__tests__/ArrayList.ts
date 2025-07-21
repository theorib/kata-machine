import { it, expect } from "vitest";
import ArrayList from "@code/ArrayList";

it("array-list - should append elements", function () {
    const list = new ArrayList<number>(3);
    
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.length).toEqual(3);
});

it("array-list - should remove element at index", function () {
    const list = new ArrayList<number>(3);
    
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);
});

it("array-list - should handle remove by value after removeAt", function () {
    const list = new ArrayList<number>(3);
    
    list.append(5);
    list.append(9);
    list.append(11);

    list.removeAt(1);
    expect(list.remove(9)).toEqual(undefined);
});

it("array-list - should remove all elements sequentially", function () {
    const list = new ArrayList<number>(3);
    
    list.append(5);
    list.append(11);

    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);
});

it("array-list - should prepend elements", function () {
    const list = new ArrayList<number>(3);
    
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.length).toEqual(3);
});

it("array-list - should remove prepended elements by value", function () {
    const list = new ArrayList<number>(3);
    
    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
});

it("array-list - should handle empty list operations", function () {
    const list = new ArrayList<number>(1);
    
    expect(list.length).toEqual(0);
    expect(list.get(0)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(undefined);
    expect(list.remove(42)).toEqual(undefined);
});

it("array-list - should handle single element append", function () {
    const list = new ArrayList<number>(1);
    
    list.append(1);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(1);
});

it("array-list - should handle invalid get operations", function () {
    const list = new ArrayList<number>(1);
    
    list.append(1);
    expect(list.get(1)).toEqual(undefined);
    expect(list.get(-1)).toEqual(undefined);
});

it("array-list - should remove single element by value", function () {
    const list = new ArrayList<number>(1);
    
    list.append(1);
    expect(list.remove(1)).toEqual(1);
    expect(list.length).toEqual(0);
});

it("array-list - should handle prepend to empty list", function () {
    const list = new ArrayList<number>(1);
    
    list.prepend(10);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(10);
});

it("array-list - should handle growth with mixed operations", function () {
    const list = new ArrayList<number>(1);
    
    list.prepend(10);
    list.append(20);
    list.append(30);
    expect(list.length).toEqual(3);
});

it("array-list - should remove from middle after growth", function () {
    const list = new ArrayList<number>(1);
    
    list.prepend(10);
    list.append(20);
    list.append(30);
    
    expect(list.removeAt(1)).toEqual(20);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(10);
    expect(list.get(1)).toEqual(30);
});

it("array-list - should handle invalid remove operations", function () {
    const list = new ArrayList<number>(1);
    
    list.prepend(10);
    list.append(30);
    
    expect(list.removeAt(10)).toEqual(undefined);
    expect(list.remove(100)).toEqual(undefined);
});

it("array-list - should clear all elements by index", function () {
    const list = new ArrayList<number>(1);
    
    list.prepend(10);
    list.append(30);
    
    list.removeAt(0);
    list.removeAt(0);
    expect(list.length).toEqual(0);
});

it("array-list-3", function () {
    const list = new ArrayList<number>(10);

    for (let i = 0; i < 15; i++) {
        list.append(i);
    }

    expect(list.length).toEqual(15);

    for (let i = 0; i < 15; i++) {
        expect(list.get(i)).toEqual(i);
    }
});

it("array-list-4", function () {
    const list = new ArrayList<number>(2);

    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(3);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(1);
});
