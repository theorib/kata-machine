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
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {
            value: item,
        };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    deque(): T | undefined {
        let node: Node<T> | undefined;
        if (!this.tail) return;
        this.length--;
        if (this.head && this.head === this.tail) {
            node = this.head;
            this.head = this.tail = undefined;
            return node.value;
        } else if (this.head) {
            node = this.head;
            this.head = this.head.next;
            return node.value;
        }
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
