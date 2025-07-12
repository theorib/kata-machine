import { it, expect } from "vitest";
import merge_sort from "@code/MergeSort";

it("merge-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    merge_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("merge-sort-2", function () {
    const arr: number[] = [];
    merge_sort(arr);
    expect(arr).toEqual([]);
});

it("merge-sort-3", function () {
    const arr = [1];
    merge_sort(arr);
    expect(arr).toEqual([1]);
});

it("merge-sort-4", function () {
    const arr = [5, 5, 5, 5];
    merge_sort(arr);
    expect(arr).toEqual([5, 5, 5, 5]);
});

it("merge-sort-5", function () {
    const arr = [1, 2, 3, 4, 5];
    merge_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("merge-sort-6", function () {
    const arr = [5, 4, 3, 2, 1];
    merge_sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("merge-sort-7", function () {
    const arr = [-5, -1, -10, 3, 0];
    merge_sort(arr);
    expect(arr).toEqual([-10, -5, -1, 0, 3]);
});

it("merge-sort-8", function () {
    const arr = [2, 1];
    merge_sort(arr);
    expect(arr).toEqual([1, 2]);
});
