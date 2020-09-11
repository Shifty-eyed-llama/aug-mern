// challenge #1
Hyunsoo, Daniel H, Ryan, Yunzhuo Zhou
// https://leetcode.com/problems/two-sum/

// twoSums(nums, target)

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// unsorted, positive integers, no floats

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// function twoSums(nums, target) {
//     var newArr = [];
//     for (var i = 0; i < nums.length; i++) {
//         if (target - nums[i] == nums[i + 1]) {
//             newArr.push(i);
//             newArr.push(i + 1);
//         }
//     }
//     return newArr;

// }
// console.log(twoSums([2, 7, 11, 15], 9))

function twoSums(nums, target) {
    var newArr = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (target - nums[i] == nums[j]) {
                newArr.push(i);
                newArr.push(j);
            }
        }
    }
    return newArr;
}
console.log(twoSums([2, 5, 7, 11, 15], 9))

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
//if(arr[i] + 1 != arr[i+1])
function allNonConsecutive(nums) {
    //let notConsNums = {};
    let newNumsArr = [];
    for (var j = 0; j < nums.length - 1; j++) {
        if (nums[j] + 1 != nums[j + 1]) {
            //notConsNums.i = j + 1;
            //notConsNums.n = nums[j + 1];
            newNumsArr.push({
                "i": j + 1,
                "n": nums[j + 1]
            });
        }



        // notConsNums = i = j, n = nums[j]
    }
    return newNumsArr;



}
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]))