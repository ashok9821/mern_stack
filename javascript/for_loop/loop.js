

function printMultiplicationTable(table){
for(let i=1; i<=10; i++){
    console.log(table + " x " + i + " = " + (table*i));
}
}
printMultiplicationTable(5);


function numberdivisible(num){
    for(let i=1; i<=num; i++){
    if( i%3==0 && i%5==0){
        console.log(i + " is divisible by both 3 and 5");
    } else {
        console.log(i + " is not divisible by both 3 and 5");
    }
}
}

numberdivisible(15);