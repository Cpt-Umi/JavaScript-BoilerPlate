// Here's to You
/*  9-Sep-22
    JavaScript From FreeCodeCamp 
    https://www.youtube.com/watch?v=PkZNo7MFNFg */

var MyName = "Umair Khan"; // Global
let subName = "freeCodeCamp"; // Scope
const pi = 3.14; // Constant

// Basic Ass Variable Assignment
var A = "I Am A";
A = A + " String!";

console.log(A);

// Basic Arithematic With Variables
// % += -= *= /=
// \ to escape
// Hack: Intead of using escape characters use different types of quotations.
// += to concatenate strings.
// So far this course has been an introduction to programming using JavaScript.
// Length - 1 is the last index of a string.

function wordBlank(Noun) {
  var result = " ";
  result = Noun + " Has Come To.";
  return result;
}

console.log(wordBlank("V"));

// Javacript Arrays can have multiple DataTypes.
var Array = ["Kaptain", 21];
console.log(Array[0]);
console.log(Array);

var theArray = ["V", "Has"];
theArray.push("Come", "To");
console.log(theArray);

// pop() removes the last element of array.
// shift() pops first element.
// unshift() pushes to the first element of the array.

// Creating Functions.
function mrRobot() {
  console.log("Hello, Friend");
}

mrRobot();

// var determines scope of variable.
// Local and Global variable may share a same name. The Local variable takes precedence.

// Queue in JavaScript

function Queue(Arr, element) {
  Arr.push(element);
  return Arr.shift();
}

var nextOfKin = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(nextOfKin));
Queue(nextOfKin, 21);
console.log("After: " + JSON.stringify(nextOfKin));

// === does not type convert for comparison.
// Also !==

// If Else Statements
// Switch Case
// return a<b this statement returns true or false.
// As the logical operators return a Boolean value.

// Counting Cards.

var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var sitrep = "Hold";
  if (count > 0) {
    sitrep = "Bet";
  }
  return count + " " + sitrep;
}

cc(2);
cc(3);
cc(7);
cc("K");
console.log(cc(4));

// Objects in Javascript.

var Boy = {
  Name: "Timmy",
  Age: "Naive",
  MentalStatus: "Problematic",
};

console.log(Boy.MentalStatus);

// In bracket notations while accessing object values. You can also pass a variable with the value of an object property.
// May add more properties using dot or bracket notation.
// Delete keyword to remove property.
// Object can be used as a replacement for switch statement.
// object.hasownproperty to check for a property of an object.

// Storing Objects in an Array.
// Gets complicated here.

// Create an array
var myMusic = [
  // An object as an element
  {
    Artist: "Billy Joel",
    Title: "Piano Man",
    "Release Year": "1973",
    Format: ["CD", "8T", "LP"],
    Gold: "True",
  },

  // Second element is another element
  {
    Artist: "Cigarettes After Sex",
    Title: "Apocalypse",
    "Release Year": "2017",
    Format: ["CD", "8T", "LP"],
    Gold: "True",
  },
];

// Nested Objects.

var myStorage = {
  Car: {
    Inside: {
      "Glove box": "Maps",
      "Passenger seat": "Her",
    },
    Outside: {
      Trunk: "Jack",
    },
  },
};

console.log(myStorage.Car.Outside.Trunk); // Similarly you can also access objects in an array.

// Record Collection
// Updating Arrays and Objects.

// Setup
var collection = {
  2548: {
    Album: "Slippery When Wet",
    Artist: "Bon Jovi",
    Tracks: ["Let It Rock", "You Give Love A Bad Name"],
  },

  2468: {
    Album: "1999",
    Artist: "Prince",
    Tracks: ["1999", "Little Red Corvette"],
  },

  1245: {
    Artist: "Billy Joel",
    Tracks: [],
  },

  5439: {
    Album: "ABBA Gold",
  },
};

// Making a copy of a collection.
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Function to update collection.
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "Tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

// Testing
updateRecords("1245", "Tracks", "Uptown Girl");
console.log(updateRecords("5439", "Artist", "Abba"));

// While Loops.
var countArr = [];

var i = 1;
while (i < 6) {
  countArr.push(i);
  i++;
}

console.log(countArr);

// For Loop.
// Backwards using For Loop.
// For loops and Arrays.

// Nested Loops
function multiplyAll(Arr) {
  var product = 1;

  for (var i = 0; i < Arr.length; i++) {
    for (var j = 0; j < Arr[i].length; j++) {
      product *= Arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

// Do While Loop.
// Quick Task.
// Looking up objects in an array
// Math.Random() 0 or closest to 1 but never 1

function randomShit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomShit(1, 11));

// Convert to integer
// Important as javascript auto handles types?
// parseInt

// Ternary Operator.
// condition ? ifTrue : ifFalse;
// Nested Ternary Operations.
// "use strict;"

// Var, Let, and Const
// Onject.freeze(); freezes value.

// Anonymous functions. Has no name.
// CONST magic = () => new Date();
// Arrow functions.
// CONST wizardry = (parameters) => new Date();

// Arrow Functions in detail.

function increment(num, value = 1) {
  return num + value;
}

console.log(increment(5, 2));
console.log(increment(5));

// Rest Operator
// Pass in argument as (...args)
// Array.reduce
// Make a copy of arrays. arr2 = [...arr1]

// Destructuring Assignment.
// Assigning things from object.
// const {x : a, z : b} = object;
// Destructuring nested objects.
// [a, b] = [b, a] => Switching values.
// [, , ...arr] = Arr;
// Destructuring is useful.
// Pass only properties of an object as arguments

// Template Literals
// ` ` to efficiently print strings

// Template Literal Practice
const result = {
  success: ["I", "Am", "Inevitable"],
  failure: ["I", "Am", "Death"],
  skipped: ["I", "Am", "Groot"],
};

function makeList(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(`${arr[i]}`);
  }

  return resultArr;
}

console.log(makeList(result.success));

// Efficient code is King

const createPerson = (Name, Age, Gender) => ({ Name, Age, Gender });
console.log(createPerson("Umair", 20, "M"));

// More tips

// Accessing objects using getters and setters.
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this.temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this.temp;
    }

    set temperature(updatedTemp) {
      this.temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const Therma = new Thermostat(100);
let temp = Therma.temperature;
console.log(temp);

// Import and Export

// var input = document.getElementById("name");
// var errorMsg = document.getElementById("error");

// function clientDetail() {
//   if (input.value == "") {
//     errorMsg.innerHTML = "Incomplete Details";
//   } else {
//     console.log(input.value);
//   }
// }

// Meta Assignments

// Defensive Programming

function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, "5");
console.log("It still works");

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
  var condition2 = typeof match == "string" && match.length == 1; //if the match is a string and the length is equal to 1
  if (condition1 && condition2) {
    //if both condition matches
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //check if the character at this i position in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    //if the requirements don't match
    console.log("Please pass correct arguments to the function");
  }
}
letterFinder([], []);
letterFinder("cat", "c");

// Functional Task

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  let fontStyle = "color: tomato; font-size:50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(`message`, `style`);
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler(`'#1d5c63'`, `'#ede6db'`, `'40px'`, ` 'Congrats!'`);
celebrateStyler(`'birthday'`);

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
  consoleStyler(`'ef7c8e'`, `'fae8e0'`, `'30px'`, `'You made it!'`);
  celebrateStyler("champions");
}
// Call styleAndCelebrate
styleAndCelebrate();

// Dealing with Objects

// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = 10;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  var intern = new Worker("Bob", 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  var manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}
