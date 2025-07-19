import { it, expect } from "vitest";
import quickSort from "@code/QuickSort";

it("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    quickSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("quick-sort-2", function () {
    const arr: number[] = [];

    debugger;
    quickSort(arr);
    expect(arr).toEqual([]);
});

it("quick-sort-3", function () {
    const arr = [1];

    debugger;
    quickSort(arr);
    expect(arr).toEqual([1]);
});

it("quick-sort-4", function () {
    const arr = [5, 5, 5, 5];

    debugger;
    quickSort(arr);
    expect(arr).toEqual([5, 5, 5, 5]);
});

it("quick-sort-5", function () {
    const arr = [1, 2, 3, 4, 5];

    debugger;
    quickSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("quick-sort-6", function () {
    const arr = [5, 4, 3, 2, 1];

    debugger;
    quickSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("quick-sort-7", function () {
    const arr = [-5, -1, -10, 3, 0];

    debugger;
    quickSort(arr);
    expect(arr).toEqual([-10, -5, -1, 0, 3]);
});

it("quick-sort-8", function () {
    const arr = [2, 1];

    debugger;
    quickSort(arr);
    expect(arr).toEqual([1, 2]);
});
