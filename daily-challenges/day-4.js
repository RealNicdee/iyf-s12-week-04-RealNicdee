// Day 4: Remove Duplicates

// With Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// With filter
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesSet(numbers));     // [1, 2, 3, 4, 5]
console.log(removeDuplicatesFilter(numbers));  // [1, 2, 3, 4, 5]