// callbacks

function doStuff(){
    return 10;
}

var doThings = function(){ // <- anonymous function
    return 15;
}

var y = [function(){return 22}];

y[0]()

var example = function(dostuff){ // a callback is an anonymous function passed into another function

    return dostuff();
}

example(function(){return 22});
example(function(){return 32});

const numbers = [1, 2, 3];

function doubleNumbers(nums){
    const newNumbers = [];
    for(let i=0; i<nums.length; i++){
        newNumbers.push(nums[i] * 2);
    }

    return newNumbers;
}

function tripleNumbers(nums){
    const newNumbers = [];
    for(let i=0; i<nums.length; i++){
        newNumbers.push(nums[i] * 3);
    }

    return newNumbers;
}
const doubledNumbers = doubleNumbers(numbers);

// console.log(doubledNumbers)


const doubleNumber = (number) => number > 3 ? number * 3 : number
const tripleNumber = (number) => number * 3;
const newNumbers = numbers.map(tripleNumber);
console.log(newNumbers);


console.log(numbers.map((number)=> number * 5))
// functional programming


// .map


// .filter

const more_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 22];
function getEvens(nums){
    const evens = [];
    for(let i=0; i<nums.length; i++){
       if(nums[i] % 2 === 0){
           evens.push(nums[i]);
       }
    }

    return evens;
}

console.log(getEvens(more_numbers));

console.log(more_numbers.filter((num) => num % 2 === 0))


console.log(more_numbers.reduce((sum, number) => number + sum));


const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

console.log(pokemon.filter(object => object.types.length > 1 ))

console.log(pokemon.filter(object => object.types.includes("normal")).length)

var flyingSecondTypes = pokemon.filter(object => object.types[1] === "flying");
console.log(flyingSecondTypes.map(object => ({name: object.name, first_type: object.types[0]})));