// Names: Justin, Leslie, Jennifer

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
// str.replace("str[i-1]#", "")
// let processedStr1 = str1.replace(/.#/g, '');

function hashReplace(S, T) {
  var count = 0;
  var strS = "";
  var strT = "";
  for(var i = 0; i < S.length; i++){
    if(S[i]=="#"){
      count ++;

    }
    else{
      strS = strS + S[i];
    }
  }
}


*/
function processBackspace(S, T) {
    let processedS = processString(S);
    let processedT = processString(T);
    return processedS === processedT;
}

// str = '#ab##c'
function processString(str) {
    let processedStr = [];
    for (let char of str) {
        if (char === '#') {
            processedStr.pop();
        } else {
            processedStr.push(char)
        }
    }

    return processedStr.join('');
}


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

function buildNewString(S, T) {
    var dict = {};
    var s = S.toLowerCase();
    var t = T.toLowerCase();
    for (let char of s) {
        if (!dict.hasOwnProperty(char)) {
            dict[char] = 1;
        } else {
            dict[char]++;
        }
    }
    for (let char of t) {
      if(dict.hasOwnProperty(char)){
        dict[char]--;
      }
    }
    return true


}