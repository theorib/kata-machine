import { it, expect } from "vitest";
import two_crystal_balls from "@code/TwoCrystalBalls";

it("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
});

it("two crystal balls-2", function () {
    expect(two_crystal_balls([])).toEqual(-1);
});

it("two crystal balls-3", function () {
    expect(two_crystal_balls([true])).toEqual(0);
    expect(two_crystal_balls([false])).toEqual(-1);
});

it("two crystal balls-4", function () {
    expect(two_crystal_balls([false, true])).toEqual(1);
    expect(two_crystal_balls([true, true])).toEqual(0);
    expect(two_crystal_balls([false, false])).toEqual(-1);
});

it("two crystal balls-5", function () {
    const data = [false, false, false, false, true, true, true];
    expect(two_crystal_balls(data)).toEqual(4);
});

it("two crystal balls-6", function () {
    const allTrue = new Array(100).fill(true);
    expect(two_crystal_balls(allTrue)).toEqual(0);
});
