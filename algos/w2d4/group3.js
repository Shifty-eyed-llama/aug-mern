// group 3 Matthew Merrill, Dallas, Patrick
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
    let i = 0;
    let prev = 0;
    bubbleSort(arr)
    for (i < n; i++;) {
        for (var j = i + 1; j < n; j++) {
            if (arr[j] != i + 1) {
                return i + 1;
            }
        }
    }
    return false;
}

function bubbleSort(arr) {
    var len = arr.length;
    // 1        // 2    // 4
    for (var i = 0; i < len; i++) {
        // 3
        for (var j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}



// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of
// numbers that has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value. Don't use any inbuilt Array functions.

// Given [9, 10, 11, 12, 13, 17, 18, 1, 5, 6]
// return 1


function minOfSortedRotated(arr) {
    i = 1;
    j = 0;
    for (var i = 1; i < arr.length; i++) {
        if (i > j) {
            i++, j++
        }
        if (i < j) {
            return i
        }

    }
}