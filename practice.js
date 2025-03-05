// 1: Write a program that takes two numbers as input and prints their sum, difference, product, and quotient.

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


// 2: Write a program that checks if a number is positive, negative, or zero.

let num = parseFloat(prompt("Enter a number "));

if (num===0){
    console.log(num, "is zero")
}else if(num < 0){
    console.log( num, "is negative")
}else if (num > 0 ){
    console.log(num, "is positive")
};


// 3: If we want to ensure the user enters a valid number, we can use a loop to keep asking for input until a valid number is provided:

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



// 4: Write a program that checks if a number is even or odd.


let num = parseFloat(prompt("Enter a number"));

while (isNaN(num)){
    num= parseFloat(prompt("invalid input! please enter a valid number"));
}

 if(num%2===0){
    console.log(num,"is even")
}else{
    console.log(num, "is odd")
};


// 5: Write a program that prints numbers from 1 to 10 using a for loop.

for (let i = 0; i <= 10 ; i++) {
    console.log(i);
    
}

// 6: Write a program that prints numbers from 10 to 1 using a for loop.
for(let num=10; num >=1; num--){
    console.log(num)
};




// 7: Write a program that prints only the even numbers from 1 to 10.

for(let num=1; num<=10; num++){
    if(num%2===0){
        console.log(num)
    }
};



// 8: Write a program that sum numbers from 1 to 10.

let sum = 0;
for(let num =1; num <= 10; num++){
    sum = sum+ num;

}
console.log("sum of numbers from 1 to 10 is", sum);



// 9: Write a program that prints the multiplication table of a number (e.g., 5).

let num = 5;

for(let i =1; i <=10; i++){
    console.log(`${num} * ${i} = ${num*i}`);
};




// 10: Write a program that takes two numbers as input (e.g., start and end) and prints all numbers in that range.
let starnum = 12; 
let endnum = 23;

for(let num=starnum ; num <= endnum; num++){
    console.log(num)
};




// 11: Write a program that prints numbers from 1 to 10 but skips a specific number (e.g., skip 7).
let skipnum =7;

for(let i=1; i<=10; i++){
    if(i===skipnum){
        continue
    };
    console.log(i)
};




// 12: Write a program that prints numbers from 1 to 10 but skips more than one number (e.g., skip 3,7,9).

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



// 13:print all numbers from 1 to 10 except multiples of 3
for(let i=0; i<=10; i++){
    if(i%3===0){
        continue
    }
    console.log(i)




// 14: Write a program that uses a nested loop to print a pattern like this:
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



// 15: Let’s create a program that prints a pyramid pattern like this:

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


// 16: Print the pyramid upside-down:

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




// 17 : Print a right-aligned number triangle:

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




// 18: Print an inverted right-aligned number triangle:

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






// 19 : Replace numbers with stars (*) to create a star pyramid:

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








// 20: Write a function isEven that takes a number as an argument and returns true if the number is even, otherwise false.

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




// 21: Write a function isOdd that takes a number as an argument and returns true if the number is odd, otherwise false.

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





// 22: Write a function isDivisibleBy that takes two numbers (num and divisor) and returns true if num is divisible by divisor, otherwise false.

function isDivisibleBy(num, divisor) {

    if(divisor===0){
        return false
    }

    return num%divisor===0;
}

console.log(isDivisibleBy(13, 2));




// 23 : If you want to handle cases where the input might be a string (e.g., "10" instead of 10), you can convert the input to a number using Number() or parseInt().

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




// 24: Write a function sumOfDigits that takes a number and returns the sum of its digits. For example, sumOfDigits(123) should return 6.

function sumOfDigits(number) {
    let numberstr = number.toString();

    let sum = 0 ;

    for(let i =0; i< numberstr.length ; i++){
        sum = sum + parseInt(numberstr[i])
    }

    return sum;
}

console.log(sumOfDigits(123));





// 25 : Write a function factorial that takes a number and returns its factorial. For example, factorial(5) should return 120.

function factorial(number) {
    let product = 1;

    for(let i = 2; i<=number; i++){   //we will start i from 2 because the factoial for 0 and 1 will return inital value that is 1


        product  = product * i
    }

    return product
}

console.log(factorial(5));        //120




// 26: in order to handle the negative numbers 

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





// 27 : Write a function isPositive that takes a number and returns true if the number is positive, otherwise false.

function isPositive(number) {

    if(typeof number !== 'number'){
        return false
    }

    return number > 0;
}

console.log(isPositive(-4));




// 28: Write a function checkNumber that takes a number and returns:

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



// 29: Write a function isLeapYear that takes a year and returns true if it's a leap year, otherwise false.

function isLeapYear(year) {
    return (year%400===0) || (year%100 === 0 && year % 4===0)?
    "it is a leap" : "it is not a leap year"
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2010));




