const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];
    let i = low - 1; // i only rests on numbers smaller or equal to pivot, it only moves to a number that is higher to swap
    // between i and j there are only numbers bigger than pivot, that's why j keeps moving if the numbers are bigger than pivot
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    // at the very end we have to increase i to a number bigger than pivot and swap it with pivot then return the position of the final sorted index of the next pivot i
    i++;
    arr[high] = arr[i];
    arr[i] = pivot;
    return i;
};

const qs = (arr: number[], low: number, high: number) => {
    if (low < high) {
        const p = partition(arr, low, high);
        qs(arr, low, p - 1);
        qs(arr, p + 1, high);
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
