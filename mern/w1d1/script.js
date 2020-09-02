var person = {
    name: "Joe",
    age: 55,
    email: "joe@gmail.com",
    favorite_colors: ["blue", "pink"]
}

var { name, age, favorite_colors: [colorA, colorB] } = person;

function returnDogs(){
    return ["Scottie Dog", "Golden Retriever", "Pug"];
}

var [dog1, dog2, dog3] = returnDogs();

console.log(`my name is ${name} and i am ${age} years old, and my favorite colors are ${colorA} and ${colorB}`);


const colors = ['red', 'blue', 'green', 'orange'];
const colorsCopy = [...colors, 'magenta'];
console.log(colorsCopy);
console.log(colors);

const newPerson = {...person};
newPerson.name = "Beth";
newPerson.favorite_colors.push("purple");
console.log(newPerson);
console.log(person);



