import { it, expect } from "vitest";
import compare from "@code/CompareBinaryTrees";
import { tree, tree2 } from "./tree";

it("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});

it("Compare Binary Trees-2", function () {
    expect(compare(null, null)).toEqual(true);
    expect(compare(null, tree)).toEqual(false);
    expect(compare(tree, null)).toEqual(false);
});

it("Compare Binary Trees-3", function () {
    const singleNode1: BinaryNode<number> = { value: 42, left: null, right: null };
    const singleNode2: BinaryNode<number> = { value: 42, left: null, right: null };
    const singleNode3: BinaryNode<number> = { value: 43, left: null, right: null };
    
    expect(compare(singleNode1, singleNode2)).toEqual(true);
    expect(compare(singleNode1, singleNode3)).toEqual(false);
});

it("Compare Binary Trees-4", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: { value: 15, left: null, right: null }
    };
    
    const tree2: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: { value: 15, left: null, right: null }
    };
    
    const tree3: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: null
    };
    
    expect(compare(tree1, tree2)).toEqual(true);
    expect(compare(tree1, tree3)).toEqual(false);
});

it("Compare Binary Trees-5", function () {
    const tree1: BinaryNode<number> = {
        value: 1,
        left: {
            value: 2,
            left: { value: 4, left: null, right: null },
            right: { value: 5, left: null, right: null }
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    };
    
    const tree2: BinaryNode<number> = {
        value: 1,
        left: {
            value: 2,
            left: { value: 4, left: null, right: null },
            right: { value: 6, left: null, right: null }
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});
