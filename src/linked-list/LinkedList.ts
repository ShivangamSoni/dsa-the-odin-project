import { Node } from "./Node";

export class LinkedList {
    #head: Node | null;

    constructor() {
        this.#head = null;
    }

    /**
     * Insert Node to the end of the List
     *
     * @param {number} value
     * @memberof LinkedList
     */
    append(value: number): void {
        const newNode = new Node(value);
        if (this.#head === null) {
            this.#head = newNode;
            return;
        }

        let temp = this.#head;
        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    /**
     * Insert Node at the Beginning of the List
     *
     * @param {number} value
     * @memberof LinkedList
     */
    prepend(value: number) {
        const newNode = new Node(value);
        if (this.#head !== null) {
            newNode.next = this.#head;
        }
        this.#head = newNode;
    }

    /**
     * Print the List in JSON Format
     *
     * @memberof LinkedList
     */
    print() {
        console.log(JSON.stringify(this.#head, null, 2));
    }
}
