"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 
    let line1 = "";
    let line2 = "";
    for (let x = 1; x < 11; x++) { 
        line1 += (11 - x) + ","; 
        line2 += x + ","; 
    }
    printOut("" + line2); printOut("" + line1); 
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Wooo, guess the number!!!");
let target = 42;
let guess = Math.floor(Math.random() * 61);
let guesses = 0;
while (guess !== target) {
    guess = Math.floor(Math.random() * 61);
    guesses = guesses + 1
}
printOut("Yay, the number was " + guess);
printOut("That took " + guesses + " guesses")
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Wooo, guess the number!!!");
let target1 = 4242;
let guess1 = Math.random() * 1000001;
let guesses1 = 0;
let startTime = Date.now();
while (guess1 !== target1) {
    guess1 = Math.floor(Math.random() * 1000001);
    guesses1 = guesses1 + 1
}
let endTime = Date.now()
let totTime = endTime - startTime
printOut("Yay, the number was " + guess1);
printOut("That took " + guesses1 + " guesses and " + totTime + " milliseconds")
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
    //Put your code below here!
    let allPrime = ""
for (let num = 2; num < 200; num++){
    let divisor = 2;
    let isPrime = true;
    while (divisor <= Math.sqrt(num)){
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
        
        divisor++
    }
    if (isPrime) {
        allPrime += num + ","
        //printOut(" " + num)
    } 
    
}
//getting this formatting correct took me way too goddamn long
    printOut(allPrime + "");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
//Alright - start of making the vertical rows and make the text blank
for (let row = 1; row <= 7; row++) {
    let rowText = "";  

    //then in a nested loop, I have to add the horizontal rows up 9. 
    for (let col = 1; col <= 9; col++) {
        //Then I use += to say that the text will be equal what it was *plus* each iteration.
        //using ' ' signs means I can add variables inn the string, easy
        //Then the ${col} will change each iteration with the new col value, same with row. K and R are the only unchanging string
        rowText += `K${col}R${row} `;  
        //since this all repeats after writing, each complete string gets longer per col before resetting to nothing when changing row
    }

    printOut(rowText.trim()); 
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Try to simplify maybe? Reduce all grades to values in a 1-100 scale
const maxGrade = 236
let student1 = Math.random() * 237;
let student2 = Math.random() * 237;
let student3 = Math.random() * 237;
let student4 = Math.random() * 237;
let student5 = Math.random() * 237;

//this is... not exactly elegant or efficient *at all*, but I'm tired and don't have much time so copy/paste it is!
let grade = Math.floor(student1 / maxGrade * 100)
if (grade >= 89){
    printOut("Student got an A, with " + grade + "%");
}
else if (grade >= 77) {
    printOut("Student got a B, with " + grade + "%");
}
else if (grade >= 65) {
    printOut("Student got a C, with " + grade + "%");
}
else if (grade >= 53) {
    printOut("Student got a D, with " + grade + "%");
}
else if (grade >= 41) {
    printOut("Student got an E, with " + grade + "%")
}
else {
    printOut("Student got an F, failing the course with " + grade + "%")
}
let grade2 = Math.floor(student2 / maxGrade * 100)
if (grade2 >= 89){
    printOut("Student 2 got an A, with " + grade2 + "%");
}
else if (grade2 >= 77) {
    printOut("Student 2 got a B, with " + grade2 + "%");
}
else if (grade2 >= 65) {
    printOut("Student 2 got a C, with " + grade2 + "%");
}
else if (grade2 >= 53) {
    printOut("Student 2 got a D, with " + grade2 + "%");
}
else if (grade2 >= 41) {
    printOut("Student 2 got an E, with " + grade2 + "%")
}
else {
    printOut("Student 2 got an F, failing the course with " + grade2 + "%")
}
let grade3 = Math.floor(student3 / maxGrade * 100)
if (grade3 >= 89){
    printOut("Student 3 got an A, with " + grade3 + "%");
}
else if (grade3 >= 77) {
    printOut("Student 3 got a B, with " + grade3 + "%");
}
else if (grade3 >= 65) {
    printOut("Student 3 got a C, with " + grade3 + "%");
}
else if (grade3 >= 53) {
    printOut("Student 3 got a D, with " + grade3 + "%");
}
else if (grade3 >= 41) {
    printOut("Student 3 got an E, with " + grade3 + "%")
}
else {
    printOut("Student 3 got an F, failing the course with " + grade3 + "%")
}
let grade4 = Math.floor(student4 / maxGrade * 100)
if (grade4 >= 89){
    printOut("Student 4 got an A, with " + grade4 + "%");
}
else if (grade4 >= 77) {
    printOut("Student 4 got a B, with " + grade4 + "%");
}
else if (grade4 >= 65) {
    printOut("Student 4 got a C, with " + grade4 + "%");
}
else if (grade4 >= 53) {
    printOut("Student 4 got a D, with " + grade4 + "%");
}
else if (grade4 >= 41) {
    printOut("Student 4 got an E, with " + grade4 + "%")
}
else {
    printOut("Student got an F, failing the course with " + grade4 + "%")
}
let grade5 = Math.floor(student5 / maxGrade * 100)
if (grade5 >= 89){
    printOut("Student 5 got an A, with " + grade5 + "%");
}
else if (grade5 >= 77) {
    printOut("Student 5 got a B, with " + grade5 + "%");
}
else if (grade5 >= 65) {
    printOut("Student 5 got a C, with " + grade5 + "%");
}
else if (grade5 >= 53) {
    printOut("Student 5 got a D, with " + grade5 + "%");
}
else if (grade5 >= 41) {
    printOut("Student 5 got an E, with " + grade5 + "%")
}
else {
    printOut("Student 5 got an F, failing the course with " + grade5 + "%")
}   
//A: 89% – 100%
//B 77% – 88%
//C: 65% – 76%
//D: 53% – 64%
//E: 41% – 52%
//F: 0% – 40%
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dice;
let straight = [1, 2, 3, 4, 5, 6]
let allSix = [];
let casts = 0;
let success = false

//HAha, can make it check for a true statement to finally get around the infinite loop problem!!!
 while (success != true) {
    dice = Math.floor(Math.random() * 6 + 1);
    allSix.push(dice);
    casts = casts + 1
    if (straight.every(element => allSix.includes(element))){
        printOut("It took " + casts + " throws to get a straight");
        success = true
    }


    
}
printOut(newLine);
