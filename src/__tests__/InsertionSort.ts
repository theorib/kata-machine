import { it, expect } from "vitest";
import insertion_sort from "@code/InsertionSort";

it("insertion-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    debugger;
    // where is my debugger
    insertion_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("insertion-sort-2", function () {
    const arr: number[] = [];
    insertion_sort(arr);
    expect(arr).toEqual([]);
});

it("insertion-sort-3", function () {
    const arr = [1];
    insertion_sort(arr);
    expect(arr).toEqual([1]);
});

it("insertion-sort-4", function () {
    const arr = [5, 5, 5, 5];
    insertion_sort(arr);
    expect(arr).toEqual([5, 5, 5, 5]);
});

it("insertion-sort-5", function () {
    const arr = [1, 2, 3, 4, 5];
    insertion_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("insertion-sort-6", function () {
    const arr = [5, 4, 3, 2, 1];
    insertion_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("insertion-sort-7", function () {
    const arr = [-5, -1, -10, 3, 0];
    insertion_sort(arr);
    expect(arr).toEqual([-10, -5, -1, 0, 3]);
});

it("insertion-sort-8", function () {
    const arr = [2, 1];
    insertion_sort(arr);
    expect(arr).toEqual([1, 2]);
});
