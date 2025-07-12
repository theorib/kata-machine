import { it, expect } from "vitest";
import binary_fn from "@code/BinarySearchList";

it("binary search array", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_fn(foo, 69)).toEqual(true);
    expect(binary_fn(foo, 1336)).toEqual(false);
    expect(binary_fn(foo, 69420)).toEqual(true);
    expect(binary_fn(foo, 69421)).toEqual(false);
    expect(binary_fn(foo, 1)).toEqual(true);
    expect(binary_fn(foo, 0)).toEqual(false);
});

it("binary search array-2", function () {
    expect(binary_fn([], 5)).toEqual(false);
});

it("binary search array-3", function () {
    expect(binary_fn([1], 1)).toEqual(true);
    expect(binary_fn([1], 2)).toEqual(false);
    expect(binary_fn([1], 0)).toEqual(false);
});

it("binary search array-4", function () {
    const arr = [1, 2];
    expect(binary_fn(arr, 1)).toEqual(true);
    expect(binary_fn(arr, 2)).toEqual(true);
    expect(binary_fn(arr, 0)).toEqual(false);
    expect(binary_fn(arr, 3)).toEqual(false);
});

it("binary search array-5", function () {
    const negatives = [-10, -5, -1, 0, 5];
    expect(binary_fn(negatives, -5)).toEqual(true);
    expect(binary_fn(negatives, -3)).toEqual(false);
    expect(binary_fn(negatives, 0)).toEqual(true);
    expect(binary_fn(negatives, -11)).toEqual(false);
    expect(binary_fn(negatives, 6)).toEqual(false);
});

it("binary search array-6", function () {
    const large = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(binary_fn(large, 1)).toEqual(true);
    expect(binary_fn(large, 100)).toEqual(true);
    expect(binary_fn(large, 50)).toEqual(true);
    expect(binary_fn(large, 25)).toEqual(false);
    expect(binary_fn(large, 101)).toEqual(false);
});
