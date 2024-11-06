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
// Her lager vi et array med alle grade grensene
const maxGrade = 236;
const gradeBoundaries = [
  { letter: "A", min: 89 },
  { letter: "B", min: 77 },
  { letter: "C", min: 65 },
  { letter: "D", min: 53 },
  { letter: "E", min: 41 },
  { letter: "F", min: 0 }
];

// Her generer vi et array med alle studentene (5), og generer en random grade
//for hver av dem
let students = Array.from({ length: 5 }, (_, i) => {
  let grade = Math.floor((Math.random() * 237) / maxGrade * 100);
  return { student: `Student ${i + 1}`, grade };
});

// her finner vi karakter bokstaven basert på grade tallet, funksjonen benyttes av loopen nedenfor
const getGradeLetter = (grade) => {
  for (let boundary of gradeBoundaries) {
    if (grade >= boundary.min) {
      return boundary.letter;
    }
  }
};

// Her looper vi gjennom alle studentene og skriver ut grade samt finner grade bokstaven
//ved oppslag gjennom funksjonen ovenfor.
students.forEach(({ student, grade }) => {
  const gradeLetter = getGradeLetter(grade);
  printOut(`${student} got a(n) ${gradeLetter}, with ${grade}%`);
});
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
