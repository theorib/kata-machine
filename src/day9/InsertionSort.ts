/**
 * Implement the insertion sort algorithm.
 *
 * Sort an array by building the final sorted array one element at a time, inserting each element into its correct position among the previously sorted elements.
 * @param arr - The array to sort
 * @returns No return value - modifies the input array in place
 */
export default function insertionSort(arr: number[]): void {
    let i = 1;
    let j = 1;

    for (let i = 0; i < arr.length; i++) {
        j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
}
