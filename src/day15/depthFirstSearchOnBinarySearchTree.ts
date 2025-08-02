/**
 * Implement depth-first search on a binary search tree.
 *
 * Search for a target value in a binary search tree using depth-first search.
 * @param head - Parameter of type BinaryNode<number>
 * @param needle - Parameter of type number
 * @returns Returns boolean
 */
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (!head) return false;
    if (head.value === needle) return true;
    if (head.value > needle && head?.left) return dfs(head.left, needle);
    if (head.value < needle && head?.right) return dfs(head.right, needle);
    return false;
}
