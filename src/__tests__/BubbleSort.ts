import { it, expect } from "vitest";
import bubble_sort from "@code/BubbleSort";

it("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("bubble-sort-2", function () {
    const arr = [7, 6, 3, 4, 8, 2, 5, 9, 1, 0];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("bubble-sort-3", function () {
    const arr: number[] = [];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([]);
});

it("bubble-sort-4", function () {
    const arr = [1];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([1]);
});
