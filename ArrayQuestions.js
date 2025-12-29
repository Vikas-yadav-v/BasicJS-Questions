// ques. 1. Find Largest Element in an Array;
let arr = [14, 6, 32, 3, 56, 1];
//Assume first element is largest number;
let max = arr[0];
for (let i = 1; i <= arr.length; i++){
    if (arr[i] > max){
        // Update max;
        max = arr[i];
    }
}
console.log("Largest element:", max);

// Ques. 2. Find Smallest element in array;
let arrMin = [43, 12, 6, 78, 1, 34];
// Assume first element is Smallest Array;
let min = arr[0];

for(let i = 1; i <= arr.length; i++){
    if(arr[i] < min){
        // Update min;
        min = arr[i];
    }
}
console.log("Smallest element:", min);

// Ques. 3. Find sum of array elements;
let arrSum = [32, 4, 65, 32, 12];
// initially sum = 0;
let sum = 0;

for (let i = 0; i < arrSum.length; i++){
    sum += arrSum[i];
}
console.log("Sum of array elements:", sum);

// Ques. 4. Reverse an array;
let arrRev = [32, 45, 4, 1, 8, 21];
let Reversed = [];

for(let i = arrRev.length - 1; i >= 0; i--){
    Reversed.push(arrRev[i]);
}
console.log("Revesed of array:", Reversed);

//Ques. 5. Remove duplicate elements;
// Using for loop;
let arrDu = [3, 3, 1, 5, 7, 5, 8];
let uniqueArrDu = [];

for (let i = 0; i <= arrDu.length; i++){
    if (!uniqueArrDu.includes(arrDu[i])) {
        uniqueArrDu.push(arrDu[i]);
    }
}

console.log(uniqueArrDu);

// Method: Usigin set;
let arrSet = [1, 4, 5, 2, 4, 5, 6];

let uniqueArrSet = [...new Set(arrSet)];

console.log("Duplicate remove:", uniqueArrSet);

//Ques. 6. Find the Second largest number;
let arrSec = [10, 32, 43, 12, 54, 1];

let largest = -Infinity;
let SecondLargest = -Infinity;

for (let i = 0; i <= arrSec.length; i++){
if (arrSec[i] > largest) {
    SecondLargest = largest;
    largest = arrSec[i];
} 
else if (arrSec[i] > SecondLargest && arr[i] !== largest) {
SecondLargest = arrSec[i];
}
}
console.log("Second largest:", SecondLargest);

// Ques. 7. Count even & odd numbers;
let array = [21, 4, 3, 7, 12, 13];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i <= array.length; i++){
    if (array[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("isEven number:", evenCount);
console.log("isOdd number:", oddCount);