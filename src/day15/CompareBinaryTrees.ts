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
    // structural checks
    if (a === null && b === null) return true;
    // the following test is redundant as the value test with optional chaining covers the same base case
    if (a === null || b === null) return false;

    // value checks
    if (a?.value !== b?.value) return false;

    // recurse
    // so long as we keep reaching only the first base case, it will bubble up and we don't have to create specific base cases for truthyness all over the place
    return compare(a.left, b.left) && compare(a.right, b.right);
}
