import { it, expect } from "vitest";
import bubbleSort from "@code/BubbleSort";

it("sorts random unsorted array", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    bubbleSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("sorts array with consecutive digits", function () {
    const arr = [7, 6, 3, 4, 8, 2, 5, 9, 1, 0];

    bubbleSort(arr);
    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("handles empty array", function () {
    const arr: number[] = [];

    bubbleSort(arr);
    expect(arr).toEqual([]);
});

it("handles single element array", function () {
    const arr = [1];

    bubbleSort(arr);
    expect(arr).toEqual([1]);
});

it("handles array with all identical elements", function () {
    const arr = [5, 5, 5, 5];

    bubbleSort(arr);
    expect(arr).toEqual([5, 5, 5, 5]);
});

it("handles already sorted array", function () {
    const arr = [1, 2, 3, 4, 5];

    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("handles reverse sorted array", function () {
    const arr = [5, 4, 3, 2, 1];

    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("sorts array with negative numbers", function () {
    const arr = [-5, -1, -10, 3, 0];

    bubbleSort(arr);
    expect(arr).toEqual([-10, -5, -1, 0, 3]);
});

it("sorts array with large numbers", function () {
    const arr = [1000, 1, 999, 2, 998];

    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 998, 999, 1000]);
});

it("handles two element array", function () {
    const arr = [2, 1];

    bubbleSort(arr);
    expect(arr).toEqual([1, 2]);
});

it("sorts array with duplicates", function () {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];

    bubbleSort(arr);
    expect(arr).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
});

it("handles array with zero", function () {
    const arr = [0, -1, 1];

    bubbleSort(arr);
    expect(arr).toEqual([-1, 0, 1]);
});

it("sorts array with floating point numbers", function () {
    const arr = [3.14, 2.71, 1.41, 1.73];

    bubbleSort(arr);
    expect(arr).toEqual([1.41, 1.73, 2.71, 3.14]);
});
