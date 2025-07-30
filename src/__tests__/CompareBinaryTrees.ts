import { it, expect } from "vitest";
import compare from "@code/CompareBinaryTrees";
import { 
    tree, 
    tree2, 
    singleNodeTree, 
    leftSkewedTree, 
    rightSkewedTree, 
    perfectBalancedTree,
    duplicateValueTree,
    rootOnlyLeftTree,
    rootOnlyRightTree
} from "./tree";

it("returns true when comparing same tree instance", function () {
    expect(compare(tree, tree)).toEqual(true);
});

it("returns false when comparing different trees", function () {
    expect(compare(tree, tree2)).toEqual(false);
});

it("returns true when both trees are null", function () {
    expect(compare(null, null)).toEqual(true);
});

it("returns false when first tree is null and second is not", function () {
    expect(compare(null, tree)).toEqual(false);
});

it("returns false when second tree is null and first is not", function () {
    expect(compare(tree, null)).toEqual(false);
});

it("returns true when comparing identical single node trees", function () {
    const node1: BinaryNode<number> = {
        value: 42,
        left: null,
        right: null,
    };
    const node2: BinaryNode<number> = {
        value: 42,
        left: null,
        right: null,
    };
    
    expect(compare(node1, node2)).toEqual(true);
});

it("returns false when single node trees have different values", function () {
    const node1: BinaryNode<number> = {
        value: 42,
        left: null,
        right: null,
    };
    const node2: BinaryNode<number> = {
        value: 43,
        left: null,
        right: null,
    };
    
    expect(compare(node1, node2)).toEqual(false);
});

it("returns true when comparing identical simple trees", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: { value: 15, left: null, right: null },
    };
    const tree2: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: { value: 15, left: null, right: null },
    };
    
    expect(compare(tree1, tree2)).toEqual(true);
});

it("returns false when trees have different structure", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: { value: 15, left: null, right: null },
    };
    const tree2: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: null,
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});

it("returns false when trees have different leaf values", function () {
    const tree1: BinaryNode<number> = {
        value: 1,
        left: {
            value: 2,
            left: { value: 4, left: null, right: null },
            right: { value: 5, left: null, right: null },
        },
        right: { value: 3, left: null, right: null },
    };
    const tree2: BinaryNode<number> = {
        value: 1,
        left: {
            value: 2,
            left: { value: 4, left: null, right: null },
            right: { value: 6, left: null, right: null },
        },
        right: { value: 3, left: null, right: null },
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});

it("returns true when comparing same single node tree", function () {
    expect(compare(singleNodeTree, singleNodeTree)).toEqual(true);
});

it("returns false when comparing left-skewed tree with balanced tree", function () {
    expect(compare(leftSkewedTree, perfectBalancedTree)).toEqual(false);
});

it("returns false when comparing right-skewed tree with balanced tree", function () {
    expect(compare(rightSkewedTree, perfectBalancedTree)).toEqual(false);
});

it("returns false when comparing left-skewed with right-skewed tree", function () {
    expect(compare(leftSkewedTree, rightSkewedTree)).toEqual(false);
});

it("returns true when comparing identical trees with duplicate values", function () {
    const duplicateTree2: BinaryNode<number> = {
        value: 5,
        left: {
            value: 5,
            left: { value: 3, left: null, right: null },
            right: { 
                value: 5, 
                left: { value: 4, left: null, right: null },
                right: { value: 5, left: null, right: null },
            },
        },
        right: {
            value: 7,
            left: { value: 5, left: null, right: null },
            right: { 
                value: 7,
                left: { value: 6, left: null, right: null }, 
                right: { value: 8, left: null, right: null },
            },
        },
    };
    
    expect(compare(duplicateValueTree, duplicateTree2)).toEqual(true);
});

it("returns false when comparing trees with only left vs only right subtrees", function () {
    expect(compare(rootOnlyLeftTree, rootOnlyRightTree)).toEqual(false);
});

it("returns false when root values differ", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: null,
        right: null,
    };
    const tree2: BinaryNode<number> = {
        value: 20,
        left: null,
        right: null,
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});

it("returns false when left subtree exists in first but not second", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: null,
    };
    const tree2: BinaryNode<number> = {
        value: 10,
        left: null,
        right: null,
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});

it("returns false when right subtree exists in first but not second", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: null,
        right: { value: 15, left: null, right: null },
    };
    const tree2: BinaryNode<number> = {
        value: 10,
        left: null,
        right: null,
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});

it("returns false when subtrees have different depths", function () {
    const shallow: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: { value: 15, left: null, right: null },
    };
    const deep: BinaryNode<number> = {
        value: 10,
        left: { 
            value: 5, 
            left: { value: 3, left: null, right: null },
            right: null 
        },
        right: { value: 15, left: null, right: null },
    };
    
    expect(compare(shallow, deep)).toEqual(false);
});

it("returns true when comparing identical perfect binary trees", function () {
    const perfectTree2: BinaryNode<number> = {
        value: 8,
        left: {
            value: 4,
            left: {
                value: 2,
                left: { value: 1, left: null, right: null },
                right: { value: 3, left: null, right: null },
            },
            right: {
                value: 6,
                left: { value: 5, left: null, right: null },
                right: { value: 7, left: null, right: null },
            },
        },
        right: {
            value: 12,
            left: {
                value: 10,
                left: { value: 9, left: null, right: null },
                right: { value: 11, left: null, right: null },
            },
            right: {
                value: 14,
                left: { value: 13, left: null, right: null },
                right: { value: 15, left: null, right: null },
            },
        },
    };
    
    expect(compare(perfectBalancedTree, perfectTree2)).toEqual(true);
});

it("returns false when trees have same structure but one child is null vs non-null", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: { value: 3, left: null, right: null },
            right: null,
        },
        right: { value: 15, left: null, right: null },
    };
    const tree2: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: { value: 3, left: null, right: null },
            right: { value: 7, left: null, right: null },
        },
        right: { value: 15, left: null, right: null },
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});

it("returns false when trees mirror each other", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: { value: 15, left: null, right: null },
    };
    const tree2: BinaryNode<number> = {
        value: 10,
        left: { value: 15, left: null, right: null },
        right: { value: 5, left: null, right: null },
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});

it("returns false when one subtree has additional levels", function () {
    const shallow: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: { value: 3, left: null, right: null },
            right: { value: 7, left: null, right: null },
        },
        right: { value: 15, left: null, right: null },
    };
    const deep: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: { 
                value: 3, 
                left: { value: 1, left: null, right: null },
                right: { value: 4, left: null, right: null },
            },
            right: { value: 7, left: null, right: null },
        },
        right: { value: 15, left: null, right: null },
    };
    
    expect(compare(shallow, deep)).toEqual(false);
});

it("returns false when same values but different positions", function () {
    const tree1: BinaryNode<number> = {
        value: 10,
        left: { 
            value: 5,
            left: { value: 3, left: null, right: null },
            right: { value: 7, left: null, right: null },
        },
        right: { value: 15, left: null, right: null },
    };
    const tree2: BinaryNode<number> = {
        value: 10,
        left: { 
            value: 5,
            left: { value: 7, left: null, right: null },
            right: { value: 3, left: null, right: null },
        },
        right: { value: 15, left: null, right: null },
    };
    
    expect(compare(tree1, tree2)).toEqual(false);
});
