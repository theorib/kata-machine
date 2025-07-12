import { it, expect } from "vitest";
import Trie from "@code/Trie";

it("Trie", function () {
    const trie = new Trie();
    trie.insert("foo");
    trie.insert("fool");
    trie.insert("foolish");
    trie.insert("bar");

    expect(trie.find("fo").sort()).toEqual(["foo", "fool", "foolish"]);

    trie.delete("fool");

    expect(trie.find("fo").sort()).toEqual(["foo", "foolish"]);
});

it("Trie-2", function () {
    const trie = new Trie();
    
    expect(trie.find("")).toEqual([]);
    expect(trie.find("missing")).toEqual([]);
});

it("Trie-3", function () {
    const trie = new Trie();
    
    trie.insert("a");
    expect(trie.find("a")).toEqual(["a"]);
    
    trie.delete("a");
    expect(trie.find("a")).toEqual([]);
});

it("Trie-4", function () {
    const trie = new Trie();
    
    trie.insert("cat");
    trie.insert("cats");
    trie.insert("car");
    trie.insert("card");
    trie.insert("care");
    trie.insert("careful");
    trie.insert("dog");
    
    expect(trie.find("ca").sort()).toEqual(["car", "card", "care", "careful", "cat", "cats"]);
    expect(trie.find("car").sort()).toEqual(["car", "card", "care", "careful"]);
    expect(trie.find("care").sort()).toEqual(["care", "careful"]);
    expect(trie.find("cat").sort()).toEqual(["cat", "cats"]);
    expect(trie.find("d")).toEqual(["dog"]);
});

it("Trie-5", function () {
    const trie = new Trie();
    
    trie.insert("test");
    trie.insert("testing");
    trie.insert("tester");
    
    expect(trie.find("test").sort()).toEqual(["test", "tester", "testing"]);
    
    trie.delete("test");
    expect(trie.find("test").sort()).toEqual(["tester", "testing"]);
    
    trie.delete("testing");
    expect(trie.find("test")).toEqual(["tester"]);
    
    trie.delete("tester");
    expect(trie.find("test")).toEqual([]);
});

it("Trie-6", function () {
    const trie = new Trie();
    
    const words = ["apple", "app", "application", "apply", "approach", "appropriate"];
    words.forEach(word => trie.insert(word));
    
    expect(trie.find("app").sort()).toEqual(["app", "apple", "application", "apply", "approach", "appropriate"]);
    
    trie.delete("app");
    expect(trie.find("app").sort()).toEqual(["apple", "application", "apply", "approach", "appropriate"]);
});
