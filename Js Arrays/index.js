console.log("Hello Js Arrays");

// Array is a  special variable  which can hold more than one value

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta"];
console.log(cities);

let city1 = "Karachi";
let city2 = "Lahore";
let city3 = "Islamabad";
console.log(city1, city2, city3);

// You can also create an array, and then provide the elements
let cars = [];
cars[0] = "Saab";
cars[1] = "Audi";
cars[2] = "Civic";
console.log(cars);

let array_name = [1, 2, 3, 4, 5];
console.log(array_name);

let new_array = new Array(1, 2, 3, 4, 5);
console.log(new_array);

// How access the array
const fruits = ["Apple", "Banana", "Carrot"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Note: Array indexes start with 0
// [0] is the first element. [1] is the second element.

// Changing An Array Element
fruits[1] = "Grapes";
console.log(fruits);

let countries = ["China", "Pakistan", "India", "South Afriaca"];
console.log(countries.length);

console.log(typeof countries);

countries.toString();
console.log(typeof countries);

// arrayname.length   Returns the number of elements
// arrayname.sort()   Sorts the array

let person = [];
person[0] = "Sohail";
person[1] = "Ali";
person[2] = "Ayan";
// person.length
console.log(person.length);
console.log(person[0]);

let names = [];
names["firstname"] = "Sohail";
names["lastnames"] = "Shoukat";
// names.length
// console.log(names[firstname]);

var points = [];
var points = new Array(40, 100, 50);
console.log(points);
var points = new Array(40, 100);
console.log(points);
var points = new Array(40);
console.log(points);
var points = [40];
console.log(points);
