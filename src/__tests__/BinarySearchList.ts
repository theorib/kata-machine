import { it, expect } from "vitest";
import binary_fn from "@code/BinarySearchList";

it("finds element in middle of array", function () {
    const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_fn(arr, 69)).toEqual(3);
});

it("finds first element in array", function () {
    const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_fn(arr, 1)).toEqual(0);
});

it("finds last element in array", function () {
    const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_fn(arr, 69420)).toEqual(10);
});

it("returns -1 for element smaller than all elements", function () {
    const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_fn(arr, 0)).toEqual(-1);
});

it("returns -1 for element larger than all elements", function () {
    const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_fn(arr, 69421)).toEqual(-1);
});

it("returns -1 for element not in array", function () {
    const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_fn(arr, 1336)).toEqual(-1);
});

it("returns -1 for empty array", function () {
    expect(binary_fn([], 5)).toEqual(-1);
});

it("finds element in single element array", function () {
    expect(binary_fn([1], 1)).toEqual(0);
});

it("returns -1 when element not in single element array", function () {
    expect(binary_fn([1], 2)).toEqual(-1);
});

it("returns -1 for element smaller than single element", function () {
    expect(binary_fn([1], 0)).toEqual(-1);
});

it("finds first element in two element array", function () {
    const arr = [1, 2];
    expect(binary_fn(arr, 1)).toEqual(0);
});

it("finds second element in two element array", function () {
    const arr = [1, 2];
    expect(binary_fn(arr, 2)).toEqual(1);
});

it("returns -1 for element smaller than both in two element array", function () {
    const arr = [1, 2];
    expect(binary_fn(arr, 0)).toEqual(-1);
});

it("returns -1 for element larger than both in two element array", function () {
    const arr = [1, 2];
    expect(binary_fn(arr, 3)).toEqual(-1);
});

it("finds negative number in array with negatives", function () {
    const negatives = [-10, -5, -1, 0, 5];
    expect(binary_fn(negatives, -5)).toEqual(1);
});

it("finds zero in array with negatives and positives", function () {
    const negatives = [-10, -5, -1, 0, 5];
    expect(binary_fn(negatives, 0)).toEqual(3);
});

it("returns -1 for negative number not in array", function () {
    const negatives = [-10, -5, -1, 0, 5];
    expect(binary_fn(negatives, -3)).toEqual(-1);
});

it("returns -1 for number smaller than smallest negative", function () {
    const negatives = [-10, -5, -1, 0, 5];
    expect(binary_fn(negatives, -11)).toEqual(-1);
});

it("returns -1 for number larger than largest in mixed array", function () {
    const negatives = [-10, -5, -1, 0, 5];
    expect(binary_fn(negatives, 6)).toEqual(-1);
});

it("finds first element in large array", function () {
    const large = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(binary_fn(large, 1)).toEqual(0);
});

it("finds last element in large array", function () {
    const large = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(binary_fn(large, 100)).toEqual(10);
});

it("finds middle element in large array", function () {
    const large = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(binary_fn(large, 50)).toEqual(5);
});

it("returns -1 for element between existing elements in large array", function () {
    const large = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(binary_fn(large, 25)).toEqual(-1);
});

it("returns -1 for element larger than all in large array", function () {
    const large = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(binary_fn(large, 101)).toEqual(-1);
});

it.skip("finds duplicate element when duplicates present", function () {
    const duplicates = [1, 2, 2, 3, 4];
    expect(binary_fn(duplicates, 2)).toEqual(1);
});

it.skip("finds element in array with all same values", function () {
    const allSame = [5, 5, 5, 5, 5];
    expect(binary_fn(allSame, 5)).toEqual(0);
});

it("returns -1 for element not in array with all same values", function () {
    const allSame = [5, 5, 5, 5, 5];
    expect(binary_fn(allSame, 4)).toEqual(-1);
});
