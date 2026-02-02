// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
//function xi() {
//   for (var i = 1; i <= 5; i++) {
//     function close(b) {
//       setTimeout(() => {
//         console.log(b);
//       }, b * 1000);
//     }
//     close(i);
//   }
//   console.log("Nmamaste Javascript");
// }
// xi();

// function run(n) {
//   for (var i = 1; i < n; i++) {
//     console.log(i);
//   }
// }
// run(5);

// function greet(name) {
//   setTimeout(() => {
//     console.log("Hello", name);
//   }, 1000);
// }
// greet("Shahijahan");
// //clearTimeout(greet, i);

// function createUser(username) {
//   return {
//     getName() {
//       return username;
//     },
//   };
// }

// let nam = createUser("Shahijahan");
// console.log(nam.getName());

// const x = setTimeout(() => {}, 1000);

// console.log("id", x);

// function outest() {
//   var a = 12;
//   function outer() {
//     function inner() {
//       console.log(a);
//     }
//     return inner;
//   }
//   // let a = 14;
//   return outer;
// }
// const out = outest();
// const inn = out();
// inn();
// console.log(a);

// let a = 1;
// var b = 2;
// const c = 3;

// {
//   const c = 3;
// }

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < cb.length; i++) {
    temp.push(cb[i] + 2);
  }
  return temp;
};

let arr = [1, 2, 3, 4, 5, 6];
// arr.sort((a, b) => b - a);
let output = arr.myMap(arr);
console.log("output : ", output);

let red = arr.map((num) => num + 2);
console.log(red);

//filter prolifrills
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let fil = arr.myFilter((num) => num > 3);
console.log(fil);

//map prolifrils
Array.prototype.myMap2 = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let mp2 = arr.myMap2((num) => {
  return num * 3;
});
console.log(mp2);

//prolifrils for reduce
Array.prototype.myRed = function (cb, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, init) : this[i];
  }
  return acc;
};

let man = arr.myRed((acc, num) => acc + num, 0);
console.log(man);
const arr2 = [2, 4, 6, 8];

arr2.forEach((element, i) => {
  arr2[i] = element * 2;
});

console.log(arr2);

let students = [
  { name: "shahijahan", marks: 80, ro: 2 },
  { name: "Rabia", marks: 72, ro: 3 },
  { name: "Danish", marks: 30, ro: 4 },
  { name: "Rehana", marks: 60, ro: 5 },
];

//return only details of those who scored more than 60 marks

let names = students
  .filter((stu) => stu.marks >= 60)
  .filter((st) => st.ro >= 3);
console.log(names);

//sum of marks of all the students .reduce
const marks = students.reduce((acc, st) => acc + st.marks, 0);
console.log(marks);

//return name only , marks > 60;
const namesOnly = students
  .filter((stud) => stud.marks >= 60)
  .map((s) => s.name);
console.log(namesOnly);

//return total marks who scored > 60 & those who scored less than 60 add +20 to them.

// let total = students.reduce((acc, stud) => {
//   if (stud.marks < 60) {
//     stud.marks += 20;
//   }
//   return acc + stud.marks;
// }, 0);
// console.log(total);

console.log(students);
const modifi = students
  .map((stud) => {
    if (stud.marks < 60) {
      stud.marks += 20;
    }
    return stud;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, sum) => acc + sum.marks, 0);

console.log(modifi);
