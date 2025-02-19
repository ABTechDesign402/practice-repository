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








// Write a function isEven that takes a number as an argument and returns true if the number is even, otherwise false.

function isEven(number) {
    if(number%2===0){
        return true
    }else{
        return false
    }
};

console.log(isEven(34));



//We can also write it in this way
function isEven(number) {
    if(typeof number !== 'number'){
        return false
    }

    return number%2===0
}

console.log(isEven(22));     //true
console.log(isEven(39));     //false
console.log(isEven(isNaN));     //false
console.log(isEven(undefined));     //false
console.log(isEven("abc"));     //false
console.log(isEven("12123"));     //false




// Write a function isOdd that takes a number as an argument and returns true if the number is odd, otherwise false.

function isOdd(number) {
    if(typeof number !== 'number'){
        return false
    }else{
        return number%2!==0;
    }
}


console.log(isOdd(33));       //true
console.log(isOdd(38));       //false
console.log(isOdd(null));       //false
console.log(isOdd(undefined));       //false
console.log(isOdd("123"));       //false
console.log(isOdd("abc"));       //false





// Write a function isDivisibleBy that takes two numbers (num and divisor) and returns true if num is divisible by divisor, otherwise false.

function isDivisibleBy(num, divisor) {

    if(divisor===0){
        return false
    }

    return num%divisor===0;
}

console.log(isDivisibleBy(13, 2));




// If you want to handle cases where the input might be a string (e.g., "10" instead of 10), you can convert the input to a number using Number() or parseInt().

function isDivisibleBy(num, divisor) {
    num= Number(num);
    divisor = Number(divisor)

    if(divisor===0){
        return false
    }

    return num%divisor===0


}

console.log(isDivisibleBy(24, 3))      //true
console.log(isDivisibleBy(22, 4))      //false
console.log(isDivisibleBy("30", 3))      //true
console.log(isDivisibleBy(30, 0))      //false




// Write a function sumOfDigits that takes a number and returns the sum of its digits. For example, sumOfDigits(123) should return 6.

function sumOfDigits(number) {
    let numberstr = number.toString();

    let sum = 0 ;

    for(let i =0; i< numberstr.length ; i++){
        sum = sum + parseInt(numberstr[i])
    }

    return sum;
}

console.log(sumOfDigits(123));





// Write a function factorial that takes a number and returns its factorial. For example, factorial(5) should return 120.

function factorial(number) {
    let product = 1;

    for(let i = 2; i<=number; i++){   //we will start i from 2 because the factoial for 0 and 1 will return inital value that is 1


        product  = product * i
    }

    return product
}

console.log(factorial(5));        //120




//in order to handle the negative numbers 

function factorial(number) {
    if(number < 0 ){
        return "factorial is not defined for negative numbers"
    }

    if(number===1 || number===0){
        return 1;
    }

    let product =1 ; 
    for(let i =2; i<= number ; i++){
        product = product * i
    }

    return product;
}


console.log(factorial(0));





// Write a function isPositive that takes a number and returns true if the number is positive, otherwise false.

function isPositive(number) {

    if(typeof number !== 'number'){
        return false
    }

    return number > 0;
}

console.log(isPositive(-4));




// Write a function checkNumber that takes a number and returns:

// "Even and Positive" if the number is even and positive.
// "Odd and Positive" if the number is odd and positive.
// "Even and Negative" if the number is even and negative.
// "Odd and Negative" if the number is odd and negative.


function checkNumber(number) {
    if(number===0){
        return "zero";
    }
    else if(number > 0){
        return number%2===0? "Even and Positive" : "Odd and Positive"
    }else{
        return number%2===0? "Even and Negative" : "Odd and Negative"
    }
}

console.log(checkNumber(0))
console.log(checkNumber(10))
console.log(checkNumber(-30))
console.log(checkNumber(33))
console.log(checkNumber(-43))



// Write a function isLeapYear that takes a year and returns true if it's a leap year, otherwise false.

function isLeapYear(year) {
    return (year%400===0) || (year%100 === 0 && year % 4===0)?
    "it is a leap" : "it is not a leap year"
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2010));




// // Create an array of your favorite fruits and print each fruit using a for loop.

let fruits = ["Apple", "Mango", "Litchi", "Grapes", "Banana"];

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i])
};




// Write a function findMax that takes an array of numbers and returns the largest number in the array.

function findMax(array) {
    let max = array[0];

    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }

    return max
}

let numbers = [1,2,3,4,58,6,7,8,9];
console.log(findMax(numbers));


//we can also solve it by using Math.max(...array); 

function findMax(array) {
    return Math.max(...array)
}

let numbers = [1,2,3,4,5,67];
console.log(findMax(numbers));





// // Write a function findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(array) {
    return Math.min(...array)
}

let numbers = [1,-2,3,4,9,7];
console.log(findMin(numbers));




// // Write a function sumArray that takes an array of numbers and returns the sum of all the numbers.

function sumArray(array) {
    let sum =0; 

    for(let i =0; i<array.length; i++){
        sum = sum + array[i]
    }

    return sum;
}

let numbers= [1,2,3,4,5];
console.log(sumArray(numbers));