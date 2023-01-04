import { fibs, fibsRec } from "./Fibonacci";

function main() {
    console.log("Fibs Loop");
    console.log(fibs(8));

    console.log("Fibs Recursion");
    console.log(fibsRec(8));
}

export default main;
