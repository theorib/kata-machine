import { it, expect } from "vitest";
import bt_pre_order from "@code/BTPreOrder";
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

it("should traverse balanced tree in pre-order (root-left-right)", function () {
    expect(bt_pre_order(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});

it("should return empty array for null tree", function () {
    expect(bt_pre_order(null as any)).toEqual([]);
});

it("should traverse tree with only left child from root", function () {
    expect(bt_pre_order(rootOnlyLeftTree)).toEqual([10, 5, 2, 7]);
});

it("should traverse tree with only right child from root", function () {
    expect(bt_pre_order(rootOnlyRightTree)).toEqual([10, 15, 12, 20]);
});

it("should traverse single node tree", function () {
    expect(bt_pre_order(singleNodeTree)).toEqual([42]);
});

it("should traverse left-skewed tree in pre-order", function () {
    expect(bt_pre_order(leftSkewedTree)).toEqual([10, 5, 1, 0]);
});

it("should traverse right-skewed tree in pre-order", function () {
    expect(bt_pre_order(rightSkewedTree)).toEqual([10, 15, 20, 25]);
});

it("should traverse larger balanced tree in pre-order", function () {
    expect(bt_pre_order(tree2)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 21, 45, 49]);
});

it("should traverse deep unbalanced tree in pre-order", function () {
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
    expect(bt_pre_order(deepTree)).toEqual([1, 2, 3, 4, 5]);
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
    expect(bt_pre_order(complexTree)).toEqual([10, 5, 8, 6, 9, 15, 12, 11, 13]);
});

it("should traverse tree with duplicate values in pre-order", function () {
    expect(bt_pre_order(duplicateValueTree)).toEqual([5, 5, 3, 5, 4, 5, 7, 5, 7, 6, 8]);
});

it("should traverse perfect balanced tree in pre-order", function () {
    expect(bt_pre_order(perfectBalancedTree)).toEqual([8, 4, 2, 1, 3, 6, 5, 7, 12, 10, 9, 11, 14, 13, 15]);
});

it("should traverse complex unbalanced tree in pre-order", function () {
    expect(bt_pre_order(complexUnbalancedTree)).toEqual([50, 25, 10, 15, 12, 18, 35, 30, 32, 75, 90, 80, 78, 85, 95, 100]);
});
