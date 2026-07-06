debugger;
// x=5;
// console.log(`Value of x is ${x}`);

// var x=10;
// console.log(`Value of x is ${x}`);


console.log("Global Execution Context starts");

var globalVar = "I am a global variable";

console.log(globalVar);
console.log(globalFunction());
globalFunction();

console.log("Global Execution Context ends");

var globalFunction = function() {
    console.log("Inside global function");
};

