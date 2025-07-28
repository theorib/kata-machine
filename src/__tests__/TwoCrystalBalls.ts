import { it, expect, describe } from "vitest";
import twoCrystalBalls from "@code/TwoCrystalBalls";

describe("TwoCrystalBalls", () => {
    describe("empty and single element arrays", () => {
        it("should return -1 for empty array", () => {
            expect(twoCrystalBalls([])).toEqual(-1);
        });

        it("should return 0 when single element is true", () => {
            expect(twoCrystalBalls([true])).toEqual(0);
        });

        it("should return -1 when single element is false", () => {
            expect(twoCrystalBalls([false])).toEqual(-1);
        });
    });

    describe("two element arrays", () => {
        it("should return 1 when break starts at second position", () => {
            expect(twoCrystalBalls([false, true])).toEqual(1);
        });

        it("should return 0 when break starts at first position", () => {
            expect(twoCrystalBalls([true, true])).toEqual(0);
        });

        it("should return -1 when no breaks occur", () => {
            expect(twoCrystalBalls([false, false])).toEqual(-1);
        });
    });

    describe("small arrays", () => {
        it("should find break at middle position", () => {
            const data = [false, false, false, false, true, true, true];
            expect(twoCrystalBalls(data)).toEqual(4);
        });

        it("should find break at last position", () => {
            const data = [false, false, false, false, false, false, true];
            expect(twoCrystalBalls(data)).toEqual(6);
        });

        it("should find break at second to last position", () => {
            const data = [false, false, false, false, false, false, false, true];
            expect(twoCrystalBalls(data)).toEqual(7);
        });
    });

    describe("all true arrays", () => {
        it("should return 0 when all elements are true", () => {
            const allTrue = new Array(100).fill(true);
            expect(twoCrystalBalls(allTrue)).toEqual(0);
        });

        it("should return 0 for single true element", () => {
            expect(twoCrystalBalls([true])).toEqual(0);
        });
    });

    describe("all false arrays", () => {
        it("should return -1 when no breaks occur in medium array", () => {
            expect(twoCrystalBalls(new Array(821).fill(false))).toEqual(-1);
        });

        it("should return -1 when no breaks occur in large array", () => {
            expect(twoCrystalBalls(new Array(10000).fill(false))).toEqual(-1);
        });
    });

    describe("deterministic test cases", () => {
        it("should find break at position 1000 in 10000 element array", () => {
            const data = new Array(10000).fill(false);
            for (let i = 1000; i < 10000; ++i) {
                data[i] = true;
            }
            expect(twoCrystalBalls(data)).toEqual(1000);
        });

        it("should find break at position 5000 in 10000 element array", () => {
            const data = new Array(10000).fill(false);
            for (let i = 5000; i < 10000; ++i) {
                data[i] = true;
            }
            expect(twoCrystalBalls(data)).toEqual(5000);
        });

        it("should find break at position 9999 in 10000 element array", () => {
            const data = new Array(10000).fill(false);
            data[9999] = true;
            expect(twoCrystalBalls(data)).toEqual(9999);
        });
    });

    describe("edge cases for sqrt step size", () => {
        it("should handle perfect square array size", () => {
            const data = new Array(16).fill(false);
            data[8] = true;
            for (let i = 9; i < 16; ++i) {
                data[i] = true;
            }
            expect(twoCrystalBalls(data)).toEqual(8);
        });

        it("should handle break at exact step boundary", () => {
            const data = new Array(100).fill(false);
            for (let i = 10; i < 100; ++i) {
                data[i] = true;
            }
            expect(twoCrystalBalls(data)).toEqual(10);
        });

        it("should handle break just before step boundary", () => {
            const data = new Array(100).fill(false);
            for (let i = 9; i < 100; ++i) {
                data[i] = true;
            }
            expect(twoCrystalBalls(data)).toEqual(9);
        });

        it("should handle break just after step boundary", () => {
            const data = new Array(100).fill(false);
            for (let i = 11; i < 100; ++i) {
                data[i] = true;
            }
            expect(twoCrystalBalls(data)).toEqual(11);
        });
    });

    describe("large arrays", () => {
        it("should handle very large array with early break", () => {
            const data = new Array(1000000).fill(false);
            for (let i = 100; i < 1000000; ++i) {
                data[i] = true;
            }
            expect(twoCrystalBalls(data)).toEqual(100);
        });

        it("should handle very large array with late break", () => {
            const data = new Array(1000000).fill(false);
            for (let i = 999900; i < 1000000; ++i) {
                data[i] = true;
            }
            expect(twoCrystalBalls(data)).toEqual(999900);
        });
    });

    describe("step size edge cases", () => {
        it("should handle array size smaller than step", () => {
            const data = [false, true];
            expect(twoCrystalBalls(data)).toEqual(1);
        });

        it("should handle array where step equals array length", () => {
            const data = new Array(4).fill(false);
            data[2] = true;
            data[3] = true;
            expect(twoCrystalBalls(data)).toEqual(2);
        });
    });
});
