import { it, expect } from "vitest";
import bfs from "@code/BTBFS";
import { tree } from "./tree";

it("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});

it("bt bfs-2", function () {
    expect(bfs(null, 20)).toEqual(false);
});

it("bt bfs-3", function () {
    const singleNode: BinaryNode<number> = {
        value: 42,
        left: null,
        right: null,
    };
    expect(bfs(singleNode, 42)).toEqual(true);
    expect(bfs(singleNode, 43)).toEqual(false);
});

it("bt bfs-4", function () {
    expect(bfs(tree, 20)).toEqual(true);
    expect(bfs(tree, 5)).toEqual(true);
    expect(bfs(tree, 100)).toEqual(true);
    expect(bfs(tree, 1)).toEqual(false);
    expect(bfs(tree, 101)).toEqual(false);
});

it("bt bfs-5", function () {
    const leftOnlyTree: BinaryNode<number> = {
        value: 10,
        left: {
            value: 5,
            left: { value: 1, left: null, right: null },
            right: null,
        },
        right: null,
    };
    expect(bfs(leftOnlyTree, 1)).toEqual(true);
    expect(bfs(leftOnlyTree, 5)).toEqual(true);
    expect(bfs(leftOnlyTree, 10)).toEqual(true);
    expect(bfs(leftOnlyTree, 3)).toEqual(false);
});
