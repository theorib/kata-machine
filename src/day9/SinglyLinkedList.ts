/**
 * Implement a singly linked list data structure.
 *
 * A linear data structure where each node contains data and a reference to the next node.
 */
interface Node<T> {
    next?: Node<T>;
    item: T;
}

export default class SinglyLinkedList<T> {
    public length: number;
    private tail?: Node<T>;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        const newItem: Node<T> = {
            next: undefined,
            item,
        };
        if (!this.tail || !this.head) {
            this.tail = newItem;
            this.head = newItem;
        } else if (this.head) {
            newItem.next = this.head;
            this.head = newItem;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) return;
        let currentNode = this._getNodeByIndex(idx);
        const newItem: Node<T> = {
            next: currentNode?.next,
            item,
        };
        currentNode = newItem;
        this.length++;
    }

    append(item: T): void {
        const newItem: Node<T> = {
            next: undefined,
            item,
        };
        if (!this.tail || !this.head) {
            this.tail = newItem;
            this.head = newItem;
        } else {
            this.tail.next = newItem;
            this.tail = newItem;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        if (!this.tail || !this.head || !item) return undefined;
        let prev: Node<T> | undefined = this.head;
        let current: Node<T> | undefined = this.head;

        if (this.head.item === item) {
            if (this.head === this.tail) {
                this.head.next = undefined;
                this.tail = undefined;
                this.head = undefined;
            } else {
                const temp = this.head;
                this.head = this.head.next;
                temp.next = undefined;
            }
            this.length--;
            return item;
        }

        while (current && current.item !== item) {
            prev = current;
            current = current.next;
        }

        if (current && current.item === item) {
            if (prev) {
                prev.next = current.next;
                if (current === this.tail) {
                    this.tail = prev;
                }
            }
            this.length--;
            current.next = undefined;
            return current.item;
        }

        return undefined;
    }
    _getNodeByIndex(idx: number): Node<T> | undefined {
        if (
            !this.length ||
            idx > this.length - 1 ||
            idx < 0 ||
            !this.head ||
            !this.tail
        )
            return undefined;
        if (idx === this.length - 1) return this.tail;
        if (idx === 0) return this.head;

        let currentNode: Node<T> | undefined = this.head;
        for (let i = 1; i < this.length && i <= idx; i++) {
            currentNode = currentNode?.next;
        }
        return currentNode;
    }
    get(idx: number): T | undefined {
        const node = this._getNodeByIndex(idx);
        return node?.item;
    }
    removeAt(idx: number): T | undefined {
        let node: Node<T> | undefined;

        if (!this.length) {
            return undefined;
        } else if (this.head && this.head === this.tail) {
            node = this.head;

            this.head = undefined;
            this.tail = undefined;
        } else if (idx === 0 && this.head) {
            node = this.head;

            this.head = this.head.next;
        } else {
            const prev = this._getNodeByIndex(idx - 1);
            if (!prev || !prev.next) return undefined;
            node = prev?.next;

            if (idx === this.length - 1) {
                this.tail = prev;
            }
            prev.next = undefined;
        }
        this.length--;
        node.next = undefined;
        return node.item;
    }
}
