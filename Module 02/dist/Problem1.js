const multiplyValue = (a, b) => {
    if (b === undefined) {
        return a * 2;
    }
    return a * b;
};
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
export {};
