/**
 * Implement binary search on a sorted array.
 *
 * Search for a target value in a sorted array using the binary search algorithm with O(log n) time complexity.
 * @param haystack - The array to search in
 * @param needle - The value to search for
 * @returns The index of the needle if found in the haystack, -1 otherwise
 */
export default function binarySearchList(
    haystack: number[],
    needle: number,
): number {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        const m = Math.floor((high + low) / 2);
        if (haystack[m] === needle) return m;
        if (haystack[m] < needle) low = m + 1;
        else high = m;
    }
    return -1;
}
