/**
 * Implement in-order traversal of a binary tree.
 *
 * Visit nodes in the order: left subtree, root, right subtree.
 * @param head - Parameter of type BinaryNode<number>
 * @returns Returns number[]
 */
export default function inOrderSearch(head: BinaryNode<number>): number[] {
    const result: number[] = [];
    if (!head) return result;
    if (head.left) result.push(...inOrderSearch(head.left));
    result.push(head.value);
    if (head.right) result.push(...inOrderSearch(head.right));
    return result;
}
