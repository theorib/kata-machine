/**
 * Implement breadth-first search on a binary tree.
 *
 * Search for a target value in a binary tree using breadth-first search (level-order traversal).
 * @param head - Parameter of type BinaryNode<number>
 * @param needle - Parameter of type number
 * @returns Returns boolean
 */
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: BinaryNode<number>[] = [head];

    while (queue.length) {
        const current = queue.shift();
        if (current?.value === needle) return true;
        if (current?.left) queue.push(current.left);
        if (current?.right) queue.push(current.right);
    }
    return false;
}
