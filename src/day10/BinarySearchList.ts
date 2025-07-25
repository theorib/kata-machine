/**
 * Implement binary search on a sorted array.
 *
 * Search for a target value in a sorted array using the binary search algorithm with O(log n) time complexity.
 * @param haystack - The array to search in
 * @param needle - The value to search for
 * @returns True if the needle is found in the haystack, false otherwise
 */
export default function binarySearchList(
    haystack: number[],
    needle: number,
): boolean {
    let l = 0;
    let r = haystack.length;

    while (l < r) {
        const m = Math.floor((r + l) / 2);
        if (haystack[m] === needle) return true;
        if (haystack[m] < needle) {
            l = m + 1;
        } else r = m;
    }
    return false;
}
