import { it, expect } from "vitest";
import linear_fn from "@code/LinearSearchList";

it("linear search array", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(linear_fn(foo, 69)).toEqual(true);
    expect(linear_fn(foo, 1336)).toEqual(false);
    expect(linear_fn(foo, 69420)).toEqual(true);
    expect(linear_fn(foo, 69421)).toEqual(false);
    expect(linear_fn(foo, 1)).toEqual(true);
    expect(linear_fn(foo, 0)).toEqual(false);
});

it("linear search array-2", function () {
    expect(linear_fn([], 5)).toEqual(false);
});

it("linear search array-3", function () {
    expect(linear_fn([1], 1)).toEqual(true);
    expect(linear_fn([1], 2)).toEqual(false);
});

it("linear search array-4", function () {
    const duplicates = [5, 5, 5, 5, 5];
    expect(linear_fn(duplicates, 5)).toEqual(true);
    expect(linear_fn(duplicates, 4)).toEqual(false);
});

it("linear search array-5", function () {
    const negatives = [-10, -5, -1, 0, 5];
    expect(linear_fn(negatives, -5)).toEqual(true);
    expect(linear_fn(negatives, -3)).toEqual(false);
    expect(linear_fn(negatives, 0)).toEqual(true);
});
