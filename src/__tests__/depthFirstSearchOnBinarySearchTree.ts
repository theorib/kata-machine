import { it, expect, describe } from "vitest";
import dfs from "@code/depthFirstSearchOnBinarySearchTree";
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

describe("Depth First Search on Binary Search Tree", () => {
    describe("Basic functionality", () => {
        it("should find existing value in right subtree", () => {
            expect(dfs(tree, 45)).toEqual(true);
        });

        it("should find existing value in left subtree", () => {
            expect(dfs(tree, 7)).toEqual(true);
        });

        it("should return false for non-existing value", () => {
            expect(dfs(tree, 69)).toEqual(false);
        });

        it("should find root node value", () => {
            expect(dfs(tree, 20)).toEqual(true);
        });
    });

    describe("Edge cases", () => {
        it("should return false for null/empty tree", () => {
            expect(dfs(null, 5)).toEqual(false);
        });

        it("should find value in single node tree", () => {
            expect(dfs(singleNodeTree, 42)).toEqual(true);
        });

        it("should return false when searching non-existing value in single node tree", () => {
            expect(dfs(singleNodeTree, 99)).toEqual(false);
        });
    });

    describe("Tree structure variations", () => {
        it("should find values in left-skewed tree", () => {
            expect(dfs(leftSkewedTree, 0)).toEqual(true);
            expect(dfs(leftSkewedTree, 5)).toEqual(true);
            expect(dfs(leftSkewedTree, 10)).toEqual(true);
        });

        it("should return false for non-existing value in left-skewed tree", () => {
            expect(dfs(leftSkewedTree, 15)).toEqual(false);
        });

        it("should find values in right-skewed tree", () => {
            expect(dfs(rightSkewedTree, 10)).toEqual(true);
            expect(dfs(rightSkewedTree, 20)).toEqual(true);
            expect(dfs(rightSkewedTree, 25)).toEqual(true);
        });

        it("should return false for non-existing value in right-skewed tree", () => {
            expect(dfs(rightSkewedTree, 5)).toEqual(false);
        });

        it("should find values in perfectly balanced tree", () => {
            expect(dfs(perfectBalancedTree, 1)).toEqual(true);
            expect(dfs(perfectBalancedTree, 8)).toEqual(true);
            expect(dfs(perfectBalancedTree, 15)).toEqual(true);
        });

        it("should find values in complex unbalanced tree", () => {
            expect(dfs(complexUnbalancedTree, 12)).toEqual(true);
            expect(dfs(complexUnbalancedTree, 50)).toEqual(true);
            expect(dfs(complexUnbalancedTree, 100)).toEqual(true);
        });
    });

    describe("Boundary value testing", () => {
        it("should find minimum value in tree", () => {
            expect(dfs(tree, 5)).toEqual(true);
        });

        it("should find maximum value in tree", () => {
            expect(dfs(tree, 100)).toEqual(true);
        });

        it("should return false for value smaller than minimum", () => {
            expect(dfs(tree, 1)).toEqual(false);
        });

        it("should return false for value larger than maximum", () => {
            expect(dfs(tree, 200)).toEqual(false);
        });
    });

    describe("Different tree topologies", () => {
        it("should find values in tree with only left subtree", () => {
            expect(dfs(rootOnlyLeftTree, 5)).toEqual(true);
            expect(dfs(rootOnlyLeftTree, 10)).toEqual(true);
        });

        it("should return false for non-existing value in left-only tree", () => {
            expect(dfs(rootOnlyLeftTree, 15)).toEqual(false);
        });

        it("should find values in tree with only right subtree", () => {
            expect(dfs(rootOnlyRightTree, 12)).toEqual(true);
            expect(dfs(rootOnlyRightTree, 20)).toEqual(true);
        });

        it("should return false for non-existing value in right-only tree", () => {
            expect(dfs(rootOnlyRightTree, 5)).toEqual(false);
        });
    });

    describe("Trees with duplicate values", () => {
        it("should find duplicate values in tree", () => {
            expect(dfs(duplicateValueTree, 5)).toEqual(true);
            expect(dfs(duplicateValueTree, 7)).toEqual(true);
        });

        it("should return false for non-existing value in duplicate tree", () => {
            expect(dfs(duplicateValueTree, 10)).toEqual(false);
        });
    });

    describe("Alternative tree structure", () => {
        it("should find values in tree2", () => {
            expect(dfs(tree2, 21)).toEqual(true);
            expect(dfs(tree2, 49)).toEqual(true);
        });

        it("should return false for non-existing values in tree2", () => {
            expect(dfs(tree2, 100)).toEqual(false);
            expect(dfs(tree2, 1)).toEqual(false);
        });
    });
});
