import { it, expect } from "vitest";
import bt_post_order from "@code/BTPostOrder";
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

it("should traverse balanced tree in post-order (left-right-root)", function () {
    expect(bt_post_order(tree)).toEqual([
        7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
    ]);
});

it("should return empty array for null tree", function () {
    expect(bt_post_order(null as any)).toEqual([]);
});

it("should traverse tree with only left child from root", function () {
    expect(bt_post_order(rootOnlyLeftTree)).toEqual([2, 7, 5, 10]);
});

it("should traverse tree with only right child from root", function () {
    expect(bt_post_order(rootOnlyRightTree)).toEqual([12, 20, 15, 10]);
});

it("should traverse single node tree", function () {
    expect(bt_post_order(singleNodeTree)).toEqual([42]);
});

it("should traverse left-skewed tree in post-order", function () {
    expect(bt_post_order(leftSkewedTree)).toEqual([0, 1, 5, 10]);
});

it("should traverse right-skewed tree in post-order", function () {
    expect(bt_post_order(rightSkewedTree)).toEqual([25, 20, 15, 10]);
});

it("should traverse larger balanced tree in post-order", function () {
    expect(bt_post_order(tree2)).toEqual([7, 5, 15, 10, 21, 29, 49, 45, 30, 50, 20]);
});

it("should traverse deep unbalanced tree in post-order", function () {
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
    expect(bt_post_order(deepTree)).toEqual([5, 4, 3, 2, 1]);
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
    expect(bt_post_order(complexTree)).toEqual([6, 9, 8, 5, 11, 13, 12, 15, 10]);
});

it("should traverse tree with duplicate values in post-order", function () {
    expect(bt_post_order(duplicateValueTree)).toEqual([3, 4, 5, 5, 5, 5, 6, 8, 7, 7, 5]);
});

it("should traverse perfect balanced tree in post-order", function () {
    expect(bt_post_order(perfectBalancedTree)).toEqual([1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8]);
});

it("should traverse complex unbalanced tree in post-order", function () {
    expect(bt_post_order(complexUnbalancedTree)).toEqual([12, 18, 15, 10, 32, 30, 35, 25, 78, 85, 80, 100, 95, 90, 75, 50]);
});
