const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
    }

    arr[high] = arr[i];
    arr[i] = pivot;
    return i;
};

const qs = (arr: number[], low: number, high: number): void => {
    if (low < high) {
        const pivotIdx = partition(arr, low, high);

        qs(arr, low, pivotIdx - 1);
        qs(arr, pivotIdx + 1, high);
    }
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
