//Christian Land,Yunzhuo Zhuo, Hyunsoo
//Given an array of objects representing people
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

const naughtyList = (people, habit) => {
    const matches = [];
    for (let person of people) {
        if (person.hasOwnProperty('habits')) {
            for (let hab of person['habits']) {
                if (hab === habit) {
                    matches.push(person.firstName + " " + person.lastName);
                }
            }
        }
    }
    return matches;
}
console.log(naughtyList(people, "shows up late"));

const naughtyList2 = (people, habit) => {
    return people.filter(person => person.habits.includes(habit)).map(person => `${person.firstName} ${person.lastName}`);
}
console.log(naughtyList2(people, "shows up late"));

const naughtyList3 = (people, habit) => {
    return people.reduce((filtered, person) => {
        person.habits.includes(habit) && filtered.push(`${person.firstName} ${person.lastName}`);
        return filtered;
    }, []);
}
console.log(naughtyList3(people, "shows up late"));