import { it, expect } from "vitest";
import mergeSort from "@code/MergeSort";

// Edge cases
it("should handle empty array", function () {
    const arr: number[] = [];
    const result = mergeSort(arr);
    expect(result).toEqual([]);
});

it("should handle single element array", function () {
    const arr = [1];
    const result = mergeSort(arr);
    expect(result).toEqual([1]);
});

it("should handle two element array", function () {
    const arr = [2, 1];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2]);
});

// Basic sorting scenarios
it("should sort unsorted array with distinct elements", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const result = mergeSort(arr);
    expect(result).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("should sort longer unsorted array", function () {
    const arr = [7, 6, 3, 4, 8, 2, 5, 9, 1, 0];
    const result = mergeSort(arr);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

// Already sorted arrays
it("should handle already sorted array", function () {
    const arr = [1, 2, 3, 4, 5];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

it("should handle reverse sorted array", function () {
    const arr = [5, 4, 3, 2, 1];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

// Duplicate element scenarios
it("should handle array with all identical elements", function () {
    const arr = [5, 5, 5, 5];
    const result = mergeSort(arr);
    expect(result).toEqual([5, 5, 5, 5]);
});

it("should handle array with multiple duplicates", function () {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

it("should handle duplicates at merge boundaries", function () {
    const arr = [4, 2, 4, 1, 4, 3];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 4, 4]);
});

it("should maintain stability with equal elements", function () {
    const arr = [2, 1, 2, 1, 2];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 1, 2, 2, 2]);
});

// Negative numbers
it("should handle negative numbers", function () {
    const arr = [-5, -1, -10, 3, 0];
    const result = mergeSort(arr);
    expect(result).toEqual([-10, -5, -1, 0, 3]);
});

it("should handle mixed positive and negative numbers", function () {
    const arr = [1000, 1, 999, 2, 998];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 998, 999, 1000]);
});

// Larger arrays
it("should handle medium sized array", function () {
    const arr = [100, 50, 25, 75, 10, 90, 80, 20, 60, 40];
    const result = mergeSort(arr);
    expect(result).toEqual([10, 20, 25, 40, 50, 60, 75, 80, 90, 100]);
});

// Specific merge scenarios that test edge cases during merge process
it("should handle alternating pattern requiring multiple merges", function () {
    const arr = [1, 3, 5, 2, 4, 6];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

it("should handle duplicates split across left and right subarrays", function () {
    const arr = [3, 3, 1, 3, 3];
    const result = mergeSort(arr);
    expect(result).toEqual([1, 3, 3, 3, 3]);
});
