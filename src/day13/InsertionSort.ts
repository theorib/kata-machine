/**
 * Implement the insertion sort algorithm.
 *
 * Sort an array by building the final sorted array one element at a time, inserting each element into its correct position among the previously sorted elements.
 * @param arr - The array to sort
 * @returns No return value - modifies the input array in place
 */
export default function insertionSort(arr: number[]): void {
    let i: number;
    for (let j = 1; j < arr.length; j++) {
        i = j;
        while (i > 0 && arr[i] < arr[i - 1]) {
            const temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            i--;
        }
    }
}
