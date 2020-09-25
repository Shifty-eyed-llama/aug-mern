// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// If final result is not shorter (such as "bb" => "b2" ),  //abb  a1b2  aabbcc
// return the original string.

function stringEncode(str) {
    let newStr = "";
    let count = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        } else {
            newStr += str[i] + count;
            count = 1;
        }
    }
    if (newStr.length < str.length) {
        return newStr;
    }
    return str;
}


const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

console.log(stringEncode(str1))
console.log(stringEncode(str2))
console.log(stringEncode(str3))
console.log(stringEncode(str4))


// String Decode

// for loop to check that the character(s) next to the current index can be coerced to int

function stringDecode(str) {
    let newStr = "";
    let i = 0;
    while (i < str.length - 1) {
        let j = i + 1;
        let tempInt = "";
        while (j < str.length) {
            if (parseInt(str[j]) !== NaN) {
                tempInt += str[j];
                j++;
            } else {
                break;
            }
        }
        newStr += str[i].repeat(parseInt(tempInt));
        i += tempInt.length + 1;
    }
    return newStr;
}

const str1 = "a35b2c1d3";
const expected1 = "aaabbcddd";

console.log(stringDecode(str1));
// tempInt = "35"