// 30:  Create an array of your favorite fruits and print each fruit using a for loop.

let fruits = ["Apple", "Mango", "Litchi", "Grapes", "Banana"];

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i])
};




// 31: Write a function findMax that takes an array of numbers and returns the largest number in the array.

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





// 32: Write a function findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(array) {
    return Math.min(...array)
}

let numbers = [1,-2,3,4,9,7];
console.log(findMin(numbers));




// 33: Write a function sumArray that takes an array of numbers and returns the sum of all the numbers.

function sumArray(array) {
    let sum =0; 

    for(let i =0; i<array.length; i++){
        sum = sum + array[i]
    }

    return sum;
}

let numbers= [1,2,3,4,5];
console.log(sumArray(numbers));




// 34 : Write a function averageArray that takes an array of numbers and returns the average of those numbers.

function averageArray(array) {
    let sum =0;

    for(let i=0; i<array.length; i++){
        sum += array[i]
    }

    let average = sum / array.length;
    return average;
}

let numbers = [10,20, 30, 40, 50];
console.log(averageArray(numbers));




// 35 : Write a function countEvenNumbers that takes an array of numbers and returns the count of even numbers in the array.

function countEvenNumbers(array) {
    let count = 0;

    for(let num of array){
        if(num % 2===0){
            count++
        }
    }

    return count
}
 
let number = [1,2,3,4,5,6,7,8,22,24,]
console.log(countEvenNumbers(number));


// we can also write it by using for loop 

