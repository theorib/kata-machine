interface Node<T> {
    value: T;
    prev?: Node<T>;
}

/**
 * Implement a stack data structure.
 *
 * A Last-In-First-Out (LIFO) data structure that supports push, pop, and peek operations.
 */
export default class Stack<T> {
    public length: number;
    #tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.#tail = undefined;
    }

    push(item: T): void {
        const node = {
            value: item,
            prev: this.#tail,
        };
        this.#tail = node;
        this.length++;
    }
    pop(): T | undefined {
        if (!this.#tail) return undefined;
        this.length--;
        const node = this.#tail;
        this.#tail = this.#tail.prev;
        node.prev = undefined;
        return node.value;
    }
    peek(): T | undefined {
        return this.#tail?.value;
    }
}
