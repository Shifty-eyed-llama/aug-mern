// Yunzhuo Zhou, Beth Johnson, Ryan Marean, UmerMahmood
// #1 - Missing Value


// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?  sum = (0+9)*10/2=45,

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1] sumGiven = 39, 45-39 = 6
// return 6
// sum = (0 + arr.length)*(arr.length +1)/2  => [3,5,6,7]=>(3+7)*5/2 =25;21  25-21=4
//[1,6,4,3,2,5] =>(1)
// (arr.length)*(arr.length+1)/2

function findMissingValue(arr) {
    var sum = arr.length * (arr.length + 1) / 2;
    var sumGiven = 0;
    for (var i = 0; i < arr.length; i++) {
        sumGiven += arr[i];
    }
    return sum - sumGiven;
}

const arr = [5, 2, 7, 8, 4, 9, 3, 0, 1]

console.log(findMissingValue(arr))




// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of
// numbers that has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value. Don't use any inbuilt Array functions.

// Given [9, 10, 11, 12, 13, 17, 18, 1, 5, 6]
// return 1
// for =>if(arr[i+1]<arr[i])=> arr[i+1]
function minOfSortedRotated(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) {
            return arr[i + 1];
        }
    }
}
const arr = [9, 10, 11, 12, 13, 17, 18, 1, 5, 6];
console.log(minOfSortedRotated(arr));


// try to use Binary Search
function minOfSortedRotated(arr) {
    var left = 0;
    var right = arr.length - 1;
    var halfway = Math.floor(left + right) / 2;
    while (left <= right) {
        if (arr[halfway + 1] < arr[halfway]) {
            return arr[halfway + 1];
        }
    }

}