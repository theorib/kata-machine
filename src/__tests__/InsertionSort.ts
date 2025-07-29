import { it, expect } from "vitest";
import insertionSort from "@code/InsertionSort";

it("should handle empty array", function () {
    const arr: number[] = [];
    insertionSort(arr);
    expect(arr).toEqual([]);
});

it("should handle single element array", function () {
    const arr = [42];
    insertionSort(arr);
    expect(arr).toEqual([42]);
});

it("should handle two element array in correct order", function () {
    const arr = [1, 2];
    insertionSort(arr);
    expect(arr).toEqual([1, 2]);
});

it("should handle two element array in reverse order", function () {
    const arr = [2, 1];
    insertionSort(arr);
    expect(arr).toEqual([1, 2]);
});

it("should sort array that is already sorted", function () {
    const arr = [1, 2, 3, 4, 5];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("should sort array in reverse order", function () {
    const arr = [5, 4, 3, 2, 1];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("should handle array with all identical elements", function () {
    const arr = [5, 5, 5, 5];
    insertionSort(arr);
    expect(arr).toEqual([5, 5, 5, 5]);
});

it("should handle array with duplicate elements", function () {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    insertionSort(arr);
    expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

it("should handle array with negative numbers", function () {
    const arr = [-5, -1, -10, 3, 0];
    insertionSort(arr);
    expect(arr).toEqual([-10, -5, -1, 0, 3]);
});

it("should handle array with mixed positive and negative numbers", function () {
    const arr = [-3, 7, -1, 4, 0, -8, 2];
    insertionSort(arr);
    expect(arr).toEqual([-8, -3, -1, 0, 2, 4, 7]);
});

it("should handle array with large numbers", function () {
    const arr = [1000, 1, 999, 2, 998];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 998, 999, 1000]);
});

it("should sort random unsorted array", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    insertionSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("should sort longer random array", function () {
    const arr = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];
    insertionSort(arr);
    expect(arr).toEqual([2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 19, 21]);
});

it("should handle array with zero", function () {
    const arr = [3, 0, -1, 2];
    insertionSort(arr);
    expect(arr).toEqual([-1, 0, 2, 3]);
});

it("should handle array with floating point numbers", function () {
    const arr = [3.5, 1.2, 4.8, 2.1];
    insertionSort(arr);
    expect(arr).toEqual([1.2, 2.1, 3.5, 4.8]);
});
