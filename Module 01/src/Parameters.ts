// ==========================================
// 6. OPTIONAL PARAMETERS
// ==========================================

// Function Name: concatName

// firstName: string
// এটি Required Parameter।
// Function Call করার সময় এটি দিতেই হবে।

// lastName?: string
// এটি Optional Parameter।
// চাইলে দেওয়া যাবে, না দিলেও সমস্যা নেই।

const concatName = (firstName: string, lastName?: string) => {
  // যদি lastName না দেওয়া হয়,তাহলে শুধু firstName Return করবে।
  if (!lastName) {
    return firstName;
  }
  // lastName থাকলে First Name এবং Last Name একসঙ্গে Join করবে।
  return firstName + " " + lastName;
};
// শুধু First Name পাঠানো হয়েছে।
console.log(concatName("Tarek"));
// First Name এবং Last Name পাঠানো হয়েছে।
console.log(concatName("Tarek", "Rahman"));



// ==========================================
// 7. DEFAULT PARAMETERS
// ==========================================

// Function Name: greetings

// fullName: string
// এটি Required Parameter।

// greeting = "hello"
// এটি Default Parameter।

// অর্থাৎ greeting-এর Value না দিলে
// Default হিসেবে "hello" ব্যবহার হবে।

const greetings = (
  fullName: string,
  greeting = "Hello"
) => {
  // Greeting এবং Full Name Print করবে।
  console.log(greeting + " " + fullName);
};
// এখানে শুধু Full Name পাঠানো হয়েছে।
// তাই Default Greeting "Hello" ব্যবহার হবে।

greetings("Reyad");
// এখানে নিজের পছন্দমতো Greeting পাঠানো হয়েছে।
greetings("Tarek", "Good Morning");


// ==========================================
// 8. REST PARAMETERS
// ==========================================

// Function Name: sum

// ...numbers: number[]
// এখানে ... হলো Rest Operator Syntax।

// এর মাধ্যমে যতগুলো Number পাঠানো হবে,
// সবগুলো numbers নামের Array-এর মধ্যে জমা হবে।

const sum = (...numbers: number[]) => {

  // reduce() Method:
  // Array-এর সব Element যোগ করে একটি Result তৈরি করে।

  // total = আগের যোগফল।
  // sum = বর্তমান Element।
  // 0 = Initial Value।

  return numbers.reduce(
    (total, sum) => total + sum,
    0
  );

};

// Function-এ ৫টি Number পাঠানো হয়েছে।
console.log(sum(1, 2, 3, 4, 5));


// ==========================================
// 9. REST PARAMETERS WITH TUPLE
// ==========================================

// Function Name: logUserAction

// ...args:
// এখানে Rest Parameter ব্যবহার করা হয়েছে।

// Tuple Type:
// প্রথম Argument = string (name)
// দ্বিতীয় Argument = number (age)
// তৃতীয় Argument = boolean (isActive)

// অর্থাৎ ঠিক ৩টি Argument পাঠাতে হবে
// এবং তাদের Type নির্দিষ্ট ক্রমে থাকতে হবে।

const logUserAction = (
  ...args: [
    name: string,
    age: number,
    isActive: boolean
  ]
) => {

  // Array Destructuring:
  // args Array থেকে প্রথম দুটি Value বের করছি।

  const [name, age] = args;

  // User-এর Name এবং Age Print করছি।

  console.log(name + " is " + age);
};


// Function Call:
// ১. Tarek = string
// ২. 25 = number
// ৩. false = boolean

logUserAction("Tarek", 25, false);