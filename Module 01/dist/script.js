"use strict";
//Bassic types
let myString = "My name is Tarek";
let MyNumber = 123456;
let myBoolean = true;
let myBigInt = 100n;
// console.log(myString, MyNumber)
//type safe function
const addTows = (a, b) => {
    return a + b;
};
console.log(addTows(60, 80));
// Array and Tuple an readonly modifier
const arrr = ["programming", "Hero"]; //old methode
const arr = ["programming", "Hero"];
arr.push("Tarek");
console.log(arr);
const numArray = [1, 2, 3, 4];
const dhakaLatLong = [1234, 4567]; // in tupe cannot push data for used readonly
// 1-8: Optional, Default Parameters in function
const connatName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + "" + lastName;
};
console.log(connatName("Tarek"));
const greetings = (fullName, greeting = "hello") => {
    console.log(greeting + " " + fullName);
};
greetings("Reyad");
// 1-9: Rest Parameters in Function
const sum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};
console.log(sum(1, 2, 3, 4, 5));
const logUserAction = (...args) => {
    const [name, age] = args;
    console.log(name + " is " + age);
};
console.log(logUserAction("Tarek", 25, false));
