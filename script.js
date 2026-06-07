// // Even or odd
// const oe = (num) => {
//     if (num % 2 == 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(oe(3));

//Result evlauator
// const findMax = (num1, num2, num3) => {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// console.log(findMax(10, 25, 15));

//accumulator
// function sumToN(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total = total + i;
//     }
//     return total;
// }

//multiplication table
// function printTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }

//digit counter
// function countDigits(num) {
//     if (num === 0) {
//         return 1;
//     }
//     let count = 0;
//     while (num > 0) {
//         count++;
//         num = Math.floor(num / 10);
//     }
//     return count;
// }

//num reverser
// function reverseNumber(num) {
//     let reversed = 0;
//     while (num > 0) {
//         let lastDigit = num % 10;
//         reversed = (reversed * 10) + lastDigit;
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// }

//Factorial
// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(5));

//prime validator
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(7));