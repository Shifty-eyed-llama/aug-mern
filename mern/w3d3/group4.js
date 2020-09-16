//group4: Yan Yee Kwok, Ryan Marean, Jennifer Joy.
//  Given an array of objects representing people
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

const naughtyList = (people = [], habit) => {
    let output = [];
    if (!people) {
        return output;
    }
    for (let i = 0; i < people.length; i++)
        for (let j = 0; j < people[i].habits.length; j++) {
            if (habit === people[i].habits[j]) {
                output.push(people[i].firstName, people[i].lastName);
            }
        }
    return output;
}

console.log(naughtyList(people, "doesn't wash dishes"));
console.log(naughtyList(people, "shows up late"));
console.log(naughtyList(people, "vapes too much"));




const naughtyList = (people = [], habit) => {
    let output = [];
    if (!people) {
        return output;
    }
    for (let i = 0; i < people.length; i++) {
        output.push(people[i].filter(habits => habits.includes(habit)));

    }
    return output;
}

console.log(naughtyList(people, "doesn't wash dishes"));
console.log(naughtyList(people, "shows up late"));
console.log(naughtyList(people, "vapes too much"));


// const naughtyList = people.habits.filter(habit => habit.includes("doesn't wash dishes"));
// console.log(naughtyList);people[i].habits.filter(habits => habits.includes(habit));a