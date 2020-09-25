//group 6: Matthew Merrill, Chris Hatfield,
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

function stringCompare(stringOne, stringTwo) {

  let poundPosition = 0;

  for (let i = 0; i <= stringOne.length; i++) {
    console.log("Char: " + stringOne[i], "Index: " + i);
    if (stringOne[i] === "#") {
      stringOne.slice(i  -  1, i);
    }
  }
  console.log(stringOne);
}

stringCompare("ab#c", "ad#c");

//   The slice() Method

// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: the start position, and the end position (end not included).

// This example slices out a portion of a string from position 7 to position 12 (13-1):
// Example
// var str = "Apple, Banana, Kiwi";
// var res = str.slice(7, 13);

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