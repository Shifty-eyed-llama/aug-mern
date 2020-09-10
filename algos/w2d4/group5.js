//Michelly Richardson,Daniel Mathew,Bryan Birch, Joseph Sunderland
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
    let sum = 0;
    let natSum = arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        natSum += i;
    }
    return natSum - sum;
} //checked and this one worked

//[20,21,22,23,25,26,27,28] ==>  -156?


// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of
// numbers that has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value. Don't use any inbuilt Array functions.

// Given [9, 10, 11, 12, 13, 17, 18, 1, 5, 6]
// return 1

//1st Go
function minOfSortedRotated(arr) {
    let mid = Math.floor(arr.length / 2);
    if (arr.length <= 2) {
        if (arr[0] > arr[arr.length - 1]) {
            return arr[arr.length - 1]
        } else {
            return arr[0]
        }
    }
    if (arr[0] < arr[mid]) {

        let left = arr.slice(mid)
        return minOfSortedRotated(left);
    }
    if (arr[0] > arr[mid]) {
        let right = arr.slice(0, mid + 1)
        return minOfSortedRotated(right);
    }
}



//2nd Go
function minOfSortedRotated(arr) {
    //lets set are var
    let start = 0;
    let end = arr.length - 1;
    let mid;
    //lets do a loop thing??
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] > arr[mid]) {
            return arr[mid];
        }
        if (arr[mid + 1] < arr[mid]) {
            return arr[mid + 1]
        }
        if (arr[mid] > arr[end]) {
            start = mid;
        } else {
            end = mid;
        }
    }
} //checked and this one worked