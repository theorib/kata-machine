import { it, expect } from "vitest";
import quickSort from "@code/QuickSort";

it("should sort array with mixed positive integers in ascending order", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    
    quickSort(arr);
    
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

it("should handle empty array without errors", function () {
    const arr: number[] = [];
    
    quickSort(arr);
    
    expect(arr).toEqual([]);
});

it("should handle single element array unchanged", function () {
    const arr = [1];
    
    quickSort(arr);
    
    expect(arr).toEqual([1]);
});

it("should sort array with all identical elements", function () {
    const arr = [5, 5, 5, 5];
    
    quickSort(arr);
    
    expect(arr).toEqual([5, 5, 5, 5]);
});

it("should handle already sorted array in ascending order", function () {
    const arr = [1, 2, 3, 4, 5];
    
    quickSort(arr);
    
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("should sort reverse sorted array into ascending order", function () {
    const arr = [5, 4, 3, 2, 1];
    
    quickSort(arr);
    
    expect(arr).toEqual([1, 2, 3, 4, 5]);
});

it("should sort array containing negative numbers and zero", function () {
    const arr = [-5, -1, -10, 3, 0];
    
    quickSort(arr);
    
    expect(arr).toEqual([-10, -5, -1, 0, 3]);
});

it("should sort two-element array correctly", function () {
    const arr = [2, 1];
    
    quickSort(arr);
    
    expect(arr).toEqual([1, 2]);
});

it("should handle array with only negative numbers", function () {
    const arr = [-3, -1, -7, -2];
    
    quickSort(arr);
    
    expect(arr).toEqual([-7, -3, -2, -1]);
});

it("should sort array with duplicate values mixed with unique values", function () {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    
    quickSort(arr);
    
    expect(arr).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
});

it("should handle large numbers correctly", function () {
    const arr = [1000000, 1, 999999];
    
    quickSort(arr);
    
    expect(arr).toEqual([1, 999999, 1000000]);
});

it("should handle array with floating point precision edge case", function () {
    const arr = [0, -0];
    
    quickSort(arr);
    
    expect(arr).toEqual([-0, 0]);
});
