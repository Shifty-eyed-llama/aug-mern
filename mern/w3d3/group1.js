// group 1.) Bryan, Robert, Matthew
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


function NaughtyList(people, habit) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people[i].habits.length; j++) {
            if (people[i].habits[j] === habit) {
                result.push
            }
        }
    }
}


function naughtyFunc(people, habit) {
    let output = []
    people.map((person) => person.habits.includes(habit) ? output.push(person.firstName, person.lastName) : console.log("nope"))
    return output;
}

const naughtfunc = (people, habit) => people.filter((person) => person.habits.includes(habit)).map((person) => `${person.firstName} ${person.lastName}`)

// people.map((person) => console.log(person.lastName))

// console.log(people.map((person) => person.habits.includes("shows up late"))) // === [false, true, true, false]


const naughtyList = (people, habit) => {
    let output = [];
    for (var i = 0; i < people.length; i++) {

        if (people[i].habits.includes(habit)) {
            output.push([people[i].firstName, people[i].lastName])
        }
    }

    return output;
}
return output;
}