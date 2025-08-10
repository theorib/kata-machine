function partition(arr: number[], low: number, high: number): number {
    const p = arr[high];
    let i = low - 1;
    let j = low;

    while (j < high) {
        if (arr[j] < p) {
            i++;
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        j++;
    }

    i++;
    arr[high] = arr[i];
    arr[i] = p;

    return i;
}

function sort(arr: number[], low: number, high: number) {
    if (low < high) {
        const p = partition(arr, low, high);
        sort(arr, low, p - 1);
        sort(arr, p + 1, high);
    }
}

/**
 * Implement the quick sort algorithm.
 *
 * A divide-and-conquer sorting algorithm that selects a pivot element and partitions the array around it.
 * @param arr - The array to sort
 * @returns No return value - modifies the input array in place
 */
export default function quickSort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
}
