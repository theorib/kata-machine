import { it, expect } from "vitest"
import bfs from "@code/BFSGraphList";
import { list2 } from "./graph";

it("bfs - graph", function () {
    expect(bfs(list2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(bfs(list2, 6, 0)).toEqual(null);
});


