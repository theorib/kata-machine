import { it, expect } from "vitest"
import dfs from "@code/DFSOnBST";
import { tree } from "./tree";

it("DFS on BST", function () {
    expect(dfs(tree, 45)).toEqual(true);
    expect(dfs(tree, 7)).toEqual(true);
    expect(dfs(tree, 69)).toEqual(false);
});





