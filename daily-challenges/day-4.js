// Day 4: Remove Duplicates

// With Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesSet(numbers));     // [1, 2, 3, 4, 5]