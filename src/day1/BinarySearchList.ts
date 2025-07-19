export default function binarySearchList(
    haystack: number[],
    needle: number,
): boolean {
    let l = 0;
    let h = haystack.length;

    while (l < h) {
        const m = Math.floor((h + l) / 2);
        if (haystack[m] === needle) return true;
        else if (haystack[m] > needle) {
            h = m;
        } else {
            l = m + 1;
        }
    }
    return false;
}
