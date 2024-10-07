"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NegThirtyFour = 2 + 3 * (2 - 4) * 6;
printOut("Part 1 answer ="  + NegThirtyFour.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// We have 25m 34cm
let Inches = (25.34 * 1000) / 25.4;

Inches = Inches.toFixed();
// 1m = 100cm 
// 1cm = 10mm
// 1 inch = 25.4mm
printOut("Part 2 Answer =" + Inches.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//3 days, 12 hours, 14 minuets and 45 seconds - make it all minuets
const MinPerDay = 24*60
const hours = 12
const SecPerMin = 60

let TotMinn = 3 * MinPerDay + 60 * hours + 14 + 45 / SecPerMin
printOut("Part 3 Answer =" + TotMinn);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// 6,322.52 min - convert to days, hours, minuets and seconds
let TotMin = 6322.52
let TotHours = TotMin / 60
let days = TotHours / 24
let AnsDays = Math.trunc(days)
TotHours = (days - AnsDays) * 24;
let AnsHours = Math.trunc(TotHours)
let AnsMin = Math.trunc((TotHours - AnsHours) * 60)
let AnsSec = Math.round((TotMin - AnsMin) * 60)
printOut("The answer is " + AnsDays + " Days");
printOut(AnsHours + " hours");
printOut(AnsMin + " minuets");
printOut("And " + AnsMin + " seconds")
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Conversion rate is 76KR = 8.6USD
let kr = 76
let Usd = 8.6
let UsdToKr = (kr / Usd);
let KrToUs = (Usd / kr);
let priceUs = (54 * KrToUs);

priceUs = Math.round(priceUs)
KrToUs = KrToUs.toFixed(2);
UsdToKr = UsdToKr.toFixed(2);
printOut("54KR is equivalent to ~" + priceUs + "USD");
printOut("The conversion of Kr to USD is 1Kr = ~" + KrToUs + "USD");
printOut("The conversion of USD to Kr is 1USD = ~" + UsdToKr + "Kr");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";
let nineteenth = text[18];
let TxtLength = text.length;
let subtaskB = text.substring(34, 8);

printOut("The sentence has " + TxtLength + " characters");
printOut("The nineteenth letter is " + nineteenth);
printOut("From the 35th character and 8 characters forwards, it says; " + subtaskB);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let ans1 = 5>7;
let ans2 = 7 >= 7;
let ans3 = "a" > "b";
let ans4 = "1" < "a";
let ans5 = "2500" < "abcd";
let ans6 = "arne" != "thomas";
let ans7 = (2 === 5) === true;
let ans8 = ("abcd" > "bcd") === false;
printOut("The answer to 7.1 is " + ans1);
printOut("The answer to 7.2 is " + ans2);
printOut("The answer to 7.3 is " + ans3);
printOut("The answer to 7.4 is " + ans4);
printOut("The answer to 7.5 is " + ans5);
printOut("The answer to 7.6 is " + ans6);
printOut("The answer to 7.7 is " + ans7);
printOut("The answer to 7.8 is " + ans8);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let str1 = "254";
let num1 = parseInt(str1);
let str2 = "57.23";
let num2 = parseFloat(str2);
let str3 = "25 kroner";
let num3 = parseInt(str3);
printOut("Number 1 is " + num1 + ", number two is " + num2 + ", and number three is " + num3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut("The random number is " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays = 131;
let totalWeeks = Math.floor(totalDays / 7);
let leftDays = totalDays % 7
printOut("It becomes " + totalWeeks + " weeks and " + leftDays + " days");
printOut(newLine);