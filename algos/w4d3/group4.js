//Ryan, Mattew Merrill, Hyunsoo
/*
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

// .split based on comma
// .concat the results

function honorizer(honorific, names) {
    let honorizedNames = []
    for (let i = 0; i < names.length; i++) {
        let nameArr = names[i].split(", ");
        let tempString = honorific.concat(' ', nameArr[1], ' ', nameArr[0]);
        honorizedNames.push(tempString);
    }
    return honorizedNames;
}

console.log(honorizer(honorific1, names1));
console.log(honorizer(honorific2, names2));
console.log(honorizer(honorific3, names3));




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

function lengthLongSubStr(str) {
    let maxLen = 0;
    let subStr = ""
    for (let i = 0; i < str.length; i++) {
        subStr = "";
        if (str.length - 1 < maxLen) {
            return maxLen;
        }

        for (let j = i; j < str.length; j++) {
            if (subStr.includes(str[j])) {
                break;
            } else {
                subStr += str[j]
            }
        }
        if (subStr.length > maxLen) {
            maxLen = subStr.length;
        }
    }
    return maxLen;
}