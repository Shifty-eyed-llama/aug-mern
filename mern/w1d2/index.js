class Animal{
   constructor(name, color){
       this.name = name;
       this.color = color;
   }

   meow(){
       console.log("my name is " + this.name)
   }

   showStats(){
       console.log(`Name: ${this.name}, color: ${this.color}`);
   }
}

class Cat extends Animal {
    constructor(name, color, agitation){
        super(name, color);
        this.agitation = agitation;
    }
}



let object = {
    name: "brendan",
    email: "bstanton@gmail.com",
    likes: 255
}

for(let value of Object.keys(object)){
    console.log(object[value]);
}

// name -> hashing function -> 19212736182
// hash table : [....19212736182, 19212736183: "brendan", 19212736184... ]


let x = {
    name: "brendan",
    email: "b@s.com",
}

let item = {
    desc: "clean the kitchen",
    active: true
}



let y = x;

// shallow copy vs
// javascript







