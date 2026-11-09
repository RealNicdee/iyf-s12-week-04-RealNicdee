// Day 5: Palindrome Checker

function isPalindrome(str) {
    // Ignore case and spaces
    const cleaned = str.toLowerCase().replace(/\s+/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));                        // true
console.log(isPalindrome("hello"));                          // false
console.log(isPalindrome("A man a plan a canal Panama"));    // true
console.log(isPalindrome("Nicodemus"));    