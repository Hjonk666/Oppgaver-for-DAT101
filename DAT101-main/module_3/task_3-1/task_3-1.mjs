"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 7;
if (wakeUpTime == 7) {
printOut("I can take the bus to school");
} else if (wakeUpTime == 8) {
  printOut("I can take the train to school");
} else 
{printOut("I'll have to take the car to school")
}


printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let variable = 0
if (variable > 0){
  printOut("Positive");
} else if (variable == 0) {
  printOut("Zero");
}
else if (variable < 0){
  printOut("Negative");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let picture = Math.floor(Math.random() * 8) + 1;
printOut("The picture is " + picture + "MP");
if (picture >= 4){
  printOut("Thank You");
} else if (picture < 4) {
  printOut("The picture is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let picture2 = Math.floor(Math.random() * 8) + 1;
printOut("The picture is " + picture2 + "MP");
if (picture2 < 4){
  printOut("The picture is too small");
} else if (picture2 >=6) {
  printOut("The picture is too large");
} else {
  printOut("Thank You");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  const r = "r";
  printOut("The month is " + monthName)
  if (monthName.includes(r)) {
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }
  
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList2 =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth2 = monthList2.length;
  const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];
  const r2 = "r";
  printOut("The month is " + monthName2)
  if (monthName2 == "February"){
    printOut("There are 29 days this month.");
  } else if (monthName2 === "December" ||monthName2 === "October"||monthName2 === "August"||monthName2 === "July"|| monthName2 === "May"||monthName2 === "March"||monthName2 === "January") {
    printOut("There are 31 days this month.");
  } else { printOut("There are 30 days this month.")}
  
  if (monthName2.includes(r2)) {
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "March" || monthName === "April" ||monthName === "May"){
  printOut("The art gallery is closed for refurbishment until first of June.")
} else {printOut("The gallery is open!!! :D")}
printOut(newLine);
