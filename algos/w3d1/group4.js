// Yunzhuo Zhou, Clint, Hyunsoo

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



const findObjectsFilter = (searchFor, items) => {
    return items.filter(
        item => (
            item.name == searchFor.name &&
            item.age == searchFor.age &&
            item.admin == searchFor.admin
        )
    )
}
console.log(findObjectsFilter(searchFor, items))






const fireType = pokémon.filter(p => p.types.includes("fire"));
console.log(fireType);
// Object.hasOwnProperty
// Object.keys(instance)
// functional (.map .filter)



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


const findByIdAndUpdate = (id, updateObject, arr) => {
    let filtered = arr.filter(
        student => (
            student.id == updateObject.id
        )
    )
    return filtered[0].assign

}


//object.assign(target,source)

//db.students.update({}, {$set:{number_of_belts: 0}}, {multi: true})

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
// x functional (.map, .filter)it9item.name == searchFor.name item.age ==a