// Q1
const states = [
  "Andhra Pradesh","Bihar","Odisha","Uttar Pradesh","Kerala",
  "Maharashtra","Assam","Punjab","Rajasthan","Tamil Nadu"
];

const filteredStates = states.filter(
  state => !["A","E","I","O","U"].includes(state[0])
);
console.log(filteredStates);

// Q2
let str = "I love my India";
let reversedSentence = str.split(" ").reverse().join(" ");
console.log(reversedSentence);

// Q3
let string = "INDIA";
let arr = string.split("");
arr.splice(3, 0, "O","N","E","S");
console.log(arr.join(""));

// Q4
let longString = "JavaScript is a powerful programming language";
let vowels = 0;
let consonants = 0;

for (let ch of longString.toLowerCase()) {
  if ("aeiou".includes(ch)) vowels++;
  else if (ch >= "a" && ch <= "z") consonants++;
}
console.log("Vowels:", vowels, "Consonants:", consonants);

// Q5
function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}
console.log(correctfn("I love Javscript", "Javscript", "JavaScript"));

// Q6
const inputArr = [1,2,3,9,10,7,5,4,3];
const resultArr = inputArr.filter(num => num > 5);
console.log(resultArr);

// Q7
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] }
];

const averages = students.map(student => {
  const avg =
    student.scores.reduce((a,b) => a + b, 0) / student.scores.length;
  return { name: student.name, average: avg };
});
console.log(averages);

// Q8
function repeatedSum(num) {
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((a,b) => a + Number(b), 0);
  }
  return num;
}
console.log(repeatedSum(456));

// Q9
function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log(countWords("JavaScript is very easy to learn"));

// Q10
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

// Q11
const studentsData = [
  {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
  },
  {
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
  },
  {
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
  }
];

const averageResult = studentsData.map(studentObj => {
  const key = Object.keys(studentObj)[0];
  const marks = Object.values(studentObj[key]);
  const avg = marks.reduce((a,b) => a + b, 0) / marks.length;
  return { [key]: { average: avg } };
});
console.log(averageResult);
