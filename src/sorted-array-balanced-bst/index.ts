import { Tree } from "./Tree";

export default function main() {
    console.log("\nBalanced Binary Search Tree using Sorted Array:");

    const myTree = new Tree([1, -10, 23, -4, 1, 152, 23, 60, -71, 87, -10]);
    myTree.print();

    myTree.insert(54);
    myTree.insert(18);
    myTree.insert(58);
    myTree.insert(5);
    myTree.print();

    console.log("Remove 54");
    myTree.delete(54);
    myTree.print();

    console.log("Remove 18");
    myTree.delete(18);
    myTree.print();

    console.log("Remove 87");
    myTree.delete(87);
    myTree.print();

    console.log("Remove 23");
    myTree.delete(23);
    myTree.print();

    console.log({
        5: myTree.find(5),
        58: myTree.find(58),
        1: myTree.find(1),
        155: myTree.find(155),
        "-200": myTree.find(-200),
    });

    myTree.print();
    console.log(myTree.levelOrder());
    myTree.levelOrder((item) => console.log(item));

    myTree.print();
    console.log(myTree.inOrder());
    myTree.inOrder((item) => console.log(item));

    myTree.print();
    console.log(myTree.preOrder());
    myTree.preOrder((item) => console.log(item));
}
