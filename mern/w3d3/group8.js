// //Group Participants - umer Mahmood,Chris Hatfield,Justin Clayton, Clint

// Given an array of objects representing people
// and a string representing a bad habit
// return a "santasNaughtyList" containing the first and last names of all the people
// who have the matching bad habit so that santa knows how much coal he needs.

// you can solve this iteratively or using functional programming.
// if you finish early, try implementing it both ways!

const people = [{
        firstName: "FN1",
        lastName: "LN1",
        habits: [
            "doesn't wash dishes",
            "falls asleep in lecture",
            "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

// Input: people, "doesn't wash dishes"
// Output: ["FN1 LN1", "FN3 LN3"]

// Input: people, "shows up late"
// Output: ["FN2 LN2", "FN3 LN3"]

// Input: students, "vapes too much"
// Output: []

const naughtyList = (people, badHabit) => {
    //declare output array
    output = [];
    //loop through people
    for (obj of people) {
        if (obj.hasOwnProperty("habits")) {
            // loop through people habits
            for (habit of obj["habits"]) {
                //if habit is in habits add "firstName lastName" to output
                if (habit === badHabit) {
                    output.push(`${obj['firstName']} ${obj['lastName']}`);
                    break;
                }

            }
        }
    }
    // return output
    return output;
}

console.log(naughtyList(people, "doesn't wash dishes"));
console.log(naughtyList(people, "shows up late"));
console.log(naughtyList(people, "falls asleep in lecture"));

function naughtyList2(people, badHabit) {
    return people
        .filter(person => {
            return person.habits.some(habit => habit === badHabit);
        })
        .map(naughty => {
            return `${naughty.firstName} ${naughty.lastName}`;
        });
}

console.log(naughtyList2(people, "doesn't wash dishes"));
console.log(naughtyList2(people, "shows up late"));
console.log(naughtyList2(people, "falls asleep in lecture"));