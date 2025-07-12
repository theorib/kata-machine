import { it, expect } from "vitest";
import LinkedList from "@code/DoublyLinkedList";
import { test_list, test_list_edge_cases } from "./ListTest";

it("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});

it("DoublyLinkedList-2", function () {
    const list = new LinkedList<number>();
    test_list_edge_cases(list);
});

it("DoublyLinkedList-3", function () {
    const list = new LinkedList<string>();
    
    list.append("a");
    list.append("b");
    list.prepend("c");
    
    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual("c");
    expect(list.get(1)).toEqual("a");
    expect(list.get(2)).toEqual("b");
    
    expect(list.remove("a")).toEqual("a");
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual("c");
    expect(list.get(1)).toEqual("b");
});

it("DoublyLinkedList-4", function () {
    const list = new LinkedList<number>();
    
    for (let i = 0; i < 50; i++) {
        if (i % 2 === 0) {
            list.append(i);
        } else {
            list.prepend(i);
        }
    }
    
    expect(list.length).toEqual(50);
    
    while (list.length > 0) {
        list.removeAt(0);
    }
    
    expect(list.length).toEqual(0);
});
