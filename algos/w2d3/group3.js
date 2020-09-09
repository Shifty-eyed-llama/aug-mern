//Group: Yan Yee Kwok, Bryan Birch, Hana Luong, CLint

// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a value 1-255

// Find all the consecutive groups of integers that add up to the value k

// sum = 16
// arr = [2,5,3,6,7,0,0,23,10,10,55,6]

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

// your arr can be empty

function consecutiveSum(sum, arr) {

    let ourSum = arr[0];
    let output = [];
    let i = 0;
    let j = i + 1; //?
    for (i < arr.length, i++) {
        let group = [];
        for (j < arr.length - i, j++) {
            if (ourSum < sum) {
                ourSum = ourSum + arr[j];
                group.push(arr[j]);
            }
            if (ourSum == sum) {
                output.push(group);
                return output;
                //return group;
            }
        }
    }
}

// if sum < num keep looping,
//     if sum > num,
//     end first
// for loop
// if ===add numbers to new arret?releaseEvents., a[]


function consecutiveSum(num, arr) {
    let output = [];
    let sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = 0;
        let group = [];

        for (var j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum < num) {
                group.push(arr[j]);
            } else if (sum == num) { // while
                group.push(arr[j]);
                output.push([...group]);
            } else if (sum > num) {
                break;
            }
        }
    }
    return output;
}

//----------------------------

function sum(arr, left, right) {
    // right++ //bounds are inclusive
    let newSum = 0
    for (var i = left; i <= right; i++) {
        newSum += arr[i]
    }
    return newSum
}
// let arrT = [1,2,3,5]
// console.log(sum(arrT, 0,2))

function getArray(arr, left, right) {
    // right++ //bounds are inclusive
    let result = []
    for (var i = left; i <= right; i++) {
        result.push(arr[i])
    }
    return result
}
// let arrT = [1,2,3,5]
// console.log(getArray(arrT,2,3))

function consecutiveSums2(arr, k) {
    if (arr.length == 0) {
        return []
    }

    let result = []

    let left = 0
    let right = 0
    let end = false
        // for(var i = 0; i<arr.length; i++){
    while (end === false) {

        if (sum(arr, left, right) === k) {
            //add new array to result
            // console.log(left,right, ' = ', k)
            result.push(getArray(arr, left, right))
            right++
        } else if (sum(arr, left, right) < k) {
            right++

        } else {
            left++
        }

        if (right === arr.length) {
            end = true
        }
    }
    return result
}

let arrT2 = [0, 1, 2, 3, 3, 5, 0, 1, 2, 0]
console.log(consecutiveSums2(arrT2, 3))
let arrT3 = [4]
console.log(consecutiveSums2(arrT3, 4))