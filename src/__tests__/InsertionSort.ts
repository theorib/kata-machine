import { it, expect } from "vitest";
import insertionSort from "@code/InsertionSort";

it("insertion-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("insertion-sort-2", function () {
    const arr = [7, 6, 3, 4, 8, 2, 5, 9, 1, 0];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("insertion-sort-3", function () {
    const arr: number[] = [];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([]);
});

it("insertion-sort-4", function () {
    const arr = [1];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([1]);
});

it("insertion-sort-5", function () {
    const arr = [5, 5, 5, 5];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([5, 5, 5, 5]);
});

it("insertion-sort-6", function () {
    const arr = [1, 2, 3, 4, 5];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("insertion-sort-7", function () {
    const arr = [5, 4, 3, 2, 1];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("insertion-sort-8", function () {
    const arr = [-5, -1, -10, 3, 0];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([-10, -5, -1, 0, 3]);
});

it("insertion-sort-9", function () {
    const arr = [1000, 1, 999, 2, 998];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 998, 999, 1000]);
});

it("insertion-sort-10", function () {
    const arr = [2, 1];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([1, 2]);
});

it("insertion-sort-11", function () {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

it("insertion-sort-12", function () {
    const arr = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];

    debugger;
    insertionSort(arr);
    expect(arr).toEqual([2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 19, 21]);
});
