let marks=70;
let bonus=6; // for assigment or internal mark

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


