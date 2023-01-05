export class Node {
    value: number | null;
    next: Node | null;

    constructor();
    constructor(defaultValue: number);
    constructor(value?: number) {
        if (value !== undefined) {
            this.value = value;
        } else {
            this.value = null;
        }

        this.next = null;
    }
}
