export function fibs(length: number) {
    const res: number[] = [0, 1];
    for (let i = 2; i < length; i++) {
        const lastIdx = res.length - 1;
        res.push(res[lastIdx] + res[lastIdx - 1]);
    }
    return res;
}

export function fibsRec(length: number): number[] {
    if (length <= 0) {
        return [];
    }
    if (length === 1) {
        return [0];
    }
    if (length === 2) {
        return [0, 1];
    }
    const fib = fibsRec(length - 1);
    const lastIdx = fib.length - 1;
    return [...fib, fib[lastIdx] + fib[lastIdx - 1]];
}
