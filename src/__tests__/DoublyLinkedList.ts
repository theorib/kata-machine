import { it, expect } from "vitest";
import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "./ListTest";

it("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
