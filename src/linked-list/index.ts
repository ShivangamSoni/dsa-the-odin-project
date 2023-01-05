import { LinkedList } from "./LinkedList";

export default function main() {
    const myList = new LinkedList();
    myList.print();

    myList.append(12);
    myList.append(-10);
    myList.print();

    myList.prepend(52);
    myList.prepend(-90);
    myList.print();
}
