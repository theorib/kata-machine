type Node<T> = {
    value: T;
    next?: Node<T>;
};

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
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node: Node<T> = {
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
        if (!this.tail || !this.head) return;
        this.length--;
        const current = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = current.next = undefined;
        }
        this.head = this.head?.next;
        return current.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
