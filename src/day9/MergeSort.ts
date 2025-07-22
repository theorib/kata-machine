/**
 * Implement the merge sort algorithm.
 *
 * A divide-and-conquer sorting algorithm that divides the array into halves, recursively sorts them, and then merges them back together in sorted order.
 * @param arr - The array to sort
 * @returns No return value - modifies the input array in place
 */
export default function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) return [...arr];

    const median = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, median));
    const right = mergeSort(arr.slice(median));

    const merge = (left: number[], right: number[]): number[] => {
        const result: number[] = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }

        return result;
    };

    return merge(left, right);
}
