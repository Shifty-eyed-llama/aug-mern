// Ryan Marean, Daniel Matthew, Hyunsoo, Dallas Martinez

// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a value 1-255

// Find all the consecutive groups of integers that add up to the value k

sum = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 10, 10, 55, 6]

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

// your arr can be empty

// For loop to iterate over array indexes
// Within that loop, for loop to add consecutive digits
// If greater than sum, break loop
// If equal to sum, push values to new array
// (if less than sum, keep adding)
// return array of arrays

function sumArr(sum, arr) {
    let mainArr = [];
    let subArr = [];
    let tempSum = 0;
    for (let i = 0; i < arr.length; i++) {
        subArr.push(arr[i]);
        tempSum += arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (tempSum < sum) {
                subArr.push(arr[j]);
                tempSum += arr[j];
            } else if (tempSum > sum) {
                subArr = [];
                tempSum = 0;
                break;
            } else if (arr[j + 1] === 0) {
                subArr.push(arr[j])
            } else if (tempSum == sum && arr[j + 1] !== 0) {
                mainArr.push(subArr);
            }
        }
    }
    return mainArr;
}

console.log(sum, arr);

function sumArr2(sum, arr) {
    let mainArr = [];
    let subArr = [];
    let tempSum = 0;
    for (let i = 0; i < arr.length; i++) {
        subArr.push(arr[i]);
        tempSum += arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (tempSum + arr[j] < sum) {
                tempSum += arr[j];
                subArr.push(arr[j]);
            } else if (tempSum + arr[j] === sum) {
                tempSum += arr[j];
                subArr.push(arr[j]);
                mainArr.push([...subArr]);
            } else {
                tempSum = 0;
                subArr = [];
                break;
            }
        }
    }
    return mainArr;
}

console.log(sumArr2(sum, arr));