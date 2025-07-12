export default function bubble_sort(arr: number[]): void {
    if (arr.length < 2) return;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            const current = arr[j];
            if (current < arr[j - 1]) {
                arr[j] = arr[j - 1];
                arr[j - 1] = current;
            }
        }
    }
}
