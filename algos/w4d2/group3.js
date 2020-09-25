/* Group 3: Yan Yee Kwok(Beverly), James Hartung, Ryan, UmerMahmood */
/*
  https://leetcode.com/problems/backspace-string-compare/

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?


  Bonus: solve in O(n) time

  Examples:
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



function sameInTextEdit(S, T) {
    let sOutput = [];
    let tOutput = [];
    for (var i = 0; i < S.length; i++) {
        if (S[i] !== "#") {
            sOutput.push(S[i]);
        } else {
            sOutput.pop();
        }
    }
    for (var j = 0; j < T.length; j++) {
        if (T[j] !== "#") {
            tOutput.push(T[j]);
        }
        if (T[j] === '#') {
            tOutput.pop();
        }
    }
    console.log("This is T", sOutput);
    console.log("This is S", sOutput);
    if (sOutput.join("") == tOutput.join("")) {
        return true;
    }
    return false;
}

let S = "ab#c";
let T = "ad#c";
console.log(sameInTextEdit(S, T));



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

function areCharactersSame(str1, str2) {
    let obj1 = {};
    let obj2 = {};
    if (str1.length > str2.length) {
        return false;
    }
    for (var i = 0; i < str1.length; i++) {
        if (obj1.hasOwnProperty(str1[i])) {
            obj1.str1[i].value++;
        } else {
            obj1.str[i] == 1;
        }
    }
    for (var j = 0; j < str2.length; j++) {
        if (obj2.hasOwnProperty(str2[j])) {
            obj2.str2[j].value++;
        } else {
            obj1.str[j] == 1;
        }
    }
    if (obj1 == obj2) {
        return true;
    }
    return false
}