//Bryan Birch, Daniel Matthew, Jennifer Joy, Ryan

// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.

function stringEncode(str) {}

// Working Code
function stringEncode(str) {
    let count = 1
    let arr = [str.charAt(0)]

    if (str.length < 2) {
        return str
    }
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i - 1) != str.charAt(i)) {
            arr.push(count)
            arr.push(str.charAt(i))
            count = 0
            count++
        } else if (str.charAt(i - 1) == str.charAt(i)) {
            count++
        }
    }
    arr.push(count)
    if (str.length == arr.length) {
        return str
    } else {
        return arr.join("")
    }
}


function stringEncode(str) {
    let count = 1;
    let front = 0;
    let run = 1;
    let newStr = "";
    while (front < str.length) {
        count = 1;
        newStr += str[front];
        while (str[front] == str[run]) {
            run++;
            count++;
        }
        newStr += count;
        front = run;
        run = front + 1;
    }
    return newStr;
}


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

}

function stringDecode(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != NaN) {
            for (let j = 0; j < str[i]; j++) {
                newStr += str[i - 1]
            }
        }
    }
    return newStr
}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";