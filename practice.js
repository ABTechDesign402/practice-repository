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




// Write a program that prints only the even numbers from 1 to 10.

for(let num=1; num<=10; num++){
    if(num%2===0){
        console.log(num)
    }
};



// Write a program that sum numbers from 1 to 10.

let sum = 0;
for(let num =1; num <= 10; num++){
    sum = sum+ num;

}
console.log("sum of numbers from 1 to 10 is", sum);



// Write a program that prints the multiplication table of a number (e.g., 5).

let num = 5;

for(let i =1; i <=10; i++){
    console.log(`${num} * ${i} = ${num*i}`);
};




// Write a program that takes two numbers as input (e.g., start and end) and prints all numbers in that range.
let starnum = 12; 
let endnum = 23;

for(let num=starnum ; num <= endnum; num++){
    console.log(num)
};




// Write a program that prints numbers from 1 to 10 but skips a specific number (e.g., skip 7).
let skipnum =7;

for(let i=1; i<=10; i++){
    if(i===skipnum){
        continue
    };
    console.log(i)
};




// Write a program that prints numbers from 1 to 10 but skips more than one number (e.g., skip 3,7,9).

let skipnumbers = [3,7,9];

for(let num=1; num<=10; num++){
   if(skipnumbers.includes(num)){
    continue
   }

   console.log(num)
};



//we can also write it in this way without using continue
let skipnumbers = [9, 12, 14,17,19];

for(let i =1; i<=20; i++){
    if(!skipnumbers.includes(i)){
        console.log(i)
    }
};



// print all numbers from 1 to 10 except multiples of 3
for(let i=0; i<=10; i++){
    if(i%3===0){
        continue
    }
    console.log(i)




// Write a program that uses a nested loop to print a pattern like this:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(let i=1; i<=5; i++){
    let row="";
    for(let j=1; j<=i; j++){
        row = row + j + " ";
    }

    console.log(row);
};



// Let’s create a program that prints a pyramid pattern like this:

//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5

let rows = 5;
for(let i=1; i<=rows; i++){
    let row = "";
    
    for(let j=1; j<= rows-i; j++){
        row = row + " "
    }
    for(let k=1; k<=i; k++){
        row = row + k + " "
    }
    
    console.log(row)
};


// Print the pyramid upside-down:

// 1 2 3 4 5
//  1 2 3 4
//   1 2 3
//    1 2
//     1

let rows= 5;
for(let i=rows; i>=1; i--){
    let row = "";

    for(let j=1; j<=rows-i; j++){
        row = row + " "
    }
    
    for (let k=1; k<=i; k++){ 
        row = row + k +" "
    };

    console.log(row);
}




// Print a right-aligned number triangle:

//     1
//   1 2
// 1 2 3

let rows = 5;

for(let i= 1 ; i <= rows ; i++){
    let row= "";

    for(let j=1; j<=2*(rows-i); j++ ){
        row = row + " ";
    }

     for (let k=1; k<=i; k++){
            row = row + k + " "
        }

    console.log(row)
};




// Print an inverted right-aligned number triangle:

let rows = 5;

for(let i= rows ; i >= 1 ; i--){
    let row= "";

    for(let j=1; j<=2*(rows-i); j++ ){
        row = row + " ";
    }

     for (let k=1; k<=i; k++){
            row = row + k + " "
        }

    console.log(row)
};






// Replace numbers with stars (*) to create a star pyramid:

// Copy
//    *
//   * *
//  * * *
// * * * *

let rows = 5; 
for(let i =1 ; i <= rows; i++){
    let row = ""

    for (j=1 ; j<= rows-i; j++){
        row += " "
    }

    for(let k=1 ; k<=i; k++){
        row += "* "
    }

    
    console.log(row);
}