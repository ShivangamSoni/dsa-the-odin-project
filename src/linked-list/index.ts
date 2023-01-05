import { LinkedList } from "./LinkedList";

export default function main() {
    const myList = new LinkedList();

    console.log("\nAppend:");
    myList.append(12);
    myList.append(-10);
    myList.print();

    console.log("\nPrepend:");
    myList.prepend(52);
    myList.prepend(-90);
    myList.print();

    console.log("\nSize, Head & Tail:");
    console.log({
        size: myList.size,
        head: myList.head?.value,
        tail: myList.tail?.value,
    });

    console.log("\nAt:");
    console.log(myList.at(0));
    console.log(myList.at(2));
    console.log(myList.at(myList.size - 1));
    console.log(myList.at(78));

    console.log("\nPop:");
    console.log({ size: myList.size });
    console.log(myList.pop()?.value);
    console.log({ size: myList.size });
    console.log(myList.pop()?.value);
    console.log({ size: myList.size });

    console.log("\nContains:");
    console.log({
        "52": myList.contains(52),
        "-90": myList.contains(-90),
        "80": myList.contains(80),
        "0": myList.contains(0),
    });

    console.log("\nFind:");
    console.log({
        "52": myList.find(52),
        "-90": myList.find(-90),
        "80": myList.find(80),
        "0": myList.find(0),
    });

    console.log("\ntoString:");
    myList.append(20);
    myList.prepend(2033);
    console.log(myList.toString());

    console.log("\nInsert At:");
    myList.insertAt(19, 0);
    console.log(myList.toString());
    myList.insertAt(4, 2);
    console.log(myList.toString());
    myList.insertAt(-7, myList.size - 1);
    console.log(myList.toString());

    console.log("\nRemove At:");
    myList.removeAt(0);
    console.log(myList.toString());
    myList.removeAt(myList.size - 1);
    console.log(myList.toString());
    myList.removeAt(2);
    console.log(myList.toString());
    myList.removeAt(1);
    console.log(myList.toString());
}
