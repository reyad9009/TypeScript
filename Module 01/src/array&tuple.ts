// 3. ARRAY   Array<string> অর্থ:  এই Array-এর মধ্যে শুধু String Data রাখা যাবে।
const arrr: Array<string> = ["programming", "Hero"]; // এটি Generic Array Syntax।  এটিও সম্পূর্ণ সঠিক পদ্ধতি।

// string[] অর্থ:  এই Array-এর মধ্যে শুধু String রাখা যাবে।
const arr: string[] = ["programming", "Hero"];
arr.push("Tarek"); // push():  Array-এর শেষে নতুন Element যোগ করে।
console.log(arr);

// number[] অর্থ:   এই Array-এর মধ্যে শুধু Number রাখা যাবে।
const numArray: number[] = [1, 2, 3, 4];
console.log(numArray);


// 4. TUPLE
// এখানে প্রথম Position-এ Number
// দ্বিতীয় Position-এ Number রাখতে হবে।
let userInfo: [string, number, boolean] = ["Tarek", 25, true];

// 5. READONLY TUPLE
// readonly:  Tuple-এর Element পরিবর্তন করা যাবে না।
const dhakaLatLong: readonly [number, number] = [
  23.8103,
  90.4125
];
// নিচের কাজগুলো করা যাবে না।
// dhakaLatLong.push(100); 
// Error: Readonly Tuple-এ push করা যাবে না।
// dhakaLatLong[0] = 100;
// Error: Readonly Tuple-এর Element পরিবর্তন করা যাবে না।
