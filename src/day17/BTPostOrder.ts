/**
 * Implement post-order traversal of a binary tree.
 *
 * Visit nodes in the order: left subtree, right subtree, root.
 * @param head - Parameter of type BinaryNode<number>
 * @returns Returns number[]
 */
export default function postOrderSearch(head: BinaryNode<number>): number[] {
    const result: number[] = [];

    if (head && head.left) result.push(...postOrderSearch(head.left));
    if (head && head.right) result.push(...postOrderSearch(head.right));
    if (head) result.push(head.value);

    return result;
}
