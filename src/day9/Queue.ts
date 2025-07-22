/**
 * Implement a queue data structure.
 *
 * A First-In-First-Out (FIFO) data structure that supports enqueue, dequeue, and peek operations.
 */

interface Node<T> {
    next?: Node<T>;
    value: T;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = {
            next: undefined,
            value: item,
        };
        if (!this.length) {
            this.head = newNode;
        } else if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;
        const head = this.head;
        this.head = this.head?.next;
        head.next = undefined;
        this.length--;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
