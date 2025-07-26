const merge = (left: number[], right: number[]): number[] => {
    let i = 0;
    let j = 0;
    const result: number[] = [];

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

/**
 * Implement the merge sort algorithm.
 *
 * A divide-and-conquer sorting algorithm that divides the array into halves, recursively sorts them, and then merges them back together in sorted order.
 * @param arr - The array to sort
 * @returns A new array containing the sorted elements
 */
export default function mergeSort(arr: number[]): number[] {
    // this is the base case that breaks the recursive step
    if (arr.length < 2) return [...arr];

    // this is the pre-step
    const median = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, median));
    const right = mergeSort(arr.slice(median));

    // this is the post step
    return merge(left, right);
}
