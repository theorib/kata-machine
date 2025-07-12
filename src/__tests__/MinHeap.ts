import { it, expect } from "vitest";
import MinHeap from "@code/MinHeap";

it("min heap", function () {
    const heap = new MinHeap();

    expect(heap.length).toEqual(0);

    heap.insert(5);
    heap.insert(3);
    heap.insert(69);
    heap.insert(420);
    heap.insert(4);
    heap.insert(1);
    heap.insert(8);
    heap.insert(7);

    expect(heap.length).toEqual(8);
    expect(heap.delete()).toEqual(1);
    expect(heap.delete()).toEqual(3);
    expect(heap.delete()).toEqual(4);
    expect(heap.delete()).toEqual(5);
    expect(heap.length).toEqual(4);
    expect(heap.delete()).toEqual(7);
    expect(heap.delete()).toEqual(8);
    expect(heap.delete()).toEqual(69);
    expect(heap.delete()).toEqual(420);
    expect(heap.length).toEqual(0);
});

it("min heap-2", function () {
    const heap = new MinHeap();
    
    expect(heap.delete()).toEqual(undefined);
    expect(heap.length).toEqual(0);
});

it("min heap-3", function () {
    const heap = new MinHeap();
    
    heap.insert(10);
    expect(heap.length).toEqual(1);
    expect(heap.delete()).toEqual(10);
    expect(heap.length).toEqual(0);
    expect(heap.delete()).toEqual(undefined);
});

it("min heap-4", function () {
    const heap = new MinHeap();
    
    heap.insert(5);
    heap.insert(5);
    heap.insert(5);
    
    expect(heap.length).toEqual(3);
    expect(heap.delete()).toEqual(5);
    expect(heap.delete()).toEqual(5);
    expect(heap.delete()).toEqual(5);
    expect(heap.length).toEqual(0);
});

it("min heap-5", function () {
    const heap = new MinHeap();
    
    const values = [50, 30, 70, 20, 40, 60, 80, 10];
    values.forEach(val => heap.insert(val));
    
    expect(heap.length).toEqual(8);
    
    const sorted = [];
    while (heap.length > 0) {
        sorted.push(heap.delete());
    }
    
    expect(sorted).toEqual([10, 20, 30, 40, 50, 60, 70, 80]);
});

it("min heap-6", function () {
    const heap = new MinHeap();
    
    heap.insert(-1);
    heap.insert(-10);
    heap.insert(0);
    heap.insert(-5);
    
    expect(heap.delete()).toEqual(-10);
    expect(heap.delete()).toEqual(-5);
    expect(heap.delete()).toEqual(-1);
    expect(heap.delete()).toEqual(0);
});
