//Group 2: Yan Yee KWok(Beverly), Bryan Birch, Hector Eduardo
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
    let odds = 0;
    let letters = {};
    for (var i = 0; i < str.length; i++) {
        if (letters.hasOwnProperty(str[i])) {
            letters[str[i]] += 1;
        } else {
            letters[str[i]] = 1;
        }
    }
    for (key in letters) {
        if (letters[key] % 2 != 0) {
            odds++
        }
    }
    if (odds > 1) {
        return false
    }
    return true
}


//create object
// toss all letters in as keys
// keep track of how many of each letter
// if more than one letter has uneven amount, return false
// else return true


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
// }te


function dropIt(arr, callback) {
    let output = []
    while (arr.length > 0) {
        if (callback(arr[0])) {
            output.push(arr[0]);
            arr.shift()
        } else {
            arr.shift();
        }
    }
    return output
}


let test = [1, 2, 3, 4, 5, 6, 15, 77, 76]
let callback = (num) => num < 15

console.log(dropIt(test, callback))