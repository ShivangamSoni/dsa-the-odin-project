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
     * Insert New Node to Tree
     *
     * @param {number} value
     * @memberof Tree
     */
    insert(value: number) {
        this.#root = this.#insertNode(this.#root, value);
    }

    /**
     * Private Helper Recursive Method for Insertion
     *
     * @param {(Node | null)} root
     * @param {number} value
     * @returns {Node}
     */
    #insertNode(root: Node | null, value: number) {
        if (root === null) {
            return new Node(value);
        }

        if (root.value > value) {
            root.left = this.#insertNode(root.left, value);
        } else if (root.value < value) {
            root.right = this.#insertNode(root.right, value);
        }

        return root;
    }

    /**
     * Delete the Node with value
     *
     * @param {number} value
     * @memberof Tree
     */
    delete(value: number) {
        this.#root = this.#deleteNode(this.#root, value);
    }

    /**
     * Private Helper Recursive Method for Deletion
     *
     * @param {(Node | null)} root Starting node of Tree
     * @param {number} value Value of the Node
     * @returns Root Node for the Tree
     */
    #deleteNode(root: Node | null, value: number) {
        if (root === null) return root;

        if (root.value > value) {
            root.left = this.#deleteNode(root.left, value);
        } else if (root.value < value) {
            root.right = this.#deleteNode(root.right, value);
        } else {
            if (root.right === null) {
                root = root.left;
            } else if (root.left === null) {
                root = root.right;
            } else {
                // Case: Both Children have Nodes
                // Find Max in Left
                let curr = root.left;
                while (curr.right !== null) {
                    curr = curr.right;
                }

                // Copy Value
                root.value = curr.value;
                // Remove Duplicate from left Sub-Tree
                root.left = this.#deleteNode(root.left, root.value);
            }
        }

        return root;
    }

    /**
     * Return the Node with value
     *
     * @param {number} value
     * @return {(Node | null)} Node if found else null
     * @memberof Tree
     */
    find(value: number) {
        if (this.#root === null) {
            return null;
        }

        let temp: Node | null = this.#root;
        while (temp !== null) {
            if (temp.value > value) {
                temp = temp.left;
            } else if (temp.value < value) {
                temp = temp.right;
            } else {
                return temp;
            }
        }

        return temp;
    }

    /**
     * Perform LevelOrder Traversal of Tree
     *
     * @param {(value: number) => void} [action]
     * @return {(number[] | undefined)} if no action function is provided returns array of values
     * @memberof Tree
     */
    levelOrder(action?: (value: number) => void) {
        const arr = this.#levelOrderToArray(action);
        if (typeof action === "function") {
            return;
        }
        return arr;
    }

    /**
     * Recursive Helper Function for LevelOrder
     *
     * @param {(Array<Node | null>)} [queue=[this.#root]]
     * @param {number[]} [arr=[]]
     * @return {number[]}
     * @memberof Tree
     */
    #levelOrderToArray(
        action: (item: number) => void = (item) => arr.push(item),
        queue: Array<Node | null> = [this.#root],
        arr: number[] = [],
    ): number[] {
        if (queue.length === 0) {
            return arr;
        }

        const root = queue.shift() ?? null;
        if (root === null) {
            return arr;
        }

        action(root.value);
        queue.push(root.left);
        queue.push(root.right);
        return this.#levelOrderToArray(action, queue, arr);
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