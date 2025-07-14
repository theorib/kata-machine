import { it, expect } from "vitest";
import bubbleSort from "@code/BubbleSort";

it("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("bubble-sort-2", function () {
    const arr = [7, 6, 3, 4, 8, 2, 5, 9, 1, 0];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

it("bubble-sort-3", function () {
    const arr: number[] = [];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([]);
});

it("bubble-sort-4", function () {
    const arr = [1];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([1]);
});

it("bubble-sort-5", function () {
    const arr = [5, 5, 5, 5];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([5, 5, 5, 5]);
});

it("bubble-sort-6", function () {
    const arr = [1, 2, 3, 4, 5];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("bubble-sort-7", function () {
    const arr = [5, 4, 3, 2, 1];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("bubble-sort-8", function () {
    const arr = [-5, -1, -10, 3, 0];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([-10, -5, -1, 0, 3]);
});

it("bubble-sort-9", function () {
    const arr = [1000, 1, 999, 2, 998];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 998, 999, 1000]);
});

it("bubble-sort-10", function () {
    const arr = [2, 1];

    debugger;
    bubbleSort(arr);
    expect(arr).toEqual([1, 2]);
});
