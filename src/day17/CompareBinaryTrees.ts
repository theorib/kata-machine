/**
 * Compare two binary trees for structural and value equality.
 *
 * Determine if two binary trees are identical in both structure and node values.
 * @param a - Parameter of type BinaryNode<number> | null
 * @param b - Parameter of type BinaryNode<number> | null
 * @returns Returns boolean
 */
export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.value !== b.value) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}
