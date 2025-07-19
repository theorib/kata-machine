import { it, expect } from "vitest";
import twoCrystalBalls from "@code/TwoCrystalBalls";

it("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(twoCrystalBalls(data)).toEqual(idx);
    expect(twoCrystalBalls(new Array(821).fill(false))).toEqual(-1);
});

it("two crystal balls-2", function () {
    expect(twoCrystalBalls([])).toEqual(-1);
});

it("two crystal balls-3", function () {
    expect(twoCrystalBalls([true])).toEqual(0);
    expect(twoCrystalBalls([false])).toEqual(-1);
});

it("two crystal balls-4", function () {
    expect(twoCrystalBalls([false, true])).toEqual(1);
    expect(twoCrystalBalls([true, true])).toEqual(0);
    expect(twoCrystalBalls([false, false])).toEqual(-1);
});

it("two crystal balls-5", function () {
    const data = [false, false, false, false, true, true, true];
    expect(twoCrystalBalls(data)).toEqual(4);
});

it("two crystal balls-6", function () {
    const allTrue = new Array(100).fill(true);
    expect(twoCrystalBalls(allTrue)).toEqual(0);
});

it("two crystal balls-7", function () {
    const data = [false, false, false, false, false, false, true];
    expect(twoCrystalBalls(data)).toEqual(6);
});
it("two crystal balls-8", function () {
    const data = [false, false, false, false, false, false, false, true];
    expect(twoCrystalBalls(data)).toEqual(7);
});
