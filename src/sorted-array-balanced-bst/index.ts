import { Tree } from "./Tree";

export default function main() {
    console.log("\nBalanced Binary Search Tree using Sorted Array:");

    const myTree = new Tree([1, -10, 23, -4, 1, 152, 23, 60, -71, 87, -10]);
    myTree.print();
}
