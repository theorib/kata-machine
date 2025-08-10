import Queue from "./Queue";

/**
 * Implement breadth-first search on a binary tree.
 *
 * Search for a target value in a binary tree using breadth-first search (level-order traversal).
 * @param head - Parameter of type BinaryNode<number>
 * @param needle - Parameter of type number
 * @returns Returns boolean
 */
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    if (!head) return false;
    const queue = new Queue<BinaryNode<number>>();
    queue.enqueue(head);
    let current: BinaryNode<number> | undefined;

    while (queue.length) {
        current = queue.deque();
        if (current?.value === needle) return true;
        if (current?.left) queue.enqueue(current.left);
        if (current?.right) queue.enqueue(current.right);
    }
    return false;
}
