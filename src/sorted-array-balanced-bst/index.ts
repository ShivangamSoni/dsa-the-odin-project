import { Tree } from "./Tree";

export default function main() {
    console.log("\nBalanced Binary Search Tree using Sorted Array:");

    // Create a Tree with Random Numbers
    const myTree = new Tree(generateRandomArray(10));
    myTree.print();
    // Check Balance
    console.log({ balanced: myTree.isBalanced() });

    // Traversals
    console.log({
        level: myTree.levelOrder(),
        pre: myTree.preOrder(),
        in: myTree.inOrder(),
        post: myTree.postOrder(),
    });

    // Insert Multiple Nodes
    const newValues = generateRandomArray(150);
    newValues.forEach((v) => myTree.insert(v));
    myTree.print();
    // Check Balance
    console.log({ balanced: myTree.isBalanced() });

    // Rebalance
    myTree.rebalance();
    myTree.print();
    // Check Balance
    console.log({ balanced: myTree.isBalanced() });

    // Traversals
    console.log({
        level: myTree.levelOrder(),
        pre: myTree.preOrder(),
        in: myTree.inOrder(),
        post: myTree.postOrder(),
    });
}

function generateRandomArray(size = 50) {
    const res: number[] = [];
    for (let i = 0; i < size; i++) {
        res.push(getRandomNumber());
    }
    return res;
}

function getRandomNumber(min = 0, max = 10000) {
    return Math.floor(Math.random() * (max - min) + min);
}
