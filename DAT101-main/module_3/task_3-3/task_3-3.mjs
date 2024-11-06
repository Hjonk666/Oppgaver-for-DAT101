"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function task1() { 
    printOut(Date())
}
task1()
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const pi = 3.1415926535897932384626433832795028841971
function circleCalculations(radius) {
    let diameter = 2 * radius;
    printOut("The diameter is " + diameter.toFixed(2) + "cm");
    let circumference = diameter * pi;
    printOut("The circumference is " + circumference.toFixed(2) + "cm");
    let circleArea = pi * radius ^ 2;
    printOut("The area of the circle is " + circleArea.toFixed(2) + "cm^2");
}

circleCalculations(4)

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleCalc(length, width) {
    let rectangleCircumference = (length + width) * 2;
    printOut("The circumference of the rectangle is " + rectangleCircumference + "cm");
    let rectangleArea = length * width;
    printOut("The area of the rectangle is " + rectangleArea + "cm^2");
}

rectangleCalc(4, 2)
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Fahrenheit = 0;
let Celsius = 0;    
let Kelvin = 0;
let ETemperatureType = [Celsius, Fahrenheit, Kelvin]
function convertTemperature(aTemperature, aType) {
    
    switch(aType){
        case ETemperatureType.Celsius:
            printOut("Convert from Celsius");
            Celsius = aTemperature;
            //Celsius = aTemperature;
            //To Kelvin; + 273.15
            //To fahrenheit; Kelvin - 273.15*9/5 + 32
            Fahrenheit = (Celsius * 9/5) + 32;
            Kelvin = Celsius + 273.15
            printOut("The temp is " + Fahrenheit + "Fahrenheit or " + Kelvin + "Kelvin")
            break;
        case ETemperatureType.Fahrenheit:
            printOut("Convert from Fahrenheit");
            Fahrenheit = aTemperature;
            //Fahrenheit = aTemperature;
            //To Kelvin; (F - 32) * 5/9 + 273.15
            //To Celsius; (F - 32) * 5/9
            Kelvin = (Fahrenheit - 32) * 9/5 + 273.15
            Celsius = (Fahrenheit - 32) * 9/5
            printOut("The temp is " + Fahrenheit + "Fahrenheit or " + Celsius + "Celsius")
            break;
        case ETemperatureType.Kelvin:
            printOut("Convert from Kelvin");
            Kelvin = aTemperature;
            //Kelvin = aTemperature;
            //To Celsius; K - 273.15
            //To Fahrenheit; (K - 273.15) * 9/5 + 32
            Celsius = Kelvin - 273.15
            Fahrenheit = (Kelvin - 273.15) * 9/5 + 32
            printOut("The temp is " + Fahrenheit + "Fahrenheit or " + Celsius + "Celsius")
            break;
    }
}
 convertTemperature(0, ETemperatureType.Celsius);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100).*/

function calculateNetPrice(aPrice, aTaxGroup) {
    let net = 0;
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;

    printOut("taxGroup = " + taxGroup)

    switch(taxGroup) {
        case "NORMAL":
            vat = 25
            break;
        case "FOOD":
            vat = 15
            break;
        case "HOTEL":
            vat = 10
            break;
    }
    if (!Number.isNaN(vat)) {
        net = (100 * aPrice) / (vat + 100)
    }
    return net;
}
calculateNetPrice(100, "hotel");
const netPrice1 = net;
if (Number.isNaN(netPrice1)){
    printOut("Unknown VAT group!");
} else {
    printOut("netPrice1 = " + netPrice1.toFixed(2));
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function velocityCalc(speed, distance, time) {
    if (speed !== 0 && distance !== 0 && time !== 0) {
        printOut("You... you have it all, the fuck you doin'?")
    } else if (distance == 0) {
        distance = speed * time;
        printOut("The distance is " + distance + "Km");
    } else if (time == 0) {
        time = distance / speed
        printOut("Travel-time is " + time + "hours");
    } else if (speed == 0) {
        speed = distance / time;
        printOut("The speed is " + speed + "Km/h");
    }
}
velocityCalc(0, 100, 10)
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let output = 0
function task8(textString, maxStringSize, textCharacter, consecutiveInsert) {

    if (textString.length >= maxStringSize){
        return textString
    } else if (textString.length < maxStringSize) {
        output = textString

        if (consecutiveInsert == true) {
            do {
            output += textCharacter
            } while (output.length < maxStringSize)
                return(output);
        } else {
            do {
                output = textCharacter + output;
                } while (output.length < maxStringSize)
                    return(output);
        }
        
    }
}
task8 ("Funny", 10, "_", true)
printOut("" + output);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testIfMathIsFun(){
    let op = 1
    let line = 1
    
    let ok = false;
    do{
    let sumLeft = 0;
    for(let left = 0; left < line + 1; left++){
        sumLeft += op;
        op++;    
    }

    let sumRight = 0;
    for (let right = 0; right < line; right++) {
        sumRight += op;
        op++;
    }

    if(sumLeft !== sumRight){
        printOut("Math ain't fun >:(")
        ok = false;
    } else {
        ok = true
    }
    line++;
    } while (ok && line <= 200);
    if (ok = true) {
        printOut("Math is FUN!!")
    }

}
testIfMathIsFun();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorialCalc(n) {
    
    if (n === 0) {
        return 1;
    }
    
    return n * factorialCalc(n - 1);
}


let result = factorialCalc(3); 
printOut(" " + result) 


printOut(newLine);
