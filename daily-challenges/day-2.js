// Day 2: Reverse a String

// Approach 1: Built-in methods
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Approach 2: Loop
function reverseWithLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));        // olleh
console.log(reverseWithLoop("hello"));      // olleh
console.log(reverseString("Nicodemus"));    // sumedociN