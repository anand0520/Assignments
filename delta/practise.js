/***********************
 1️⃣ var, let, const Scope
************************/
function scopeExample() {
  var a = 10;
  let b = 20;
  const c = 30;

  if (true) {
    var a = 100;   
    let b = 200;   
    const c = 300; 
  }

  console.log("var a:", a); 
  console.log("let b:", b);
  console.log("const c:", c); 
}

scopeExample();


/*************************
 2️⃣ Fruits Array Example
**************************/
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}

console.log("Second Fruit:", getSecondFruit());


/*************************************
 3️⃣ Push & Pop Array Modification
**************************************/
function modifyArray(arr) {
  arr.push("New Element");
  arr.pop();
  return arr;
}

console.log("Modified Array:", modifyArray([1, 2, 3]));


/*************************
 4️⃣ Square Numbers (map)
**************************/
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log("Squared Numbers:", squareNumbers(numbers));


/********************************
 5️⃣ Filter Odd Numbers (filter)
*********************************/
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

console.log("Odd Numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));


/****************************
 6️⃣ Object & Greeting
*****************************/
const person = {
  name: "Anand",
  age: 21,
  occupation: "Student"
};

function greetPerson(person) {
  console.log(
    `Hello, my name is ${person.name}. I am ${person.age} years old and I work as a ${person.occupation}.`
  );
}

greetPerson(person);


/********************************
 7️⃣ Area of Rectangle
*********************************/
function calculateArea(rect) {
  return rect.width * rect.height;
}

console.log("Rectangle Area:", calculateArea({ width: 10, height: 5 }));


/*********************************
 8️⃣ Get Object Keys
**********************************/
function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log("Object Keys:", getObjectKeys({ a: 1, b: 2, c: 3 }));


/*********************************
 9️⃣ Merge Two Objects
**********************************/
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log("Merged Object:", mergeObjects({ a: 1 }, { b: 2 }));


/*********************************
 🔟 Sum of Array (reduce)
**********************************/
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log("Sum of Array:", sumArray([10, 20, 30, 40]));
