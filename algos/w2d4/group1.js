// Group 1 :Beverly Kwok, James Hartung, Jennifer Joy, Robert Orellane

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
    let newArr = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length + 1; j++) {
            if (arr[i] == j) {
                newArr[j] = arr[i];
            }
        }
    }

    console.log(newArr)

    for (var k = 0; k < newArr.length - 1; k++) {
        if (newArr[k] === undefined) {
            return k;
        }
    }
}

arr = [5, 2, 6, 8, 4, 7, 3, 0, 9]
console.log(findMissingValue(arr))




// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of
// numbers that has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value. Don't use any inbuilt Array functions.

// Given [9, 10, 11, 12, 13, 17, 18, 1, 5, 6]
// return 1


function minOfSortedRotated(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return arr[i];
        }
    }
}

console.log(minOfSortedRotated([10, 11, 12, 13, 17, 18, 1, 5, 6, 9]));