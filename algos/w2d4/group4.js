// Group 4: Clint Lawson, Justin Clayton, Chris Hatfield.
// #1 - Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 1-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6


function findMissingValue(arr) {
    // start two counts
    let sumCount = 0
    let idxCount = 0
        // for loop over arr
    for (var i = 0; i < arr.length; i++) {
        // each step: add current value to one sum and the index to the other sum
        sumCount += arr[i];
        idxCount += i;
    }
    // after loop: add length of the array to the index sum
    idxCount += arr.length;
    console.log(idxCount, sumCount)
        // return the difference of index sum and value sum
    return idxCount -= sumCount;
}

let arrT = [5, 2, 7, 8, 4, 9, 3, 0, 1]
console.log(findMissingValue(arrT));
let arrN = [0, 2];
console.log(findMissingValue(arrN));

//-----------------------------------------------------------------------------
// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of
// numbers that has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value. Don't use any inbuilt Array functions.

// Given [9, 10, 11, 12, 13, 17, 18, 1, 5, 6]
// return 1

function minOfSortedRotated(arr) {
    let left = 0;
    let right = arr.length - 1;
    middle = Math.floor(right - left);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[left] < arr[mid] && arr[mid] < arr[right]) {
            right = left;
        } else if (arr[left] > arr[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return arr[left];
}

console.log(minOfSortedRotated([9, 10, 11, 12, 13, 17, 18, 1, 5, 6]));
console.log(minOfSortedRotated([9, 2, 4, 5, 6, 7]));
console.log(minOfSortedRotated([0, 1, 4]));

// while left doesn't equal right
// find the current middle index
// if subsection of the array is in order arr[left] < arr[mid] < arr[right]
// return arr[left]
// else if arr[left] > arr[mid]
// right index equal to mid
// else
// left index equal to mid + 1