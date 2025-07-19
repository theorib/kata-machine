import { it, expect } from "vitest";
import bt_post_order from "@code/BTPostOrder";
import { tree } from "./tree";

it("post order", function () {
    expect(bt_post_order(tree)).toEqual([
        7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
    ]);
});

it("post order-2", function () {
    expect(bt_post_order(null)).toEqual([]);
});

it("post order-3", function () {
    const singleNode: BinaryNode<number> = {
        value: 42,
        left: null,
        right: null,
    };
    expect(bt_post_order(singleNode)).toEqual([42]);
});

it("post order-4", function () {
    const leftOnlyTree: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: { value: 1, left: null, right: null },
            right: null,
        },
        right: null,
    };
    expect(bt_post_order(leftOnlyTree)).toEqual([1, 5, 10]);
});

it("post order-5", function () {
    const rightOnlyTree: BinaryNode<number> = {
        value: 10,
        left: null,
        right: {
            value: 15,
            left: null,
            right: { value: 20, left: null, right: null },
        },
    };
    expect(bt_post_order(rightOnlyTree)).toEqual([20, 15, 10]);
});
