// "Possible Palindrome"
James, Leslie, Daniel
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
    let dict = {}

    if (str == "") {
        return false
    }

    if (str.length == 1) {
        return true
    }

    for (let char of str) {
        if (dict.hasOwnProperty(char)) {
            dict[char]++
        } else {
            dict[char] = 1
        }
    }

    console.log(dict)

    let oddCount = 0;
    for (let freq in dict) {
        if (dict[freq] % 2 == 1) {
            oddCount++
        }
    }

    if (oddCount > 1) {
        return false
    }
    return true
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

function callback(number) {
    if (number < 2) {
        return true
    }
    return false
}

function dropIt(arr, callback) {
    let newArr = arr;
    for (let i = 0; i < newArr.length; i++) {
        if (callback(newArr[i])) {
            continue;
        } else {
            newArr.splice(i, 1);
        }
    }
    return newArr;
}

console.log(dropIt([1, 2, 3, 4], callback))