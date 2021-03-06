Jennifer, Robert, Hana, Matthew // challenge #1


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

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSums(nums, target) {
    for (let i = 0; i < nums.length, i++) {
        for (j = 1; j < nums.length - 1, j++) {
            if (nums[i] + num[i] != target) {
                j++;
            } else
            //return a[] and a[j];
        }
    }

    // iterate through the array

}


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
//  {i: 8, n:10}
// ]

function allNonConsecutive(nums) {

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let newarr = [];
        if (nums[i - 1] + 1 == nums[j]) {
            i++;
        } else {
            let obj = {
                i: i,
                n: nums[i]
            }
            console.log(obj);
            newarr.push(obj);

        }
        return newarr;
    }
}
console.log(newarr); // challenge #1

function allNonConsecutive(nums) {
    const output = [];

    for (let i = 1; i < nums.length; ++i) {
        const prevNum = nums[i - 1];
        const currNum = nums[i];

        if (prevNum + 1 !== currNum) {
            output.push({
                i: i,
                n: currNum
            });
        }
    }
    return output;
}

// his solutions down here


function twoSums(nums, target) {
    let idx1 = 0;
    let idx2 = 1;
    const output = [];
    while (idx1 !== nums.length) {
        if (nums[idx1] + nums[idx2] === target) {
            output.push(idx1);
            output.push(idx2);
            return output;
        } else if (idx2 === nums.length) {
            idx1++;
            idx2 = idx1 + 1;
        } else {
            idx2++;
        }
    }
}

function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let missingNumber = target - nums[i];
        if (map.hasOwnProperty(missingNumber)) {
            return [map[missingNumber], i]
        }
        map[missingNumber] = i;
    }
    return []
}