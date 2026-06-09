// 1.looping through an array
// const num = [10, 20, 30, 40];
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

//for Each
// let num = [10, 20, 30, 40];
// num.forEach(num => {
//   console.log(num);
// });

//for of
// const num = [10, 20, 30, 40];
// for (const i of num) {
//   console.log(i);
// }

// for in
// const num = [10, 20, 30, 40];
// for (const i in num) {
//   console.log(num[i]);
// }

// Loop Through an Object

// const student = {
//   name: "Bala",
//   age: 21,
//   grade: "A"
// }; 

// for (const i in student) {
//   console.log(i,student[i]);
// }

// using map()
// const Marks = [50, 60, 70, 80];
// const reducedMarks = Marks.map(i => i - 10);
// console.log(reducedMarks); 


//Using filter()
// const values = [5, 12, 8, 25, 3, 15];
// const val = values.filter(num => num > 10);
// console.log(val); 


// Using reduce()
// const num = [5, 10, 15, 20];
// const totalSum = num.reduce((sum, num) => sum + num, 0);