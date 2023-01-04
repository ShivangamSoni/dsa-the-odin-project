// TODO: Convert into a Generic Sorting Function
export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const midIdx = Math.floor(arr.length / 2);
    const firstHalf = mergeSort(arr.slice(0, midIdx));
    const secondHalf = mergeSort(arr.slice(midIdx));

    const res: number[] = [];
    let i = 0; // firstHalf Iterator
    let j = 0; // secondHalf Iterator
    for (; i < firstHalf.length && j < secondHalf.length; ) {
        if (firstHalf[i] < secondHalf[j]) {
            res.push(firstHalf[i++]);
        } else if (firstHalf[i] > secondHalf[j]) {
            res.push(secondHalf[j++]);
        } else {
            res.push(firstHalf[i++]);
            res.push(secondHalf[j++]);
        }
    }

    // Slicing remaining values of the Arrays. Necessary for Odd `length`
    return [...res, ...firstHalf.slice(i), ...secondHalf.slice(j)];
}
