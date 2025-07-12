import { it, expect } from "vitest";
import bt_pre_order from "@code/BTPreOrder";
import { tree } from "./tree";

it("Pre order", function () {
    expect(bt_pre_order(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});
