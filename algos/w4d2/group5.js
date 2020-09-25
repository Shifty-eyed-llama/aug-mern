/*
  https://leetcode.com/problems/backspace-string-compare/

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?


function backSpace(str){
  let copy = '';
  while(str.indexOf('#' != -1)){
    let back = str.indexOf('#');
    str.slice(back -1, back)
  }
  return str;
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/
// ** function ONE **
// take in a string
// loop the string
// if string[i] == '#'
// delete string[i-1]

// ** function TWO **
// run function one on each string
// compare each string


function backSpace(str) {
    let copy = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            copy.pop();
        } else {
            copy.push(str[i]);
        }
    }
    return copy.join('');
}

function compareStrings(s, t) {
    return backSpace(s) === backSpace(t);
}

console.log(compareStrings("a##c", "#a#c"))
    // console.log(compareStrings("ab#c", "ad#c"))


/*
    Given two strings,
    return true if the first string can be built from the letters in the 2nd string

    Ignore case


    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */

// function builtFromString(a, b) {
//     const aCounts = {};
//     const bCounts = {};
//     for (let char of a.toLowerCase()) {
//         if (char in aCounts) {
//             aCounts[char] += 1;
//         } else {
//             aCounts[char] = 1;
//         }
//     }
//     for (let char of b.toLowerCase()) {
//         if (char in bCounts) {
//             bCounts[char] += 1;
//         } else {
//             bCounts[char] = 1;
//         }
//     }
//     for (let count in aCounts) {
//         if (!(count in bCounts && bCounts[count] >= aCounts[count])) {
//             return false;
//         }
//     }
//     return true;
// }



function frequencies(str) {
    const strCounts = {};
    for (let char of str.toLowerCase()) {
        if (char in strCounts) {
            strCounts[char] += 1;
        } else {
            strCounts[char] = 1;
        }
    }
    return strCounts
}

function builtFromString(a, b) {
    const aCounts = frequencies(a);
    const bCounts = frequencies(b);
        for (let count in aCounts) {
            if (!(count in bCounts && bCounts[count] >= aCounts[count])) {
                return false;
            }
        }
    return true;
}


function builtFromString2(a,b){
  let copy = a.split('');
  for(let char of b){
    if(copy.includes(char)){
      copy.splice(copy.indexOf(char),1);
    }
  }
  return copy.length === 0;
}

console.log(builtFromString2("hello world","loeh wordl"))