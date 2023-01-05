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
     * Print the List in JSON Format
     *
     * @memberof LinkedList
     */
    print() {
        console.log(JSON.stringify(this.#head, null, 2));
    }
}
