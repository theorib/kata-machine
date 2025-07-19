import { it, expect } from "vitest";
import ArrayList from "@code/ArrayList";
import { test_list, test_list_edge_cases } from "./ListTest";

it("array-list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
});

it("array-list-2", function () {
    const list = new ArrayList<number>(1);
    test_list_edge_cases(list);
});

it("array-list-3", function () {
    const list = new ArrayList<number>(10);

    for (let i = 0; i < 15; i++) {
        list.append(i);
    }

    expect(list.length).toEqual(15);

    for (let i = 0; i < 15; i++) {
        expect(list.get(i)).toEqual(i);
    }
});

it("array-list-4", function () {
    const list = new ArrayList<number>(2);

    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(3);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(1);
});
