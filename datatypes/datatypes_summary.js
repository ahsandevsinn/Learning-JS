// 7 Primitive Data Types 
// String, number , boolean , null , undefiend , symbol , bigint 

// Non-Primitive Data Type 
// array , objects , functions

const name = "Ahsan";
const number = 32323;
const isLoggedIN = true;
const city = null;
const state = undefined;
const uniqueName = Symbol(1123)
const id = BigInt(44343434334)

console.log(name);
console.log(number);
console.log(isLoggedIN);
console.log(city);
console.log(state);
console.log(uniqueName);
console.log(id);


const cities = ["Lahore", "Islamabad", "Quetta"]
console.log(cities);

const user = {
    "id" :43043940334,
    "name":"Ahsan"
}
console.log(user);


 let hello = function test() {
console.log("Hello World");
    
}

console.log(hello);
