# Week 4: JavaScript Fundamentals
## Calculator & Grade Tracker

## Project Description
This week I built a console calculator that supports addition, subtraction, multiplication, division (with zero-division safety), modulus and exponentiation, plus a student grade tracker that can add students, calculate averages, find the top performer and generate report cards. 

* I also completed all the core practice tasks for variables, functions, control flow, arrays, objects and JSON.

* I also completed five daily challenges.

## Technologies Used
- HTML5
- JavaScript
- Node.js

## Features
- Fully working calculator with `calculate(num1, operator, num2)` supporting +, -, *, /, %, **
- Safe division by zero handling
- Student grade tracker with all required methods
- Practice of map, filter, reduce, find, some, every
- JSON parse / stringify practice
- Daily challenges: FizzBuzz, reverse string, largest number, remove duplicates, palindrome

## How to Run
1. Clone this repository
2. Open `index.html` with Live Server (or any local server) and press F12 → Console
3. Or run individual files in the terminal:
   ```bash
   node main.js
   node grade-tracker.js
   node daily-challenges/fizzbuzz.js
   ```

## Lessons Learned
- Using === instead of == stopped the surprising case where "5" == 5 was true. Strict equality makes type mismatches obvious.
- Functions should return a value; putting console.log inside the function made the calculator tests print undefined.
- const protects values that must never change, while let is for values that can be reassigned.
- Array methods (map, filter, reduce) are much cleaner than writing every loop by hand.
- JSON is just text that looks like an object
- I need JSON.parse to turn it into real data and JSON.stringify to send it the other way.

## Challenges Faced
- Remembering to return values from functions instead of only logging them.
- Getting the grade averages to show exactly two decimal places (used toFixed(2) then converted back to number).
- Understanding the difference between function declarations and arrow functions, especially when to use curly braces.