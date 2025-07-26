## Developed live on twitch

Originally forked from [ThePrimeagen's Kata Machine](https://github.com/ThePrimeagen/kata-machine) but then this repository went to have a bit of a life of it's own.

### How It Works

Make sure you have [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/installation) installed.

Clone the repo and install dependencies.

```bash
pnpm install
```

Edit the `ligma.config.js` file to include only the exercises you want to practice

```javascript
export default {
    dsa: [
        "depthFirstSearchOnBinarySearchTree",
        "LeastRecentlyUsedCacheDS",
        "LinearSearchList",
        "BinarySearchList",
        "TwoCrystalBalls",
        "BubbleSort",
        "InsertionSort",
        "MergeSort",
        "SinglyLinkedList",
        "DoublyLinkedList",
        "Queue",
        "Stack",
        "ArrayList",
        "MazeSolver",
        "QuickSort",
        "BTPreOrder",
        "BTInOrder",
        "BTPostOrder",
        "BTBFS",
        "CompareBinaryTrees",
        "depthFirstSearchOnBinarySearchTree",
        "DFSGraphList",
        "Trie",
        "BFSGraphMatrix",
        "Map",
        "MinHeap",
    ],
};
```

create a day of katas, this will use the list in the `ligma.config.js`.

```bash
pnpm generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

`pnpm generate` will also update the `tsconfig.json` and `vitest.config.ts` to point the latest `day` folder via tspaths. This allows us to avoid updating anything for testing each day.

#### Testing

```
pnpm test:all
```

I have yet to create a testing strategy for next sets of algorithms, but we will get there when i cross that bridge.
