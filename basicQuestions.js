//Check if anumber is even or odd.
let num = 7;
if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

//Short (Ternary operater).
let a = 12;
console.log(a % 2 === 0 ? "Even" : "odd");

// Using Function.
function checkEvenOdd(b) {
    return b % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(11));

// 2. Check if a number is positive, negative, or zero.
let num2 = 16;
if(num2 > 0) {
    console.log("Positive number");
} else if (num2 < 0) {
    console.log("Negative number");
}else {
    console.log("Zero number");
}

//Using a Function.
function checkEvenOdd(a) {
    if (a > 0) return "Positive Number";
    if (a < 0) return "Negative Number";
    return "Zero";
}
console.log(checkEvenOdd(-4));

// Short Ternary operater;

let b = 0;
console.log(b > 0 ? "Positive" : b < 0 ? "Negative" : "Zero");

//Ques.(3). Find the largest of two numbers.
// if-else 
let x = 23;
let y = 12;

if (x > y) {
    console.log("x is the largest number");
} else if (x < y) {
    console.log("y is the largest number");
} else {
    console.log("Both the numbers are equal");
}

//Using Function.

function findLargest(x, y) {
    if (x > y) 
        return x + "is largest number";
    if(y > x)
        return y + " is the largest number";
}
console.log(findLargest( 12, 45));

//Using Ternary operater.

// let c = 3, d = 5;
// console.log(c > d ? c : d);

//Using Math.max().
let c = 32, d = 22;
console.log(Math.min(c, d));

//Ques. 4. Find the largest three numbers.

// let a = 10;
// let b = 25;
// let c = 15;

// if (a >= b && a >= c) {
//   console.log("a is the largest");
// } else if (b >= a && b >= c) {
//   console.log("b is the largest");
// } else {
//   console.log("c is the largest");
// }

// Using a Function.

function findLargest(a, b, c) {
    if (a >= b && a >= c) return a + " is the largest number";
    if (b >= a && b >= a) return b + " is the largest number";
    return c + " is the largest number";
}

console.log(findLargest(1, 43, 21));

//Short way (Math.max & min).

let f = 43, g = 32, h = 54;
console.log(Math.min(f, g, h));

