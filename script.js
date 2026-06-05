// simple calculator
// let n2=0;

// let operator="/";

// if (operator ==="+") {

//     console.log(n1+n2);
// }
// else if (operat
// let n1=3;or ==="-") {

//     console.log(n1-n2);
// }
// else if (operator ==="*") {

//     console.log(n1*n2);
// }
// else if (operator ==="/") {
    
//     if (n2 === 0) {
//         console.log("n2 cannot be zero");
//     }
//     else {
//         console.log(n1/n2);
//     }
// }
// else{
//     console.log("Invalid operator");
// }

//Marks System
let marks=70;
let bonus=6; 

marks += bonus;

let Result = marks >= 50 ? "PASS" : "FAIL";

let grade;

if(marks>=90){
    grade="Grade A";
}
else if (marks>=70 && marks<=89){
    grade="Grade B";
}
else if (marks>=50 && marks<=69){
    grade="Grade C";
}
else {
    grade="Grade F"
}

let remark;
switch (grade){
    case "Grade A": 
        remark="Excellent!";
        break;
    case "Grade B":
        remark="Good";
        break;
    case "Grade C":
        remark="Average";
        break;
    case "Grade F":
        remark="Needs Improvement";
        break;
}
console.log("Marks:",marks);
console.log("Grade:",grade);
console.log("Result:",Result);
console.log("Remark:",remark);


