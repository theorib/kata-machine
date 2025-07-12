import { it, expect } from "vitest";
import ArrayList from "@code/ArrayList";
import { test_list } from "./ListTest";

it("array-list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
});
