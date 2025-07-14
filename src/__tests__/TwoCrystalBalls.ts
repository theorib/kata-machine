import { it, expect } from "vitest";
import twoCrystakBalls from "@code/TwoCrystalBalls";

it("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(twoCrystakBalls(data)).toEqual(idx);
    expect(twoCrystakBalls(new Array(821).fill(false))).toEqual(-1);
});

it("two crystal balls-2", function () {
    expect(twoCrystakBalls([])).toEqual(-1);
});

it("two crystal balls-3", function () {
    expect(twoCrystakBalls([true])).toEqual(0);
    expect(twoCrystakBalls([false])).toEqual(-1);
});

it("two crystal balls-4", function () {
    expect(twoCrystakBalls([false, true])).toEqual(1);
    expect(twoCrystakBalls([true, true])).toEqual(0);
    expect(twoCrystakBalls([false, false])).toEqual(-1);
});

it("two crystal balls-5", function () {
    const data = [false, false, false, false, true, true, true];
    expect(twoCrystakBalls(data)).toEqual(4);
});

it("two crystal balls-6", function () {
    const allTrue = new Array(100).fill(true);
    expect(twoCrystakBalls(allTrue)).toEqual(0);
});

it("two crystal balls-7", function () {
    const data = [false, false, false, false, false, false, true];
    expect(twoCrystakBalls(data)).toEqual(6);
});
it("two crystal balls-8", function () {
    const data = [false, false, false, false, false, false, false, true];
    expect(twoCrystakBalls(data)).toEqual(7);
});
