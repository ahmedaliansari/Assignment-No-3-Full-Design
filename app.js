// Answer No-01//

let num1 = prompt("Enter Number 1");
let num2 = prompt("Enter Number 2");

let my1Num = Number(num1);
let my2Num = Number(num2);

let largest = Math.max ( my1Num , my2Num );
console.log(" The Largest Number is " + largest);


// Answer No-02//

let user1 = prompt("Enter a number:");

if (user1 > 0) {
  console.log("The sign is +");
} else if (user1 < 0) {
  console.log("The sign is -");
} else {
  console.log("The number is zero");
}


// Answer No-03//

let num1 = prompt("Enter number 1:");
let num2 = prompt("Enter number 2:");
let num3 = prompt("Enter number 3:");
let num4 = prompt("Enter number 4:");
let num5 = prompt("Enter number 5:");

let my1Num = Number(num1);
let my2Num = Number(num2);
let my3Num = Number(num3);
let my4Num = Number(num4);
let my5Num = Number(num5);

let largest = Math.max(my1Num, my2Num, my3Num, my4Num, my5Num);

console.log("The largest number is: " + largest);

// Answer No-04//

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

// Answer No-05//


let user = prompt("Enter Your Percentage");

if (user >= 90) {
    grade = " A ";
    console.log (user + grade);
} else if (user >= 80) {
    grade = " B ";
    console.log (user + grade);
} else if (user >= 70) {
    grade = " C ";
    console.log (user + grade);
} else if (user >= 60) {
    grade = " D ";
    console.log (user + grade);
} else {
    grade = " F ";
    console.log (user + grade);
}


// Answer No-06//


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


// Answer No-07//

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
