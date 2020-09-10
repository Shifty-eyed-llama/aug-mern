//Group 2 - Daniel Havens, Christian Land, Hana Luong, Ryan // #1 - Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 1-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

function findMissingValue(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        } else if (max < arr[i]) {
            max = arr[i];
        }
        sum += arr[i];
    }
    return ((Math.round(arr.length / 2)) * (min + max)) - sum;
}

console.log(findMissingValue([5, 2, 7, 8, 4, 9, 3, 0, 1]))






// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of
// numbers that has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value. Don't use any inbuilt Array functions.

// Given [9, 10, 11, 12, 13, 17, 18, 1, 5, 6]
// return 1

// function minOfSorted(arr, low = 0, high = arr.length - 1) {
//     // define middle
//     let middle = Math.floor((low + high) / 2);

//     // not rotated
//     if (high < low) {
//         return arr[0]
//     }

//     // one element
//     if (high === low) {
//         return arr[low];
//     }

//     // check if middle+1 is minimum element
//     if (middle < high && arr[middle + 1] < arr[middle]) {
//         return arr[middle + 1];
//     }

//     // check if mid itself is min
//     if (middle > low && arr[middle] < arr[middle - 1]) {
//         return arr[middle]
//     }

//     // otherwise recurse left or right
//     if (arr[high] > arr[middle]) {
//         return minOfSorted(arr, low, middle - 1)
//     } else {
//         return minOfSorted(arr, middle - 1, high);
//     }

// }

function minOfSortedRotated2(arr) {
    let left = 0;
    let right = arr.length - 1;
    if (arr[right] > arr[0]) {
        return arr[0];
    }

    while (right >= left) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] > arr[mid + 1]) {
            return arr[mid + 1];
        }
        if (arr[mid - 1] > arr[mid]) {
            return arr[mid];
        }
        if (arr[mid] > arr[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

console.log(minOfSortedRotated2([9, 10, 11, 12, 13, 17, 18, 1, 5, 6]));