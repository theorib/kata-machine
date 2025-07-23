interface Node<T> {
    value: T;
    next?: Node<T>;
}
/**
 * Implement a queue data structure.
 *
 * A First-In-First-Out (FIFO) data structure that supports enqueue, dequeue, and peek operations.
 */
export default class Queue<T> {
    public length: number;
    #head?: Node<T>;
    #tail?: Node<T>;
    constructor() {
        this.length = 0;
        this.#head = this.#tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node: Node<T> = {
            value: item,
        };
        if (!this.#head) {
            this.#head = node;
        }
        if (this.#tail) {
            this.#tail.next = node;
        }
        this.#tail = node;
    }
    deque(): T | undefined {
        if (!this.#head) return undefined;
        this.length--;
        const node = this.#head;
        if (this.#head === this.#tail) this.#tail = undefined;
        this.#head = this.#head.next;
        node.next = undefined;
        return node.value;
    }
    peek(): T | undefined {
        return this.#head?.value;
    }
}
