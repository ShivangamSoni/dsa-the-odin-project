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

    console.log(myList.size);
    console.log({ head: myList.head?.value, tail: myList.tail?.value });

    console.log(myList.at(0)?.value);
    console.log(myList.at(2)?.value);
    console.log(myList.at(myList.size - 1)?.value);
    console.log(myList.at(78));
}
