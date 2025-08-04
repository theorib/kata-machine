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
    private tail?: Node<T>;

    constructor() {
        this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node: Node<T> = {
            value: item,
        };
        this.length++;
        node.prev = this.tail;
        this.tail = node;
    }
    pop(): T | undefined {
        const node = this.tail;
        if (node) {
            this.length--;
            this.tail = this.tail?.prev;
            node.prev = undefined;
        }
        return node?.value;
    }
    peek(): T | undefined {
        return this.tail?.value;
    }
}
