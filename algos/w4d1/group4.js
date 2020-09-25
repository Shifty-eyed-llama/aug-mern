// Chris Hatfield

// "Possible Palindrome"

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


function canStrBecomePalindrome(str) {
    // set variable for an empty object;
    let isPalindrome = {};

    // set for loop over string
    for (let letter of str) {
        // if it sees letter for first time:
        if (!isPalindrome.hasOwnProperty([letter])) {
            // put key in object with value of 1
            isPalindrome[letter] = 1;
        }
        // else it sees key again:
        else {
            // update key value to have +1
            isPalindrome[letter]++;
        }
    }
    // iterate over object to determine if all values:
    for (let letter in isPalindrome) {
        // if all the key values are 2 it can be a palindrome

        // else if all the key values are 2 and only 1 key value is odd, it can be palindrome
        // else
        // return false
    }
}

console.log(canStrBecomePalindrome("baba"));

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
// }erefo!s
};