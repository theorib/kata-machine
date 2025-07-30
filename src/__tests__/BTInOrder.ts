import { it, expect } from "vitest";
import bt_in_order from "@code/BTInOrder";
import { 
    tree, 
    tree2, 
    perfectBalancedTree, 
    complexUnbalancedTree, 
    duplicateValueTree,
    leftSkewedTree,
    rightSkewedTree,
    singleNodeTree,
    rootOnlyLeftTree,
    rootOnlyRightTree
} from "./tree";

it("should traverse balanced tree in in-order (left-root-right)", function () {
    expect(bt_in_order(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});

it("should return empty array for null tree", function () {
    expect(bt_in_order(null as any)).toEqual([]);
});

it("should traverse tree with only left child from root", function () {
    expect(bt_in_order(rootOnlyLeftTree)).toEqual([2, 5, 7, 10]);
});

it("should traverse tree with only right child from root", function () {
    expect(bt_in_order(rootOnlyRightTree)).toEqual([10, 12, 15, 20]);
});

it("should traverse single node tree", function () {
    expect(bt_in_order(singleNodeTree)).toEqual([42]);
});

it("should traverse left-skewed tree in in-order", function () {
    expect(bt_in_order(leftSkewedTree)).toEqual([0, 1, 5, 10]);
});

it("should traverse right-skewed tree in in-order", function () {
    expect(bt_in_order(rightSkewedTree)).toEqual([10, 15, 20, 25]);
});

it("should traverse larger balanced tree in in-order", function () {
    expect(bt_in_order(tree2)).toEqual([5, 7, 10, 15, 20, 21, 29, 30, 45, 49, 50]);
});

it("should traverse deep unbalanced tree in in-order", function () {
    const deepTree: BinaryNode<number> = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 3,
                left: {
                    value: 4,
                    left: { value: 5, left: null, right: null },
                    right: null,
                },
                right: null,
            },
            right: null,
        },
        right: null,
    };
    expect(bt_in_order(deepTree)).toEqual([5, 4, 3, 2, 1]);
});

it("should traverse tree with complex subtree combinations", function () {
    const complexTree: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: null,
            right: {
                value: 8,
                left: { value: 6, left: null, right: null },
                right: { value: 9, left: null, right: null },
            },
        },
        right: {
            value: 15,
            left: {
                value: 12,
                left: { value: 11, left: null, right: null },
                right: { value: 13, left: null, right: null },
            },
            right: null,
        },
    };
    expect(bt_in_order(complexTree)).toEqual([5, 6, 8, 9, 10, 11, 12, 13, 15]);
});

it("should traverse tree with duplicate values in in-order", function () {
    expect(bt_in_order(duplicateValueTree)).toEqual([3, 5, 4, 5, 5, 5, 5, 7, 6, 7, 8]);
});

it("should traverse perfect balanced tree in in-order", function () {
    expect(bt_in_order(perfectBalancedTree)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

it("should traverse complex unbalanced tree in in-order", function () {
    expect(bt_in_order(complexUnbalancedTree)).toEqual([10, 12, 15, 18, 25, 30, 32, 35, 50, 75, 78, 80, 85, 90, 95, 100]);
});