function countEvenNumbers(array) {
    let count = 0; 

    for(let i=0; i<array.length; i++){
        if(array[i]%2===0){
            count++
        }
    }

    return count
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(countEvenNumbers(numbers));



// 36 : Write a function containsValue that takes an array and a value as arguments and returns true if the value exists in the array, otherwise false.

function containsValue(array, value) {
    return array.includes(value)
}

let numbers = [1,2,3,4,5,6,7,8,9];
console.log(containsValue(numbers, 60));  //false
console.log(containsValue(numbers, 3));  //true



// 37: Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.

function reverseArray(array) {
    let reversedArray = [];

    for(let i = array.length-1; i>=0; i--){
        reversedArray.push(array[i])
    }

    return reversedArray
}

let numbers = [1,2,3,4];
console.log(reverseArray(numbers));



// we can also solve it by using reverse method of javascript

function reverseArray(array) {
    return [...array].reverse()
}

let numbers = [1,2,3,4];
console.log(reverseArray(numbers));




// 38: Write a function reverseString that takes a string and returns the reversed string.

// method 1 using reverse and join method

function reverseString(string) {
    return [...string].reverse().join("")
}

let str = "abcd";
console.log(reverseString(str));


// method 2 using loop

function reverseString(string) {
    let reversedstr = "";

    for(let i = string.length-1; i >= 0 ; i--){
        reversedstr += string[i];
    }

    return reversedstr
}

let str = "abcd";
console.log(reverseString(str))


// method 3 using split, reverse and join method 

function reverseString(string) {
    return string.split("").reverse().join("")
}

let str = "hello javascript";
console.log(reverseString(str));



// 39: Write a function isPalindrome that checks if a string is a palindrome (reads the same backward as forward). Return true if it is, otherwise false.

function  isPalindrome(string) {
    return string.split("").reverse().join("")===string
}

console.log(isPalindrome("hello"));          //false
console.log(isPalindrome("madam"));          //true




// 40: Write a function findIndex that takes an array and a value as arguments and returns the index of the value in the array. If the value is not found, return -1.


function findIndex(array, value) {
    for(let i=0; i<array.length; i++){
        if(array[i]===value){
            return i
        }
    }

    return -1
}

let numbers = [23,34,21,78,90];
console.log(findIndex(numbers, 78));     //3
console.log(findIndex(numbers, 100));     //-1




// 41: Write a function removeDuplicates that takes an array and returns a new array with duplicates removed.

function removeDuplicates(array) {
    let uniquearray = [];

    for(let i=0; i < array.length; i++){
        if(!uniquearray.includes(array[i])){
            uniquearray.push(array[i])
        }
    }

    return uniquearray;
}

let numbers = [1,2,2,3,3,4,4,7,7];
console.log(removeDuplicates(numbers));


// alternative method using javascript build in method of set

function removeDuplicates(array) {
    return [...new Set(array)]
}

let numbers = [1,2,2,3,3,4,4,7,7];
console.log(removeDuplicates(numbers));




// 42 : Write a function removeDuplicatesFromStrings that takes an array of strings and returns a new array with duplicate strings removed.


function removeDuplicatesFromStrings(array) {
    
    let uniquearray = [];

    for(let i =0; i<array.length; i++){
        if(!uniquearray.includes(array[i])){
            uniquearray.push(array[i])
        }
    }

    return uniquearray
}

let string = ["ahmed", "sara", "saba", "sara", "saba", "ahmed"];
console.log(removeDuplicatesFromStrings(string));


//alternative method 

function removeDuplicatesFromStrings(array) {
    return [...new Set(array)]
}

let newstring = ["ahmed", "sara", "saba", "sara", "saba", "ahmed"];
console.log(removeDuplicatesFromStrings(newstring));



// 43: Write a function findSecondLargest that takes an array of numbers and returns the second largest number.

function findSecondLargest(array) {

    if(array.length < 2){
        return "there is no second largest number"
    }


    let max = -Infinity;
    let secondMaxNum = -Infinity;

    for(let i=0; i<array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }

    for(let j =0; j<array.length; j++){
        if(array[j] > secondMaxNum &&  array[j] < max){
            secondMaxNum = array[j]
        }
    }

    if(secondMaxNum === -Infinity){
        return null
    }

    return secondMaxNum
}

let numbers = [32,679,89,6,21];
console.log(findSecondLargest(numbers));    //89




// 44 : Write a function isSorted that takes an array of numbers and returns true if the array is sorted in ascending order, otherwise false.

function isSorted(array) {
    for(let i=0; i<array.length; i++){
        if(array[i] > array[i+1]){
            return false
        } 
    }

    return true
}

let numbers1 = [1,2,3,4,5];
let numbers2 = [1,2,3,41,5];
console.log(isSorted(numbers2));




// 45 : Write a function mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays.

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2)
}

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];

console.log(mergeArrays(array1, array2));



// alternative method by using the spread operator

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];

console.log(mergeArrays(array1, array2));



// 46: Write a function findLongestWord that takes an array of strings and returns the longest word in the array.

function findLongestWord(array) {
    let longestword = "";

    for(let i=0; i< array.length; i++){
        if(array[i].length > longestword.length){
            longestword = array[i]
        }
    }

    return longestword
}

let words = ["apples", "bananana", "litchi", "grapessssssss"];
console.log(findLongestWord(words));



// 47: Write a function countOccurrences that takes an array and a value as arguments and returns the number of times the value appears in the array.

