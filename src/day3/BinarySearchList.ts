export default function binarySearchList(
    haystack: number[],
    needle: number,
): boolean {
    let l = 0;
    let r = haystack.length;
    while (l < r) {
        const m = Math.floor((r + l) / 2);
        if (haystack[m] === needle) return true;
        else if (haystack[m] < needle) l = m + 1;
        else r = m;
    }
    return false;
}
