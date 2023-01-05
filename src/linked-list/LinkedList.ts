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
     * Insert At the Specified Index
     *
     * @param {number} value
     * @param {number} index
     * @memberof LinkedList
     */
    insertAt(value: number, index: number) {
        if (index >= this.size || index < 0) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        let count = 0;
        let cur = this.#head;
        let prev: Node | null = null;

        while (count !== index && cur !== null) {
            prev = cur;
            cur = prev.next;
            count++;
        }

        if (cur === null) {
            return;
        }

        const newNode = new Node(value);
        newNode.next = cur;

        // Since we are appending on index 0 Prev can't be null
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        prev.next = newNode;
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
        if (index >= this.size || index < 0) {
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
     * Remove & Return Node at Index
     *
     * @param {number} index
     * @return @return {(Node|null)} Node or Null if List is Empty or Index invalid
     * @memberof LinkedList
     */
    removeAt(index: number) {
        if (index >= this.size || index < 0) {
            return null;
        }

        if (index === this.size - 1) {
            return this.pop();
        }

        if (index === 0) {
            // Since previous condition handles List with 1 Node, no need to check for null head
            const temp = this.#head as Node;
            this.#head = temp.next;
            this.#size--;
            return temp;
        }

        let count = 0;
        let cur = this.#head as Node;
        let prev: Node | null = null;

        while (count !== index && cur.next !== null) {
            count++;
            prev = cur;
            cur = prev.next as Node;
        }

        // Since we are popping on index size-1 & handling index 0 separately, Prev can't be null
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        prev.next = cur.next;
        this.#size--;
        return cur;
    }

    /**
     * Check if Value Exists in List
     *
     * @param {number} value
     * @return {boolean}
     * @memberof LinkedList
     */
    contains(value: number) {
        let temp = this.#head;

        while (temp !== null) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.next;
        }

        return false;
    }

    /**
     * Return Index of the Node
     *
     * @param {number} value
     * @return {(number|null)} number If node with value exists else null
     * @memberof LinkedList
     */
    find(value: number) {
        let index = 0;
        let temp = this.#head;

        while (temp !== null) {
            if (temp.value === value) {
                return index;
            }
            temp = temp.next;
            index++;
        }

        return null;
    }

    /**
     * Return String representation of the List
     *
     * @return {string}
     * @memberof LinkedList
     */
    toString() {
        let res = "";
        let temp = this.#head;

        while (temp !== null) {
            res += `( ${temp.value} ) -> `;
            temp = temp.next;
        }

        res += temp;
        return res;
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
