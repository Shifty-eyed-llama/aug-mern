James Hartung, Bryan Birch, Jennifer Joy
// Challenge #1: findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31,
    admin: true
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];


function findObjectsFilter(searchFor, items) {

    items.map(items.filter(item => item.firstName == "Bob"))
    items.map(items.filter(item => item.age == "31"))

}
console.log(SearchFor);

// document.write(seachFor)
//Object.keys(searchFor) = ["firstName", "age", "admin"]

console.log(items.filter(item => item.firstName == searchFor.firstName && item.age == searchFor.age))

console.log(items.filter(item => item.firstName == "Bob" && item.age == "31"))

console.log(items.filter(item => item.hasOwnProperty(Object.keys(searchFor)))) //  === []

<
script >
    var employees = [
        { name: "Tony Stark", department: "IT" },
        { name: "Peter Parker", department: "Pizza Delivery" },
        { name: "Bruce Wayne", department: "IT" },
        { name: "Clark Kent", department: "Editing" }
    ];

var output = employees.filter(employee => employee.department == "IT");
for (var i = 0; i < output.length; i++) {
    document.write("<h2>", output[i].name, "</h2>", "<br/>")
}; <
/script>

console.log(Object.keys(searchFor) == Object.keys(items[0]))

// items.filter(item => items.name == "Bob")

//items[0].keys = ["firstName", "lastName", "age"]
//const theItems = items[0].keys
//theItems.filter()

//-------------- Object.keys(searchFor)
//------------ Object.keys(items[0])

//items[0].hasOwnProperty('firstname') = true
//items[0].hasOwnProperty('admin') = false

// Object.hasOwnProperty()
// Object.keys(instance)
// functional (.map .filter)

//items[0].keys = ["firstName", "lastName", "age"]

// Challenge #2: findByIdAndUpdate(id, updateObject, arr)


//  Given an id, an object that has keys with corresponding updated values, and an array of objects

//  Find the object by "id" key that matches the given id value and then update that object's
//  keys with the provided new values.

// Return the updated object, or null if no object was found


const students = [{
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];


// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null


// Object.hasOwnProperty
// Object.keys(instance)
// x functional (.map, .filter)