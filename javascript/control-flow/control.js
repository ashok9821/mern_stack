let num=10;

function checkEven(num){
    if(num % 2 === 0){
        console.log(num + " is even");
    }
    else{
        console.log(num + " is odd");
    }
}

checkEven(num);


function checkIsAdmin(value){
    if(value === "admin"){

        console.log("User is admin");
    }
    else{
        console.log("User is not admin");
    }
}

checkIsAdmin("admin");

let age=19;
let haslicense=true;

function checkEligibility(age, haslicense){
    if(age >= 18 && haslicense){
        console.log("You are eligible to drive");
    }
    else{
        console.log("You are not eligible to drive");
    }
}