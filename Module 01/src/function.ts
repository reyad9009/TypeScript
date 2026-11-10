//Bassic types
let myString: string = "My name is Tarek";
let MyNumber: number = 123456;
let myBoolean: boolean = true;
let myBigInt: bigint = 100n;

// console.log(myString, MyNumber)

//type safe function
const addTows = (a: number, b: number): number => {
  return a + b;
};
console.log(addTows(60, 80));