function countOccurrences(array, value) {
    let count = 0 ;

    for(let i = 0 ; i<array.length; i++){
        if(array[i] === value){
            count++
        }
    }

    return count
}

let numbers = [1,2,3,4,2,7,2,9,2 , 3];
console.log(countOccurrences(numbers, 3));




// 48 : Write a function countOccurrencesOfEvenNumbers that takes an array of numbers and returns the count of even numbers in the array.

function countOccurrencesOfEvenNumbers(array) {
    let count = 0;

    for(let i =0; i< array.length ; i++){
        if(array[i] % 2===0){
            count++
        }
    }

    return count
}

let numbers =  [1,2,3,4,5,6,7,8,9,10]
console.log(countOccurrencesOfEvenNumbers(numbers))



// 49 : Write a function findIntersection that takes two arrays and returns a new array containing the common elements between them.

function findIntersection(arr1, arr2) {
    let commonelements = [];

    for(let i =0 ; i< arr1.length ; i++){
        if(arr2.includes(arr1[i])){
            commonelements.push(arr1[i])
        }
    }

    return commonelements
}

let array1 = [1,2,3,4,5,6];
let array2 = [2,3,4,9,7,1, 6];

console.log(findIntersection(array1, array2));




// 50: Write a function rotateArray that takes an array and a number k as arguments and rotates the array to the right by k steps.


function rotateArray(array, k ) {
    k = k % array.length; 

    let firstPart = array.slice(-k);
    let secondPart = array.slice(0, -k)

    return firstPart.concat(secondPart)
}

let numbers = [1,2,3,4,5];
console.log(rotateArray(numbers, 2));




// 51: Write a function extractLastThree that extracts the last 3 elements of an array using slice.

function extractLastThree(array) {
    return array.slice(-3)
}

let array = [1,2,3,4,5];
console.log(extractLastThree(array));



// 52: Write a function that extracts the first k elements of an array.

function extractfirstElement(array) {
    return array.slice(1)
}

let array = [1,2,3,4,5, 6,7,8,9,10];
console.log(extractfirstElement(array, 3));



// 53: Write a function that extracts elements from the middle of an array (e.g., from index 2 to index 4).

function extractElementsFromMiddle(array) {
    return array.slice(2,4)
}

let numbers = [5,3,9,7,2,1];
console.log(extractElementsFromMiddle(numbers))



// 54: Write a function findMissingNumber that takes an array of numbers (from 1 to n with one number missing) and returns the missing number.

function findMissingNumber(array) {

    array.sort((a,b) => a-b)


    for(let i=0; i<array.length; i++){

        if(array[i] !== i+1){       // it is only useful when numbers starts from 1
            return i+1
        }
    }

    return array.length + 1
}

let numbers = [1,2,3, 4,5,7]
console.log(findMissingNumber(numbers));    //6


// 55: Write a function findMissingNumbers that takes an array of numbers with more than one number missing numbers and returns the missing numbers.

function findMissingNumbers(numbers) {
    numbers.sort((a,b) => a-b)

    let missingNumbers = []

    for(let i=0; i<numbers.length; i++){
        let expectedNum = Array[0] + i       

        if(Array[i] !== expectedNum){
            for(let j=expectedNum ; j<Array[i]; j++){
                missingNumbers.push[j]
            }
        }
    }


    return missingNumbers
}

let array = [3,8,6,2,1];
console.log(findMissingNumbers(array));




// 56 : Write a function findDuplicate that takes an array of numbers where all numbers are from 1 to n, and one number is duplicated. Return the duplicated number.

function findDuplicate(array) {
    array.sort((a,b) => a-b);

    let duplicatNum  = 0;

    for(let i=0; i < array.length; i++){
        if(array[i] === array[i+1]){
            duplicatNum = array[i]
        }
    }

    return duplicatNum
}

let numbers = [1,2,3,3,4,5];
console.log(findDuplicate(numbers));


