group: umer mahmood, christian land, ryan marean

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

// Validate that one of two conditions is met:
// 1) either all characters have an even count or,
// 2) all characters have an even count with no more than one character having an odd count


function canStrBecomePalindrome(str) {
    let counts = {};
    for (let char of str) {
        if (char in counts) {
            counts[char] += 1;
        } else {
            counts[char] = 1;
        }
    }
    for (let count in counts) {
        if (counts[count] % 2 === 1) {
            return false;
        }
    }
    return true;
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
// }   f


function dropIt(arr, callback) {

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr;
        } else {
            arr.splice(0, 1);
            i--;
        }
    }
    return arr;
}

console.log(dropIt([1, 3, 5, 7], num => num % 2 === 0))

// function dropItFunc(arr, callback) {
//     arr.filter(i => arr[i] === callback(arr[i]));

//     if (arr.every((num, i) => callback(num) === false && arr.splice(i, 1)) === false) {
//         return arr;
//     }
// }

const dropIt = (arr, callback) => {
  const copy = arr.slice();
  return !arr.every(num => !callback(num) && copy.shift()) ? copy : [];
}

console.log(dropIt([1, 3, 5, 2], num => num % 2 === 0))