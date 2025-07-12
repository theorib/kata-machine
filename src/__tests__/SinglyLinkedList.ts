import { it, expect } from "vitest";
import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list, test_list_edge_cases } from "./ListTest";

it("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});

it("linked-list-2", function () {
    const list = new SinglyLinkedList<number>();
    test_list_edge_cases(list);
});

it("linked-list-3", function () {
    const list = new SinglyLinkedList<number>();
    
    for (let i = 0; i < 100; i++) {
        list.append(i);
    }
    
    expect(list.length).toEqual(100);
    
    for (let i = 0; i < 100; i++) {
        expect(list.get(i)).toEqual(i);
    }
    
    for (let i = 99; i >= 0; i--) {
        expect(list.removeAt(i)).toEqual(i);
    }
    
    expect(list.length).toEqual(0);
});

it("linked-list-4", function () {
    const list = new SinglyLinkedList<string>();
    
    list.append("hello");
    list.prepend("world");
    
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual("world");
    expect(list.get(1)).toEqual("hello");
    
    expect(list.remove("hello")).toEqual("hello");
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual("world");
});
