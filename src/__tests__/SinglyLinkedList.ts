import { it, expect } from "vitest";
import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list } from "./ListTest";

it("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});
