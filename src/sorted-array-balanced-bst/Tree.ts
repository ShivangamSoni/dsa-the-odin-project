import { mergeSort } from "../recursion/merge-sort";
import { Node } from "./Node";

export class Tree {
    #root: Node | null = null;

    constructor(arr: number[]) {
        this.#root = this.#buildTree(arr);
    }

    /**
     * Root of the Tree
     *
     * @readonly
     * @memberof Tree
     */
    get root() {
        return this.#root;
    }

    /**
     * Build a Balanced Tree from an Array of Values
     *
     * @param arr Array of Numbers
     * @returns Root Node for the Tree
     */
    #buildTree(arr: number[]) {
        if (arr.length <= 0) {
            return null;
        }

        if (arr.length === 1) {
            return new Node(arr[0]);
        }

        // Remove Duplicates & Sort
        const sortedArr = mergeSort([...new Set(arr).values()]);

        const mid = Math.floor(sortedArr.length / 2);
        const left = this.#buildTree(sortedArr.slice(0, mid));
        const right = this.#buildTree(sortedArr.slice(mid + 1));

        const root = new Node(sortedArr[mid]);
        root.left = left;
        root.right = right;

        return root;
    }

    /**
     * Prints the Visual Representation of Tree
     *
     * @memberof Tree
     */
    print() {
        prettyPrint(this.#root);
    }
}

/**
 * Prints a Visual Representation of a BST
 *
 * @param {(Node | null)} node
 * @param {string} [prefix=""]
 * @param {boolean} [isLeft=true]
 */
function prettyPrint(node: Node | null, prefix = "", isLeft = true) {
    if (node === null) return;
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}
