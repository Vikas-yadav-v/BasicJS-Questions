// Ques.15. Square Stars Pattern:
let rows = 4;
let  cols = 4;

//Outer loop 
for (let i = 1; i <= rows; i++) {
    let line = "";

    //Inner loop;
    for (let j = 1; j <= cols; j++){
        line += "* ";
    }
    console.log(line);
}

//Ques. 16. Right Triangle Nunbers Pattern;

let a = 5;

for (let i = 1; i <= a; i++){
    let line = " ";

    //Inner loop;
    for (let j = 1; j <= i; j++) {
        line += i + " " ;
    }
    console.log(line);
}

//Ques. 17 Reverse Number Triangle;

let b = 5;

//Outer loop;
for (let i = b; i >= 1; i--) {
    let line = "";

    //Inner loop;
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}

//Ques. 18. Pyramid Numbers Pattern;

let x = 5;

for(let i = 1; i <= x; i++){
    let line = "";

    //print Space;
    for (let space = 1; space <= x - i; space++){
        line += "  ";
    }
    //print numbers;
    for(let num = 1; num <= 2 * i - 1; num++){
        line += "1" + " ";
    }
    console.log(line);
}

//Ques. 19. Inverted Pyramid Numbers Pattern;
let y = 5;

for(let i = y; i >= 1; i--){
    let line = "";

    //print Space;
    for (let space = 1; space <= y - i; space++){
        line += "  ";
    }
    //print numbers;
    for(let num = 1; num <= 2 * i - 1; num++){
        line += "1" + " ";
    }
    console.log(line);
}

//Ques. 20. Diamond Star Pattern;

let z = 5;

//Upper Pyramid;
for (let i = 1; i <= z; i++){
    let line = "";

    //print space;
    for (let space = 1; space <= z - i; space++){
        line += "  ";
    }
    // print numbers;
    for(let star = 1; star <= 2 * i - 1; star++){
        line += "*" + " ";
    }
    console.log(line);
}

// Lower Inverted Pyramid;
for (let i = z - 1; i >= 1; i--){
    let line = "";

// Print space;
for (let space = 1; space <= z - i; space++){
    line += "  ";
}
// Print stars;
for (let star = 1; star <= 2 * i - 1; star++){
    line += "*" + " ";
}
console.log(line);
}

// Ques. 21. Continuous Number Triangle;

let continuousNum = 5;
let num = 1;

for (let i = 1; i <= continuousNum; i++){
    let rows = "";

    for (let j = 1; j <= i; j++){
        rows += num + " ";
        num++;
    }
    console.log(rows);
}

// Ques. 22. Hollow Square Pattern;
let HollowNum = 5;

for(let i = 1; i <= HollowNum; i++){
    let rows = "";
    for (let j = 1;  j <= HollowNum; j++){
        if (i === 1 || i === HollowNum || j === 1 || j === HollowNum){
            rows += "* ";
        } else {
            rows += "  ";
        }
    }
    console.log(rows);
}