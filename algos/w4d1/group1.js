//Names: Jennifer, Anthony, Justin, Ryan

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

}

function canStrBecomePalindrome(str) {
    let counts = {};
    let numOddCounts = 0;

    // Get count of each char occurrence in string
    for (let letter of str) {
        counts[letter] = (counts.hasOwnProperty(letter)) ? counts[letter] + 1 : 1;
    }

    // Get the number of odd total occurrences of chars
    for (let count of Object.values(counts)) {
        if (count % 2 === 1) {
            numOddCounts++;
        }
    }

    // 2 condtions to be able to be a palindrome:
    //  1. can only have up to 1 odd total occurrence of chars
    //  2. sum of length and odd count must be even
    // explanation of point 2
    // possible palindrome only if length is even and count of odds is 0 (sum even)
    // or length is odd and count of odds is 1 (sum even)
    if (numOddCounts <= 1 && ((numOddCounts + str.length) % 2 === 0)) {
        return true;
    }
    return false;
}

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
// }

function dropIt(arr, callback) {
    const newArr = [...arr];
    while (!callback(newArr[0]) && newArr.length > 0) {
        newArr.shift();
    }
    return newArr;
}