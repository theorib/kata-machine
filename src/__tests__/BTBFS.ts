import { it, expect } from "vitest";
import bfs from "@code/BTBFS";
import { 
    tree, 
    tree2, 
    singleNodeTree, 
    leftSkewedTree, 
    rightSkewedTree, 
    perfectBalancedTree,
    complexUnbalancedTree,
    duplicateValueTree,
    rootOnlyLeftTree,
    rootOnlyRightTree
} from "./tree";

// Edge Cases
it("should return false when searching in null tree", function () {
    expect(bfs(null as BinaryNode<number> | null, 20)).toEqual(false);
});

it("should return false when searching in null tree with zero value", function () {
    expect(bfs(null as BinaryNode<number> | null, 0)).toEqual(false);
});

// Single Node Tests
it("should find value in single node tree", function () {
    expect(bfs(singleNodeTree, 42)).toEqual(true);
});

it("should not find different value in single node tree", function () {
    expect(bfs(singleNodeTree, 43)).toEqual(false);
});

// Basic Tree (tree) - Found Values
it("should find root value in basic tree", function () {
    expect(bfs(tree, 20)).toEqual(true);
});

it("should find leaf value in basic tree left side", function () {
    expect(bfs(tree, 7)).toEqual(true);
});

it("should find leaf value in basic tree right side", function () {
    expect(bfs(tree, 45)).toEqual(true);
});

it("should find leftmost leaf in basic tree", function () {
    expect(bfs(tree, 5)).toEqual(true);
});

it("should find rightmost leaf in basic tree", function () {
    expect(bfs(tree, 100)).toEqual(true);
});

it("should find internal node in basic tree", function () {
    expect(bfs(tree, 30)).toEqual(true);
});

// Basic Tree (tree) - Not Found Values
it("should not find value smaller than all nodes in basic tree", function () {
    expect(bfs(tree, 1)).toEqual(false);
});

it("should not find value larger than all nodes in basic tree", function () {
    expect(bfs(tree, 101)).toEqual(false);
});

it("should not find non-existent intermediate value in basic tree", function () {
    expect(bfs(tree, 69)).toEqual(false);
});

// Alternative Tree Structure (tree2) Tests
it("should find root in alternative tree structure", function () {
    expect(bfs(tree2, 20)).toEqual(true);
});

it("should find deep right node in alternative tree structure", function () {
    expect(bfs(tree2, 49)).toEqual(true);
});

it("should find deep left node in alternative tree structure", function () {
    expect(bfs(tree2, 21)).toEqual(true);
});

it("should not find non-existent value in alternative tree structure", function () {
    expect(bfs(tree2, 100)).toEqual(false);
});

// Left-Skewed Tree Tests
it("should find root in left-skewed tree", function () {
    expect(bfs(leftSkewedTree, 10)).toEqual(true);
});

it("should find intermediate node in left-skewed tree", function () {
    expect(bfs(leftSkewedTree, 5)).toEqual(true);
});

it("should find deepest node in left-skewed tree", function () {
    expect(bfs(leftSkewedTree, 0)).toEqual(true);
});

it("should not find non-existent value in left-skewed tree", function () {
    expect(bfs(leftSkewedTree, 3)).toEqual(false);
});

// Right-Skewed Tree Tests
it("should find root in right-skewed tree", function () {
    expect(bfs(rightSkewedTree, 10)).toEqual(true);
});

it("should find intermediate node in right-skewed tree", function () {
    expect(bfs(rightSkewedTree, 15)).toEqual(true);
});

it("should find deepest node in right-skewed tree", function () {
    expect(bfs(rightSkewedTree, 25)).toEqual(true);
});

it("should not find non-existent value in right-skewed tree", function () {
    expect(bfs(rightSkewedTree, 30)).toEqual(false);
});

// Perfect Balanced Tree Tests
it("should find root in perfect balanced tree", function () {
    expect(bfs(perfectBalancedTree, 8)).toEqual(true);
});

it("should find leftmost leaf in perfect balanced tree", function () {
    expect(bfs(perfectBalancedTree, 1)).toEqual(true);
});

it("should find rightmost leaf in perfect balanced tree", function () {
    expect(bfs(perfectBalancedTree, 15)).toEqual(true);
});

it("should find internal nodes in perfect balanced tree", function () {
    expect(bfs(perfectBalancedTree, 4)).toEqual(true);
});

it("should not find non-existent value in perfect balanced tree", function () {
    expect(bfs(perfectBalancedTree, 16)).toEqual(false);
});

// Complex Unbalanced Tree Tests
it("should find root in complex unbalanced tree", function () {
    expect(bfs(complexUnbalancedTree, 50)).toEqual(true);
});

it("should find deep left node in complex unbalanced tree", function () {
    expect(bfs(complexUnbalancedTree, 12)).toEqual(true);
});

it("should find deep right node in complex unbalanced tree", function () {
    expect(bfs(complexUnbalancedTree, 100)).toEqual(true);
});

it("should find sparse branch node in complex unbalanced tree", function () {
    expect(bfs(complexUnbalancedTree, 75)).toEqual(true);
});

it("should not find non-existent value in complex unbalanced tree", function () {
    expect(bfs(complexUnbalancedTree, 99)).toEqual(false);
});

// Duplicate Value Tree Tests
it("should find duplicate root value in tree with duplicates", function () {
    expect(bfs(duplicateValueTree, 5)).toEqual(true);
});

it("should find duplicate non-root value in tree with duplicates", function () {
    expect(bfs(duplicateValueTree, 7)).toEqual(true);
});

it("should find unique value in tree with duplicates", function () {
    expect(bfs(duplicateValueTree, 3)).toEqual(true);
});

it("should not find non-existent value in tree with duplicates", function () {
    expect(bfs(duplicateValueTree, 10)).toEqual(false);
});

// Root with Only Left Subtree Tests
it("should find root in tree with only left subtree", function () {
    expect(bfs(rootOnlyLeftTree, 10)).toEqual(true);
});

it("should find left child in tree with only left subtree", function () {
    expect(bfs(rootOnlyLeftTree, 5)).toEqual(true);
});

it("should find leaf in tree with only left subtree", function () {
    expect(bfs(rootOnlyLeftTree, 2)).toEqual(true);
});

it("should not find non-existent value in tree with only left subtree", function () {
    expect(bfs(rootOnlyLeftTree, 20)).toEqual(false);
});

// Root with Only Right Subtree Tests
it("should find root in tree with only right subtree", function () {
    expect(bfs(rootOnlyRightTree, 10)).toEqual(true);
});

it("should find right child in tree with only right subtree", function () {
    expect(bfs(rootOnlyRightTree, 15)).toEqual(true);
});

it("should find leaf in tree with only right subtree", function () {
    expect(bfs(rootOnlyRightTree, 20)).toEqual(true);
});

it("should not find non-existent value in tree with only right subtree", function () {
    expect(bfs(rootOnlyRightTree, 5)).toEqual(false);
});
