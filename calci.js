let n1=3;
let n2=0;

let operator="/";

if (operator ==="+") {

    console.log(n1+n2);
}
else if (operator ==="-") {

    console.log(n1-n2);
}
else if (operator ==="*") {

    console.log(n1*n2);
}
else if (operator ==="/") {
    
    if (n2 === 0) {
        console.log("n2 cannot be zero");
    }
    else {
        console.log(n1/n2);
    }
}
else{
    console.log("Invalid operator");
}
