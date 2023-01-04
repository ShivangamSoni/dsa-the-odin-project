import { fibs, fibsRec } from "./Fibonacci";
import { mergeSort } from "./merge-sort";

function main() {
    console.log("Fibs Loop");
    console.log(fibs(8));

    console.log("Fibs Recursion");
    console.log(fibsRec(8));

    const arr = [1, 3, 4, 5, -10, 2, -1, 0, -34, 5];
    const sortedArr = mergeSort(arr);
    console.log("Merge Sort");
    console.log({ arr, sortedArr });
}

export default main;
