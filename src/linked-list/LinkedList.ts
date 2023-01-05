import { Node } from "./Node";

export class LinkedList {
    #head: Node | null;
    #tail: Node | null;
    #size: number;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    /**
     * First Node in List
     *
     * @readonly
     * @memberof LinkedList
     */
    get head() {
        return this.#head;
    }

    /**
     * Last Node in List
     *
     * @readonly
     * @memberof LinkedList
     */
    get tail() {
        return this.#tail;
    }

    /**
     * Size of the List
     *
     * @readonly
     * @memberof LinkedList
     */
    get size() {
        return this.#size;
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
        }

        if (this.#tail !== null) {
            this.#tail.next = newNode;
        }

        this.#tail = newNode;
        this.#size++;
    }

    /**
     * Insert Node at the Beginning of the List
     *
     * @param {number} value
     * @memberof LinkedList
     */
    prepend(value: number) {
        const newNode = new Node(value);
        if (this.#tail === null) {
            this.#tail = newNode;
        }

        if (this.#head !== null) {
            newNode.next = this.#head;
        }

        this.#head = newNode;
        this.#size++;
    }

    /**
     * Return Node at Specified Index
     *
     * @param {number} index
     * @returns {(Node|null)} Node or null if invalid index
     * @memberof LinkedList
     */
    at(index: number): Node | null {
        if (index >= this.size) {
            return null;
        }

        if (index === this.size - 1) {
            return this.tail;
        }

        let count = 0;
        let temp = this.#head;
        while (count !== index && temp !== null) {
            count++;
            temp = temp.next;
        }
        return temp;
    }

    /**
     * Remove & Return Last Node of the List
     *
     * @return {(Node|null)} Node or Null if List Empty
     * @memberof LinkedList
     */
    pop() {
        if (this.#head === null) return null;

        let cur = this.#head;
        let prev: Node | null = null;

        while (cur.next !== null) {
            prev = cur;
            cur = prev.next as Node;
        }

        // prev will be null if head is the only Node
        if (prev === null) {
            this.#head = null;
        } else {
            prev.next = null;
        }

        this.#tail = prev;
        this.#size--;

        return cur;
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
