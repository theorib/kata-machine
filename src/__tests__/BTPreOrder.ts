import { it, expect } from "vitest";
import bt_pre_order from "@code/BTPreOrder";
import { tree } from "./tree";

it("Pre order", function () {
    expect(bt_pre_order(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});

it("Pre order-2", function () {
    expect(bt_pre_order(null)).toEqual([]);
});

it("Pre order-3", function () {
    const singleNode: BinaryNode<number> = { value: 42, left: null, right: null };
    expect(bt_pre_order(singleNode)).toEqual([42]);
});

it("Pre order-4", function () {
    const leftOnlyTree: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: { value: 1, left: null, right: null },
            right: null
        },
        right: null
    };
    expect(bt_pre_order(leftOnlyTree)).toEqual([10, 5, 1]);
});

it("Pre order-5", function () {
    const rightOnlyTree: BinaryNode<number> = {
        value: 10,
        left: null,
        right: {
            value: 15,
            left: null,
            right: { value: 20, left: null, right: null }
        }
    };
    expect(bt_pre_order(rightOnlyTree)).toEqual([10, 15, 20]);
});
