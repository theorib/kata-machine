import { it, expect } from "vitest";
import MyMap from "@code/Map";

it("Map", function () {
    const map = new MyMap<string, number>();
    map.set("foo", 55);
    expect(map.size()).toEqual(1);
    map.set("fool", 75);
    expect(map.size()).toEqual(2);
    map.set("foolish", 105);
    expect(map.size()).toEqual(3);
    map.set("bar", 69);
    expect(map.size()).toEqual(4);

    expect(map.get("bar")).toEqual(69);
    expect(map.get("blaz")).toEqual(undefined);

    map.delete("barblabr");
    expect(map.size()).toEqual(4);

    map.delete("bar");
    expect(map.size()).toEqual(3);
    expect(map.get("bar")).toEqual(undefined);
});

it("Map-2", function () {
    const map = new MyMap<string, number>();

    expect(map.size()).toEqual(0);
    expect(map.get("missing")).toEqual(undefined);
    map.delete("missing");
    expect(map.size()).toEqual(0);
});

it("Map-3", function () {
    const map = new MyMap<number, string>();

    map.set(1, "one");
    map.set(2, "two");

    expect(map.get(1)).toEqual("one");
    expect(map.get(2)).toEqual("two");
    expect(map.size()).toEqual(2);

    map.set(1, "ONE");
    expect(map.get(1)).toEqual("ONE");
    expect(map.size()).toEqual(2);
});

it("Map-4", function () {
    const map = new MyMap<string, boolean>();

    map.set("true", true);
    map.set("false", false);

    expect(map.get("true")).toEqual(true);
    expect(map.get("false")).toEqual(false);

    map.delete("true");
    expect(map.get("true")).toEqual(undefined);
    expect(map.get("false")).toEqual(false);
    expect(map.size()).toEqual(1);
});

it("Map-5", function () {
    const map = new MyMap<string, number>();

    for (let i = 0; i < 100; i++) {
        map.set(`key${i}`, i);
    }

    expect(map.size()).toEqual(100);

    for (let i = 0; i < 100; i++) {
        expect(map.get(`key${i}`)).toEqual(i);
    }

    for (let i = 0; i < 50; i++) {
        map.delete(`key${i}`);
    }

    expect(map.size()).toEqual(50);

    for (let i = 0; i < 50; i++) {
        expect(map.get(`key${i}`)).toEqual(undefined);
    }

    for (let i = 50; i < 100; i++) {
        expect(map.get(`key${i}`)).toEqual(i);
    }
});
