/**
 * Implement linear search on an array.
 *
 * Search for a target value in an array by checking each element sequentially until found or end of array is reached.
 * @param haystack - The array to search in
 * @param needle - The value to search for
 * @returns True if the needle is found in the haystack, false otherwise
 */
export default function linearSearch(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }
    return false;
}
