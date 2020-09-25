r // String Encode
James / Chris / Matthew / Christian
    // You are given a string that may contain sequences of consecutive characters.
    // Create a function to shorten a string by including the character,
    // then the number of times it appears.

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.

function stringEncode(str) {
    let freq = {};
    let newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (freq.hasOwnProperty(str[i])) {
            freq[str[i]]++;
        } else {
            freq[str[i]] = 1;
        }
    }
    console.log(freq);
    return freq;
}

function stringEncode(str) {
    let count = 0;
    let newStr = str[0];

    for (let char of str) {
        if (newStr[newStr.length - 1] === char) {
            count++;
        } else if (newStr[newStr.length - 1] !== char && isNaN(parseInt(newStr[newStr.length]))) {
            newStr += count;
            count = 0;
        }
    }
    return newStr < str ? newStr : str;
}

stringEncode("aaaabbcdddbbb");

function stringEncode(str) {
    let count = 0;
    let newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (newStr[newStr.length] === str[i]) {
            count++;
        } else if (newStr[newStr.length - 1] !== str[i] && isNaN(parseInt(newStr[newStr.length]))) {
            newStr += count;
            count = 0;
        }
    }
    return newStr;
}
// "a500000000"

const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";


// String Decode

function stringDecode(str) {
    let newStr = "";
    let count = "";
    let letter = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            for (let j = 0; j < parseInt(count); j++) {
                newStr += letter;
            }
        }
    }
}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";\
[]

function stringEncode(str) {
    let count = 0;
    let newStr = str[0];

    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1 && newStr[newStr.length - 1] === str[i]) {
            count++;
            newStr += count;
        } else if (newStr[newStr.length - 1] === str[i]) {
            count++;
        } else {
            console.log(newStr, count, str[i])
            newStr += count;
            newStr += str[i];
            count = 1;
        }
    }
    return newStr.length < str.length ? newStr : str;
}

console.log(stringEncode("aaaabbcdddbbb"));
