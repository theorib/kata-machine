import { it, expect } from "vitest";
import LeastRecentlyUsedCacheDS from "@code/LeastRecentlyUsedCacheDS";

it("LRU", function () {
    const lru = new LeastRecentlyUsedCacheDS<string, number>(
        3,
    ) as ILeastRecentlyUsedCacheDS<string, number>;

    expect(lru.get("foo")).toEqual(undefined);
    lru.update("foo", 69);
    expect(lru.get("foo")).toEqual(69);

    lru.update("bar", 420);
    expect(lru.get("bar")).toEqual(420);

    lru.update("baz", 1337);
    expect(lru.get("baz")).toEqual(1337);

    lru.update("ball", 69420);
    expect(lru.get("ball")).toEqual(69420);
    expect(lru.get("foo")).toEqual(undefined);
    expect(lru.get("bar")).toEqual(420);
    lru.update("foo", 69);
    expect(lru.get("bar")).toEqual(420);
    expect(lru.get("foo")).toEqual(69);

    // shouldn't of been deleted, but since bar was get'd, bar was added to the
    // front of the list, so baz became the end
    expect(lru.get("baz")).toEqual(undefined);
});

it("LRU-2", function () {
    const lru = new LeastRecentlyUsedCacheDS<string, number>(
        1,
    ) as ILeastRecentlyUsedCacheDS<string, number>;

    lru.update("single", 42);
    expect(lru.get("single")).toEqual(42);

    lru.update("replace", 100);
    expect(lru.get("single")).toEqual(undefined);
    expect(lru.get("replace")).toEqual(100);
});

it("LRU-3", function () {
    const lru = new LeastRecentlyUsedCacheDS<number, string>(
        2,
    ) as ILeastRecentlyUsedCacheDS<number, string>;

    lru.update(1, "one");
    lru.update(2, "two");

    expect(lru.get(1)).toEqual("one");
    expect(lru.get(2)).toEqual("two");

    lru.update(3, "three");
    expect(lru.get(1)).toEqual(undefined);
    expect(lru.get(2)).toEqual("two");
    expect(lru.get(3)).toEqual("three");
});

it("LRU-4", function () {
    const lru = new LeastRecentlyUsedCacheDS<string, number>(
        2,
    ) as ILeastRecentlyUsedCacheDS<string, number>;

    lru.update("a", 1);
    lru.update("b", 2);

    lru.update("a", 10);
    expect(lru.get("a")).toEqual(10);
    expect(lru.get("b")).toEqual(2);

    lru.update("c", 3);
    expect(lru.get("a")).toEqual(10);
    expect(lru.get("b")).toEqual(undefined);
    expect(lru.get("c")).toEqual(3);
});

it("LRU-5", function () {
    const lru = new LeastRecentlyUsedCacheDS<string, number>(
        0,
    ) as ILeastRecentlyUsedCacheDS<string, number>;

    lru.update("test", 1);
    expect(lru.get("test")).toEqual(undefined);
});
