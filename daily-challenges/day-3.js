// Day 3: Find Largest Number

// With loop (no Math.max)
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// With reduce
function findLargestReduce(arr) {
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}

const numbers = [12, 45, 7, 89, 23, 56];
console.log(findLargest(numbers));       // 89
console.log(findLargestReduce(numbers)); // 89