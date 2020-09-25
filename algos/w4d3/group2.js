/* Group 2: Beverly Kwok, Chris Hatfield, Clint */
/*
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

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

function addingHonorific(honorific, nameArr) {
    let output = [];
    if (nameArr.length == 0) {
        return nameArr;
    }
    for (name of nameArr) {
        console.log(name)
        for (let char = name.length - 1; char >= 0; char--) {
            if (name[char] === ",") {
                //Do nothing
            } else {
                output.push(name[char]);
            }
        }
    }
    console.log(output)
}

addingHonorific("Mr.", ["John, Elton", "Mckellen, Ian"]);


let lastName = "";
let firstName = "";

while (name[char] !== ",") {
    lastName.push(name[char]);
}



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

// O(n)2,ame
["n", "o", "t", "l", "E", " ", "n", "h", "o", "J", …]