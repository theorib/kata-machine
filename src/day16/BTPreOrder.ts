/**
 * Implement pre-order traversal of a binary tree.
 *
 * Visit nodes in the order: root, left subtree, right subtree.
 * @param head - Parameter of type BinaryNode<number>
 * @returns Returns number[]
 */
export default function preOrderSearch(head: BinaryNode<number>): number[] {
    const result: number[] = [];
    if (!head) return result;
    result.push(head.value);
    if (head.left) result.push(...preOrderSearch(head.left));
    if (head.right) result.push(...preOrderSearch(head.right));

    return result;
}
