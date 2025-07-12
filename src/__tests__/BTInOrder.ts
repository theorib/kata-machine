import { it, expect } from "vitest";
import bt_in_order from "@code/BTInOrder";
import { tree } from "./tree";

it("In order", function () {
    expect(bt_in_order(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});

it("In order-2", function () {
    expect(bt_in_order(null)).toEqual([]);
});

it("In order-3", function () {
    const singleNode: BinaryNode<number> = { value: 42, left: null, right: null };
    expect(bt_in_order(singleNode)).toEqual([42]);
});

it("In order-4", function () {
    const leftOnlyTree: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: { value: 1, left: null, right: null },
            right: null
        },
        right: null
    };
    expect(bt_in_order(leftOnlyTree)).toEqual([1, 5, 10]);
});

it("In order-5", function () {
    const rightOnlyTree: BinaryNode<number> = {
        value: 10,
        left: null,
        right: {
            value: 15,
            left: null,
            right: { value: 20, left: null, right: null }
        }
    };
    expect(bt_in_order(rightOnlyTree)).toEqual([10, 15, 20]);
});
