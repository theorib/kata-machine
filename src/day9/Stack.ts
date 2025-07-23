interface Node<T> {
    prev?: Node<T>;
    value: T;
}

/**
 * Implement a stack data structure.
 *
 * A Last-In-First-Out (LIFO) data structure that supports push, pop, and peek operations.
 */
export default class Stack<T> {
    public length: number;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        this.tail = { value: item, prev: this.tail };
    }
    pop(): T | undefined {
        if (!this.tail) return;
        this.length--;
        const node = this.tail;
        this.tail = this.tail.prev;
        node.prev = undefined;
        return node.value;
    }
    peek(): T | undefined {
        return this?.tail?.value;
    }
}
