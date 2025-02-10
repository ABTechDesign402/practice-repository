// Write a program that takes two numbers as input and prints their sum, difference, product, and quotient.

let a = parseFloat(prompt("enter a first number"));
let b = parseFloat(prompt("enter a second number"));

console.log("a+b = ", a+b);
console.log("a-b = ", a-b);
console.log("a*b = ", a*b);
console.log("a**b=", a**b);

if(b !== 0 ){
    console.log("a/b = ", a/b);
}else{
    console.log("number is not divided by 0")
}


// Write a program that checks if a number is positive, negative, or zero.

let num = parseFloat(prompt("Enter a number "));

if (num===0){
    console.log(num, "is zero")
}else if(num < 0){
    console.log( num, "is negative")
}else if (num > 0 ){
    console.log(num, "is positive")
};


// If we want to ensure the user enters a valid number, we can use a loop to keep asking for input until a valid number is provided:

let num;

while (true) {
    num = parseFloat(prompt("Enter a number"));

    if(!isNaN(num)){
        break
    }

    alert ("invalid input! please enters a valid number")
}

if(num===0){
    console.log ("numbe is zero")
}else if (num > 0){
    console.log("numbe is positive")
}else if (num < 0){
    console.log("number is negative")
};



// Write a program that checks if a number is even or odd.


let num = parseFloat(prompt("Enter a number"));

while (isNaN(num)){
    num= parseFloat(prompt("invalid input! please enter a valid number"));
}

 if(num%2===0){
    console.log(num,"is even")
}else{
    console.log(num, "is odd")
};


// Write a program that prints numbers from 1 to 10 using a for loop.

for (let i = 0; i <= 10 ; i++) {
    console.log(i);
    
}

// Write a program that prints numbers from 10 to 1 using a for loop.
for(let num=10; num >=1; num--){
    console.log(num)
};