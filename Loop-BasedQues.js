//Ques. 5- Check if a number is prime.

let num1 = 19;
let isPrime = true;

if (num1 <= 1) {
 } else {
for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) {
        isPrime = false;
        break;
    }
}
 }
 console.log(isPrime ? "Prime" : "Non-Prime");

 //Ques. 6- Print all prime numbers between 1 to 100;

 let num3 = 100;

     //Outer loop: Numbers from 2 to 100;
 for (let i = 2; i < num3; i++) {
    let isPrime = true;

// Inner loop: Check divisibility;
    for(let j = 2; j < i; j++){
        if(i % j === 0) {
         isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);

    }
 }

 //Ques.7- Find the factorial numbers;
 let num4 = 7;
 let factorial = 1;

 for (let i = 1; i <= num4; i++) {
    factorial = factorial * i;
 }

 console.log(factorial);

//Using Function;
function findFactorial(n) {
    let fact = 1;

    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(findFactorial(6));

// Ques.8. Check leap year;
function isLeapYear(year) {
if(year % 400 === 0) {
    return "Leap year";
} else if (year % 4 === 0 && year % 100 !== 0) {
    return "Leap Year";
} else {
    return "Not a leap year";
}
}

console.log(isLeapYear(2034));

//Ques.9 Print numbers from N to 1;

let n = 9;

for(let i = n; i >=1; i--) {
    console.log(i);
}

//Using Function:
function printNto1(n) {
    for(let i = n; i >= 1; i--){
console.log(i);
    }
}
console.log(printNto1(21));

//Ques. 10. Print even numbers between 1 to N;

let N = 13;

// for(let i = 1; i <= N; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//Optimized for loop:

for(let i = 2; i <= N; i+= 2) {
console.log(i);
}

//Using Function and Optimized;

function printEven(N){
    for(let i = 2; i <= N; i+= 2){
        console.log(i);
    }
}
console.log(printEven(31));

//Ques.11. Find the sum of the first N natural numbers:
//Using for loop:
let a = 13;
sum = 0;

for (let i = 1; i <= a; i++) {
    sum+= i;
}
console.log(sum);

//Using Function:

function sumOfFirstN(n) {
    n * (n + 1)/2;
}
console.log(sumOfFirstN(14));

//Ques. 12. Print multiplication table;

let multi = 5;

for (let i = 1; i <= 10; i++) {
    //console.log(num + " x " + i + " = " + (num * i));

     console.log(`${multi} x ${i} = ${multi * i}`);
}

//Ques. 13. Print numbers from 1 to 100;

let number = 47;

for (let i = 1; i <= number; i++) {
    console.log(i);
}

//Ques. 14. Print this pattern:

let numbers = 5;

for(let i = 1; i <= numbers; i++){
    numbers = "";
    for(let j= 1; j <= i; j++){
        numbers+= "5";
    }
    console.log(i);
}