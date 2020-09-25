// Group 6: Daniel Havens, Beth Johnson, Robert Orellana
// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "baba" => true
// "aabb"


// "bcda" => false
// "abcd"
//Pseudo Code
//Iterate through the string and create a dictionary to count the number of each character in the string
//If there is an even number of characters for every character in the string, it can be arranged as a palindrome
//Return true if all characters are even.

function canStrBecomePalindrome(str) {
    const charDict = {}
    for (char of str) {
        if (char in charDict) {
            charDict[char] += 1;
        } else {
            charDict[char] = 1;
        }

    }
}
console.log(charDict)


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  "Drop It"

  Input: arr, callback that returns true or false
  Output: arr (with elements removed)

  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.

  Return an empty array if the callback never returns true
*/

// dropIt(arr, callback){
//     if(callback(arr[0])){
//         do what?
//     }
// };arth