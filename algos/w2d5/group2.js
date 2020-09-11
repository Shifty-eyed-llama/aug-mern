//Group 2 = Yan Yee Kwok, ChrisHatfield, Joseph Sunderland,Daniel Matthew

// challenge #1

// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// unsorted, positive integers, no floats

// [5, 6, 6, 5]
// 10
// [0, 3]



// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(nums, target) {

    for (var i = 0; i < nums.length; i++) {

        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return ([i, j]);
            }
        }
    }
}
let myArr = [1, 4, 5, 2]
console.log(twoSums(myArr, 9));
let myArr2 = [4, 1, 4, 0, 2];
console.log(twoSums(myArr2, 2));


// function twoSums(nums, target) {
//     let i = 0;
//     for (var j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             return ([i, j]);
//         } else {
//             i++;
//         }
//     }
// }
// let myArr = [1, 4, 5, 2]
// console.log(twoSums(myArr, 9));
// let myArr2 = [4, 1, 4, 0, 2];
// console.log(twoSums(myArr2, 2));


// challenge #2

// https://www.codewars.com/kata/58f8b35fda19c0c79400020f

// allNonConsecutive(nums)

// Given a sorted array of positive ints, find all the non-consecutive integers
// A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

// The first element is never considered non-consecutive.

// Return an array of objects where each object contains the number itself
// and it's index.

// Input: [1,2,3,4,6,7,8,10]

// 6 and 10 are the only non-consecutive numbers

// Output: [
//  {i: 4, n:6},
//  {i: 7, n:10}
// ]

function allNonConsecutive(nums) {
    let output = [];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] !== 1) {
            output = [...output, { i: i, n: nums[i] }];
        }
    }
    return output;
}
let arr3 = [1, 2, 3, 4, 6, 7, 8, 10];
console.log(allNonConsecutive(arr3));

https: //developer.mozilla.org/en-US/
    // it  was hard to see but http://pythontutor.com/ is a step by step