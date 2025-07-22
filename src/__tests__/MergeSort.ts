import { it, expect } from "vitest";
import mergeSort from "@code/MergeSort";

it("merge-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("merge-sort-2", function () {
    const arr = [7, 6, 3, 4, 8, 2, 5, 9, 1, 0];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("merge-sort-3", function () {
    const arr: number[] = [];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([]);
});

it("merge-sort-4", function () {
    const arr = [1];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([1]);
});

it("merge-sort-5", function () {
    const arr = [5, 5, 5, 5];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([5, 5, 5, 5]);
});

it("merge-sort-6", function () {
    const arr = [1, 2, 3, 4, 5];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

it("merge-sort-7", function () {
    const arr = [5, 4, 3, 2, 1];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

it("merge-sort-8", function () {
    const arr = [-5, -1, -10, 3, 0];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([-10, -5, -1, 0, 3]);
});

it("merge-sort-9", function () {
    const arr = [1000, 1, 999, 2, 998];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 998, 999, 1000]);
});

it("merge-sort-10", function () {
    const arr = [2, 1];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2]);
});

it("merge-sort-11", function () {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

it("merge-sort-12", function () {
    const arr = [100, 50, 25, 75, 10, 90, 80, 20, 60, 40];

    debugger;
    const result = mergeSort(arr);
    expect(result).toEqual([10, 20, 25, 40, 50, 60, 75, 80, 90, 100]);
});
