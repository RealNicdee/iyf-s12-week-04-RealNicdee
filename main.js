// ============================================
// Week 4 - JavaScript Fundamentals
// ============================================

// ---------- Task 7.1: Variables ----------
console.log("=== Task 7.1: Variables ===");

let fullName = "Nicodemus Muriuki";
let age = 23;
const birthYear = 2003;
let isStudent = true;
const favoriteColors = ["blue", "green", "black"];
const today = new Date();

console.log(`My name is ${fullName}`);
console.log(`I am ${age} years old`);
console.log(`Am I a student? ${isStudent}`);
console.log(`My favorite colors: ${favoriteColors.join(", ")}`);
console.log(`Today's date: ${today.toDateString()}`);

console.log(typeof fullName);   // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean

let score = 100;
score = 150;
console.log(`Score after update: ${score}`);

const PI = 3.14159;

// ---------- Task 7.2: Data Types & Operators ----------
console.log("\n=== Task 7.2: Operators ===");

let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1
console.log(a ** b);  // 1000

let count = 0;
count++;
console.log(`After increment: ${count}`);
count--;
console.log(`After decrement: ${count}`);

// String operations
let firstName = "Nicodemus";
let lastName = "Muriuki";
let myFullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

console.log(myFullName.toUpperCase());
console.log(myFullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(myFullName.includes("Nicodemus"));

// Comparison & Logical (using ===)
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 !== 3);
console.log(true && true);
console.log(true || false);
console.log(!true);

// Challenge: age calculations
const ageInDays = age * 365;
const ageInHours = ageInDays * 24;
const yearTurn100 = birthYear + 100;

console.log(`Age in days (approx): ${ageInDays}`);
console.log(`Age in hours (approx): ${ageInHours}`);
console.log(`Year I turn 100: ${yearTurn100}`);

// ---------- Task 7.3: Functions ----------
console.log("\n=== Task 7.3: Functions ===");

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow functions
const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Nicodemus"));
console.log(add(8, 4));
console.log(multiply(6, 7));
console.log(divide(20, 4));
console.log(divide(10, 0));

// Required functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    const parts = fullName.trim().split(" ");
    return parts.map(part => part.charAt(0).toUpperCase()).join("");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(5, 4));           // 20
console.log(celsiusToFahrenheit(25));      // 77
console.log(isEven(10));                   // true
console.log(isEven(7));                    // false
console.log(getInitials("Nicodemus Muriuki")); // NM
console.log(reverseString("hello"));       // olleh

// Default parameters
function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Nicodemus"));
console.log(greetWithDefault("Nicodemus", "Hi"));

// Tip calculator
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(calculateTip(100));      // 15
console.log(calculateTip(200, 20));  // 40

// ---------- Task 7.4: Control Flow ----------
console.log("\n=== Task 7.4: Control Flow ===");

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(95));
console.log(getGrade(72));

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log(getDayName(1));
console.log(getDayName(5));

// Loops demos
console.log("For loop 0-4:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Build programs
console.log("\nNumbers 1-100 (first 10 shown for brevity):");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Full 1-100 would be the same loop to 100

console.log("\nEven numbers 1-50 (first few):");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// FizzBuzz is also in daily-challenges
console.log("\nFizzBuzz sample (1-20):");
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Triangle of stars
console.log("\nStar triangle:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// ---------- Mini-Project: Calculator ----------
console.log("\n=== Calculator ===");

function addNums(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplyNums(a, b) {
    return a * b;
}

function divideNums(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return addNums(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiplyNums(num1, num2);
        case "/":
            return divideNums(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

// Required tests
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Cannot divide by zero
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8

// ---------- Task 8.1: Arrays ----------
console.log("\n=== Task 8.1: Arrays ===");

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
fruits.unshift("mango");
console.log(fruits);

// Array methods
numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even:", firstEven);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// Build tasks
const nums = [3, -1, 12, 7, -4, 15, 8];
const doubledNums = nums.map(n => n * 2);
const positives = nums.filter(n => n >= 0);
const firstOver10 = nums.find(n => n > 10);
const product = nums.reduce((acc, n) => acc * n, 1);

console.log("Doubled:", doubledNums);
console.log("Positives:", positives);
console.log("First > 10:", firstOver10);
console.log("Product:", product);

// ---------- Task 8.2: Objects ----------
console.log("\n=== Task 8.2: Objects ===");

const person = {
    firstName: "Nicodemus",
    lastName: "Muriuki",
    age: 23,
    isStudent: true,
    hobbies: ["coding", "reading", "football"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 24;
person.phone = "0712 345 678";
delete person.isStudent;

const calcObj = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(calcObj.add(5, 3));

const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// ---------- Task 8.3: Array of Objects ----------
console.log("\n=== Task 8.3: Array of Objects ===");

const students = [
    { name: "Amina", age: 22, grade: 85, major: "CS" },
    { name: "Brian", age: 20, grade: 72, major: "Math" },
    { name: "Wanjiku", age: 23, grade: 90, major: "CS" },
    { name: "David", age: 21, grade: 88, major: "Physics" },
    { name: "Faith", age: 22, grade: 95, major: "CS" }
];

const names = students.map(student => student.name);
const highAchievers = students.filter(student => student.grade > 80);
const wanjiku = students.find(student => student.name === "Wanjiku");
const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
const csMajors = students.filter(student => student.major === "CS");
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const hasTopStudent = students.some(student => student.grade > 90);
const allPassing = students.every(student => student.grade >= 60);

console.log("Names:", names);
console.log("High achievers:", highAchievers);
console.log("Found Wanjiku:", wanjiku);
console.log("Average grade:", avgGrade.toFixed(2));
console.log("CS majors:", csMajors);
console.log("Sorted by grade:", sortedByGrade);
console.log("Has top student (>90):", hasTopStudent);
console.log("All passing:", allPassing);

// ---------- Task 8.4: JSON ----------
console.log("\n=== Task 8.4: JSON ===");

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

const posts = JSON.parse(postsJson);
const publishedPosts = posts.filter(post => post.published === true);
const sortedPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);
const postStrings = sortedPosts.map(post => `${post.title} (${post.likes} likes)`);
const backToJson = JSON.stringify(publishedPosts, null, 2);

console.log("Parsed posts:", posts);
console.log("Published only:", publishedPosts);
console.log("Sorted by likes:", sortedPosts);
console.log("Mapped strings:", postStrings);
console.log("Back to JSON:\n" + backToJson);