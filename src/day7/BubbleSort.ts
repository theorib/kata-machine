/**
 * Implement the bubble sort algorithm.
 *
 * Sort an array by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order.
 * @param arr - The array to sort
 * @returns No return value - modifies the input array in place
 */
export default function bubbleSort(arr: number[]): void {
    for (let i of arr) {
        for (let j = 1; j < arr.length; j++) {
            const curr = arr[j];
            if (curr < arr[j - 1]) {
                arr[j] = arr[j - 1];
                arr[j - 1] = curr;
            }
        }
    }
}
