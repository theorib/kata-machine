const lengthProperty = {
    properties: [
        {
            name: "length",
            type: "number",
            scope: "public",
        },
    ],
};

const listInterface = {
    methods: [
        {
            name: "prepend",
            args: "item: T",
            return: "void",
        },
        {
            name: "insertAt",
            args: "item: T, idx: number",
            return: "void",
        },
        {
            name: "append",
            args: "item: T",
            return: "void",
        },
        {
            name: "remove",
            args: "item: T",
            return: "T | undefined",
        },
        {
            name: "get",
            args: "idx: number",
            return: "T | undefined",
        },
        {
            name: "removeAt",
            args: "idx: number",
            return: "T | undefined",
        },
    ],
    ...lengthProperty,
};

export default {
    LeastRecentlyUsedCacheDS: {
        generic: "<K, V>",
        type: "class",
        description:
            "Implement a Least Recently Used (LRU) cache data structure.",
        details:
            "The cache should support get and update operations with O(1) time complexity. When the cache reaches capacity, the least recently used item should be evicted.",
        methods: [
            {
                name: "update",
                args: "key: K, value: V",
                return: "void",
            },
            {
                name: "get",
                args: "key: K",
                return: "V | undefined",
            },
        ],
        properties: [
            {
                name: "length",
                type: "number",
                scope: "private",
            },
        ],
    },
    MinHeap: {
        type: "class",
        description: "Implement a Min Heap data structure.",
        details:
            "A binary tree where each parent node is smaller than its children. Should support insert and delete (extract minimum) operations.",
        methods: [
            {
                name: "insert",
                args: "value: number",
                return: "void",
            },
            {
                name: "delete",
                args: "",
                return: "number",
            },
        ],
        properties: [
            {
                name: "length",
                type: "number",
                scope: "public",
            },
        ],
    },

    Map: {
        generic: "<T extends (string | number), V>",
        type: "class",
        description: "Implement a hash map data structure.",
        details:
            "A key-value store that supports get, set, delete, and size operations with average O(1) time complexity.",
        methods: [
            {
                name: "get",
                args: "key: T",
                return: "V | undefined",
            },
            {
                name: "set",
                args: "key: T, value: V",
                return: "void",
            },
            {
                name: "delete",
                args: "key: T",
                return: "V | undefined",
            },
            {
                name: "size",
                return: "number",
            },
        ],
    },

    RingBuffer: {
        generic: "<T>",
        type: "class",
        description:
            "Implement a ring buffer (circular buffer) data structure.",
        details:
            "A fixed-size buffer that wraps around when full. Should support push, pop, and get operations.",
        methods: [
            {
                name: "push",
                args: "item: T",
                return: "void",
            },
            {
                name: "get",
                args: "idx: number",
                return: "T | undefined",
            },
            {
                name: "pop",
                return: "T | undefined",
            },
        ],
        properties: [
            {
                name: "length",
                type: "number",
                scope: "public",
            },
        ],
    },

    ArrayList: {
        type: "class",
        generic: "<T>",
        description: "Implement a dynamic array (ArrayList) data structure.",
        details:
            "A resizable array that supports prepend, append, insert, remove, and get operations with automatic resizing.",
        ...listInterface,
    },
    SinglyLinkedList: {
        generic: "<T>",
        type: "class",
        description: "Implement a singly linked list data structure.",
        details:
            "A linear data structure where each node contains data and a reference to the next node.",
        ...listInterface,
    },
    DoublyLinkedList: {
        generic: "<T>",
        type: "class",
        description: "Implement a doubly linked list data structure.",
        details:
            "A linear data structure where each node contains data and references to both the next and previous nodes.",
        ...listInterface,
    },
    Queue: {
        generic: "<T>",
        type: "class",
        description: "Implement a queue data structure.",
        details:
            "A First-In-First-Out (FIFO) data structure that supports enqueue, dequeue, and peek operations.",
        ...lengthProperty,
        methods: [
            {
                name: "enqueue",
                args: "item: T",
                return: "void",
            },
            {
                name: "deque",
                args: "",
                return: "T | undefined",
            },
            {
                name: "peek",
                args: "",
                return: "T | undefined",
            },
        ],
    },
    Stack: {
        generic: "<T>",
        type: "class",
        description: "Implement a stack data structure.",
        details:
            "A Last-In-First-Out (LIFO) data structure that supports push, pop, and peek operations.",
        ...lengthProperty,
        methods: [
            {
                name: "push",
                args: "item: T",
                return: "void",
            },
            {
                name: "pop",
                args: "",
                return: "T | undefined",
            },
            {
                name: "peek",
                args: "",
                return: "T | undefined",
            },
        ],
    },

    Trie: {
        type: "class",
        description: "Implement a trie (prefix tree) data structure.",
        details:
            "A tree structure for storing strings that allows efficient prefix-based operations like autocomplete.",
        methods: [
            {
                name: "insert",
                args: "item: string",
                return: "void",
            },
            {
                name: "delete",
                args: "item: string",
                return: "void",
            },
            {
                name: "find",
                args: "partial: string",
                return: "string[]",
            },
        ],
    },

    BubbleSort: {
        type: "fn",
        fn: "bubbleSort",
        args: "arr: number[]",
        return: "void",
        description: "Implement the bubble sort algorithm.",
        details:
            "Sort an array by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order.",
        paramDescriptions: {
            arr: "The array to sort",
        },
        returnDescription:
            "No return value - modifies the input array in place",
    },

    InsertionSort: {
        type: "fn",
        fn: "insertionSort",
        args: "arr: number[]",
        return: "void",
        description: "Implement the insertion sort algorithm.",
        details:
            "Sort an array by building the final sorted array one element at a time, inserting each element into its correct position among the previously sorted elements.",
        paramDescriptions: {
            arr: "The array to sort",
        },
        returnDescription:
            "No return value - modifies the input array in place",
    },

    MergeSort: {
        type: "fn",
        fn: "mergeSort",
        args: "arr: number[]",
        return: "void",
        description: "Implement the merge sort algorithm.",
        details:
            "A divide-and-conquer sorting algorithm that divides the array into halves, recursively sorts them, and then merges them back together in sorted order.",
        paramDescriptions: {
            arr: "The array to sort",
        },
        returnDescription:
            "No return value - modifies the input array in place",
    },

    QuickSort: {
        type: "fn",
        fn: "quickSort",
        args: "arr: number[]",
        return: "void",
        description: "Implement the quick sort algorithm.",
        details:
            "A divide-and-conquer sorting algorithm that selects a pivot element and partitions the array around it.",
    },

    DijkstraList: {
        type: "fn",
        fn: "dijkstraList",
        args: "source: number, sink: number, arr: WeightedAdjacencyList",
        return: "number[]",
        description:
            "Implement Dijkstra's shortest path algorithm for adjacency lists.",
        details:
            "Find the shortest path between two nodes in a weighted graph represented as an adjacency list.",
    },

    PrimsList: {
        type: "fn",
        fn: "prims",
        args: "list: WeightedAdjacencyList",
        return: "WeightedAdjacencyList | null",
        description: "Implement Prim's algorithm for minimum spanning tree.",
        details:
            "Find the minimum spanning tree of a weighted undirected graph using Prim's algorithm.",
    },

    BinarySearchList: {
        type: "fn",
        fn: "binarySearchList",
        args: "haystack: number[], needle: number",
        return: "boolean",
        description: "Implement binary search on a sorted array.",
        details:
            "Search for a target value in a sorted array using the binary search algorithm with O(log n) time complexity.",
        paramDescriptions: {
            haystack: "The array to search in",
            needle: "The value to search for",
        },
        returnDescription:
            "True if the needle is found in the haystack, false otherwise",
    },

    LinearSearchList: {
        type: "fn",
        fn: "linearSearch",
        args: "haystack: number[], needle: number",
        return: "boolean",
        description: "Implement linear search on an array.",
        details:
            "Search for a target value in an array by checking each element sequentially until found or end of array is reached.",
        paramDescriptions: {
            haystack: "The array to search in",
            needle: "The value to search for",
        },
        returnDescription:
            "True if the needle is found in the haystack, false otherwise",
    },

    TwoCrystalBalls: {
        type: "fn",
        fn: "twoCrystalBalls",
        args: "breaks: boolean[]",
        return: "number",
        description: "Solve the two crystal balls problem.",
        details:
            "Given an array of booleans representing floors where balls break, find the exact floor where balls start breaking using only 2 crystal balls.",
        paramDescriptions: {
            breaks: "Array of booleans representing floors where balls break",
        },
        returnDescription:
            "The exact floor where balls start breaking, or -1 if no floor breaks the balls",
    },

    MazeSolver: {
        type: "fn",
        fn: "solve",
        args: "maze: string[], wall: string, start: Point, end: Point",
        return: "Point[]",
        description: "Implement a maze solver algorithm.",
        details:
            "Find a path from start to end in a maze using backtracking or similar pathfinding algorithm.",
    },

    BTPreOrder: {
        type: "fn",
        fn: "preOrderSearch",
        args: "head: BinaryNode<number>",
        return: "number[]",
        description: "Implement pre-order traversal of a binary tree.",
        details: "Visit nodes in the order: root, left subtree, right subtree.",
    },

    BTInOrder: {
        type: "fn",
        fn: "inOrderSearch",
        args: "head: BinaryNode<number>",
        return: "number[]",
        description: "Implement in-order traversal of a binary tree.",
        details: "Visit nodes in the order: left subtree, root, right subtree.",
    },

    BTPostOrder: {
        type: "fn",
        fn: "postOrderSearch",
        args: "head: BinaryNode<number>",
        return: "number[]",
        description: "Implement post-order traversal of a binary tree.",
        details: "Visit nodes in the order: left subtree, right subtree, root.",
    },

    BTBFS: {
        type: "fn",
        fn: "bfs",
        args: "head: BinaryNode<number>, needle: number",
        return: "boolean",
        description: "Implement breadth-first search on a binary tree.",
        details:
            "Search for a target value in a binary tree using breadth-first search (level-order traversal).",
    },

    CompareBinaryTrees: {
        type: "fn",
        fn: "compare",
        args: "a: BinaryNode<number> | null, b: BinaryNode<number> | null",
        return: "boolean",
        description:
            "Compare two binary trees for structural and value equality.",
        details:
            "Determine if two binary trees are identical in both structure and node values.",
    },

    depthFirstSearchOnBinarySearchTree: {
        type: "fn",
        fn: "dfs",
        args: "head: BinaryNode<number>, needle: number",
        return: "boolean",
        description: "Implement depth-first search on a binary search tree.",
        details:
            "Search for a target value in a binary search tree using depth-first search.",
    },

    DFSGraphList: {
        type: "fn",
        fn: "dfs",
        args: "graph: WeightedAdjacencyList, source: number, needle: number",
        return: "number[] | null",
        description:
            "Implement depth-first search on a graph represented as adjacency list.",
        details:
            "Search for a target node in a graph using depth-first search and return the path if found.",
    },

    BFSGraphList: {
        type: "fn",
        fn: "bfs",
        args: "graph: WeightedAdjacencyList, source: number, needle: number",
        return: "number[] | null",
        description:
            "Implement breadth-first search on a graph represented as adjacency list.",
        details:
            "Search for a target node in a graph using breadth-first search and return the path if found.",
    },

    BFSGraphMatrix: {
        type: "fn",
        fn: "bfs",
        args: "graph: WeightedAdjacencyMatrix, source: number, needle: number",
        return: "number[] | null",
        description:
            "Implement breadth-first search on a graph represented as adjacency matrix.",
        details:
            "Search for a target node in a graph using breadth-first search and return the path if found.",
    },
};
