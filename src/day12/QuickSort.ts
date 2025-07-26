// [3, 1, 4, 2, 0, 5, 7, 6, 8, 9, 6]
//                             j
//                 i
const qs = (arr: number[], low: number, high: number) => {
    if (low < high) {
        const p = partition(arr, low, high);
        qs(arr, low, p - 1);
        qs(arr, p + 1, high);
    }
};
const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];
    let i = low - 1;
    let j = low;
    while (j < high) {
        if (arr[j] < pivot) {
            i++;
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        j++;
    }
    i++;
    arr[high] = arr[i];
    arr[i] = pivot;
    return i;
};

/**
 * Implement the quick sort algorithm.
 *
 * A divide-and-conquer sorting algorithm that selects a pivot element and partitions the array around it.
 * @param arr - The array to sort
 * @returns No return value - modifies the input array in place
 */
export default function quickSort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
