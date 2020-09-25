/* Daniel Havens, Michelly Richardson, Hector Eduardo, Daniel Matthew


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


function honorificName(prefix, names) {
    let arr = []
    let nameArr = []
    let name = []
    for (let i = 0; i < names.length; i++) {
        for (let char of names[i]) {
            if (char == ",") {
                continue;
            } else if (char == " " || i == (nameArr.length - 1)) {
                nameArr.unshift(name.join(''))
                name = []
            } else {
                name.push(char)
            }
        }
        nameArr.unshift(prefix)
        arr.push(nameArr.join(' '))
    }
    return arr;
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

// O(n)/