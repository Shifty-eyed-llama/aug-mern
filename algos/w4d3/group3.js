///Christian Land
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


function honorifics(honorific, names) {
    const output = [];
    for (let name of names) {
        let firstName = '';
        let lastName = '';
        // let chars = [];
        for (let i = 0; i < name.length; i++) {
            if (name[i] === ',') {
                // let lastName = chars.join('');
                // chars = [];
                lastName = name.slice(0, i);
            } else if (name[i] === ' ') {
                //let firstName = chars.join(' ');
                firstName = name.slice(i + 1);
            } else {
                chars.push(name[i]);
            }
        }
        output.push(`${honorific} ${firstName} ${lastName}`);
    }
    return output;
}


// new array

// new string
// string += honorific += arr[i]

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

// O(n) str

function longestStr(str) {
    if (str.length < 2) {
        return str.length;
    }
    let charSet = new Set(str[0]);
    let maxLen = 0;
    let start = 0;
    let end = 1;
    while (start < end && start < str.length) {
        if (end === str.length) {
            start++;
            end = start + 1;
            if (charSet.size > maxLen) {
                maxLen = charSet.size;
            };
            charSet.clear();
        } else if (charSet.has(str[end])) {
            console.log(str);
            start++;
            end = start + 1;
            if (charSet.size > maxLen) {
                maxLen = charSet.size;
            }
            charSet.clear();
        } else {
            charSet.add(str[end]);
            end++;
        }
    }
    return maxLen;
}
console.log(longestStr("abc"));


function longestStr(str) {
if (str.length < 2) {
    return str.length;
}
let charSet = new Set(str[0]);
let maxLen = 0;
let start = 0;
let end = 1;
while (start < str.length) {

  if(end >= str.length){
    console.log("end > len")
    start++;
    end = start + 1;
    if (charSet.size > maxLen) {
      maxLen = charSet.size;
    };
    charSet = new Set(str[start]);
  }

    if (charSet.has(str[end])) {
        start++;
        end = start + 1;
        if (charSet.size > maxLen) {
            maxLen = charSet.size;
        }
        charSet = new Set(str[start]);
    } else {
        charSet.add(str[end]);
        end++;
    }
}
return maxLen;
}
console.log(longestStr("dvadf"));