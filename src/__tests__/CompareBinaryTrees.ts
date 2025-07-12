import { it, expect } from "vitest";
import compare from "@code/CompareBinaryTrees";
import { tree, tree2 } from "./tree";

it("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});
