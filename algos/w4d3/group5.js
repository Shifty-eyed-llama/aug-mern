/*
James, Leslie, Robert
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods besides simple ones like .push
*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

function addHonorific(honorific, names) {
    let newNames = [];
    for (var i = 0; i < names.length; i++) {
        let fullName = names[i].split(", ");
        newNames.push(honorific + " " + fullName[1] + " " + fullName[0])
    }
    return newNames;
}

console.log(addHonorific("Sir", ["John, Elton", "Mckellen, Ian"]))

function addHonorificAlt(honorific, names) {
    let newNames = [];
    for (var i = 0; i < names.length; i++) {
        let fullName = names[i];
        let commaIndex = fullName.indexOf(",");
        let newFullName = fullName.substring(commaIndex + 2, names[i].length) + " " + fullName.substring(0, commaIndex);
        newNames.push(honorific + " " + newFullName);
    }
    return newNames;
}

console.log(addHonorificAlt("Sir", ["John, Elton", "Mckellen, Ian", "Barkley, Charles"]))


// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

// str = "abc"
// => 3

// str = "bbb"
// => 1

// str = "cabc"
// => 3

// str = "aabbc"
// => 2


// str = "dvadf"
// => 4

// O(n)

function longestSubString(str) {
    let count = 1;
    let maxCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (i !== str.length - 1 && str[i] !== str[i + 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
}

console.log(longestSubString("aaaadef"))