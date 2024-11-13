"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Account_Types = {
    Normal: "Brukskonto",
    Savings: "Sparekonto", 
    Credit: "Kreditkonto", 
    Pension: "Pensionskonto"
}

printOut(Object.values(Account_Types).join(", "));

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount {
    #type
    constructor(aAccountType) {
        this.#type = aAccountType       
    }

    toString() {
        return this.#type
    }

    setType(newType) {
        printOut("Account is changed from " + this.#type + " to " + newType);
        this.#type = newType;
    }
}

const myAccount = new TAccount("Brukskonto");

printOut("myAccount = " + myAccount.toString());

myAccount.setType("Sparekonto");

printOut("myAccount = " + myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount1 {
    #balance
    #type
    constructor(aAccountType, aBalance) {
        this.#balance = aBalance;
        this.#type = aAccountType;

        }
        toString() {
            return this.#type
        }

        setType(aType) {
            printOut("Account is changed from " + this.#type + " to " + aType);
            this.#type = aType;
        }

        getBalance() {
            printOut("My account balance is " + this.#balance)
        }

        deposit(aAmount) {
            let deposit = aAmount;
            this.#balance = this.#balance + deposit
            printOut("Deposit of " + deposit + ", new balance is " + this.#balance)
        }

        withdraw(aAmount) {
            let withdraw = aAmount;
            this.#balance = this.#balance - withdraw
            printOut("Withdrawal of " + withdraw + ", new balance is " + this.#balance);
        }

    }

const myAccount2 = new TAccount1("Brukskonto", 0, 0)

myAccount2.deposit(100);
myAccount2.withdraw(25);
myAccount2.getBalance();
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount2 {
    #balance
    #type
    constructor(aAccountType, aBalance) {
        this.#balance = aBalance;
        this.#type = aAccountType;
        
        }
        toString() {
            return this.#type
        }

        setType(aType) {
            let drawCount = 0
            printOut("Account is changed from " + this.#type + " to " + aType);
            this.#type = aType;
        }

        getBalance() {
            printOut("My account balance is " + this.#balance)
        }

        deposit(aAmount) {
            let deposit = aAmount;
            this.#balance = this.#balance + deposit
            printOut("Deposit of " + deposit + ", new balance is " + this.#balance)
        }
        
        withdraw(aAmount) {
            let withdraw = aAmount;
            
            switch(this.#type){
                case "Brukskonto":
                    this.#balance = this.#balance - withdraw
                    printOut("Withdrawal of " + withdraw + ", new balance is " + this.#balance);
                    break;
                case "Sparekonto":
                    drawCount++
                    if (drawCount > 3) {
                        printOut("You can't withdraw from a " + this.#type + " more than three times!")
                    } 
                    else {
                    this.#balance = this.#balance - withdraw
                    printOut("Withdrawal of " + withdraw + ", new balance is " + this.#balance);
                    }
                    break;

                case "Pensionkonto":
                    printOut("You can't withdraw from a " + this.#type)
                    break;
            }
        }

    }
    let drawCount = 0
const myAccount3 = new TAccount2("Sparekonto", 75,)
myAccount3.deposit(25)

myAccount3.withdraw(30);

myAccount3.withdraw(30);

myAccount3.withdraw(30);

myAccount3.withdraw(30);

myAccount3.setType("Pensionkonto")

myAccount3.withdraw(30);

myAccount3.setType("Sparekonto")

myAccount3.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount3 {
    #type;
    #currencyType = "NOK";
    #balance = 0
    #withdrawCount = 0

    static CurrencyTypes = {
        NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
        USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
        GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
        INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
        AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
        PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
        SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        THB: { value: 3.3289, name: "Thai baht", denomination: "฿" },
    };

    constructor (aAccountType, aBalance) {
        this.#type = aAccountType;
    }

    setType(aType) {
            this.#withdrawCount = 0
            printOut("Account is changed from " + this.#type + " to " + aType);
            this.#type = aType;
        }

        getBalance() {
            printOut("My account balance is " + this.#balance)
        }

        deposit(aAmount) {
            let deposit = aAmount;
            this.#balance = this.#balance + deposit
            printOut("Deposit of " + deposit + ", new balance is " + this.#balance)
        }
        
        withdraw(aAmount) {
            let withdraw = aAmount;
            
            switch(this.#type){
                case "Brukskonto":
                    this.#balance = this.#balance - withdraw
                    printOut("Withdrawal of " + withdraw + ", new balance is " + this.#balance);
                    break;
                case "Sparekonto":
                    this.#withdrawCount++
                    if (this.#withdrawCount > 3) {
                        printOut("You can't withdraw from a " + this.#type + " more than three times!")
                    } 
                    else {
                    this.#balance = this.#balance - withdraw
                    printOut("Withdrawal of " + withdraw + ", new balance is " + this.#balance);
                    }
                    break;

                case "Pensionkonto":
                    printOut("You can't withdraw from a " + this.#type)
                    break;
            }
        }

    setType(newType){
        printOut("The Account type has changed from " + this.#type + " to " + newType)
        this.#type = newType        
        }

    setNewCurrency(newCurrency) {
        if (newCurrency == this.#currencyType) {
            return;
        } else if (TAccount.CurrencyTypes[newCurrency]) {
            printOut("The account currency has changed from " + this.#currencyType + " to " + newCurrency);
            this.#currencyType = newCurrency;
        }

    } 

    }

const myAccount4 = new TAccount3();

myAccount4.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function currencyConverter(amount, fromCurrency, toCurrency, currencyTypes) {
    const fromValue = currencyTypes[fromCurrency].value;
    const toValue = currencyTypes[toCurrency].value;
    return (amount / fromValue) * toValue;
}

class TAccount4 {
    
    #type;
    #currencyType = "NOK";
    #balance = 0
    #withdrawCount = 0


    static CurrencyTypes = {
        NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
        EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
        USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
        GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
        INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
        AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
        PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
        SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
        CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
        THB: { value: 3.3289, name: "Thai baht", denomination: "฿" },
    };

    constructor (aAccountType, aBalance) {
        this.#type = aAccountType;
        this.#balance = aBalance;
    }

    setType(aType) {
            this.#withdrawCount = 0
            printOut("Account is changed from " + this.#type + " to " + aType);
            this.#type = aType;
        }

        getBalance() {
            printOut("My account balance is " + this.#balance)
        }

        deposit(aAmount) {
            let deposit = aAmount;
            this.#balance = this.#balance + deposit
            printOut("Deposit of " + deposit + ", new balance is " + this.#balance)
        }
        
        withdraw(aAmount) {
            let withdraw = aAmount;
            
            switch(this.#type){
                case "Brukskonto":
                    this.#balance = this.#balance - withdraw
                    printOut("Withdrawal of " + withdraw + ", new balance is " + this.#balance);
                    break;
                case "Sparekonto":
                    this.#withdrawCount++
                    if (this.#withdrawCount > 3) {
                        printOut("You can't withdraw from a " + this.#type + " more than three times!")
                    } 
                    else {
                    this.#balance = this.#balance - withdraw
                    printOut("Withdrawal of " + withdraw + ", new balance is " + this.#balance);
                    }
                    break;

                case "Pensionkonto":
                    printOut("You can't withdraw from a " + this.#type)
                    break;
            }
        }

    setType(newType){
        printOut("The Account type has changed from " + this.#type + " to " + newType)
        this.#type = newType        
        }

    
    setNewCurrency(newCurrency) {
        
        
        if (newCurrency === this.#currencyType) {
            printOut("Currency type is already set to " + newCurrency);
            return;
        } else if (TAccount4.CurrencyTypes[newCurrency]) {
            printOut("The account currency has changed from " + this.#currencyType + " to " + newCurrency);
            this.#currencyType = newCurrency;
            this.#balance = currencyConverter(this.#balance, this.#currencyType, newCurrency, TAccount4.CurrencyTypes);
            printOut("New balance is " + currencyConverter(this.#balance) + newCurrency)

        } else {
            printOut("Invalid currency type: " + newCurrency);
        }

    }
}


    const myAccount5 = new TAccount4("Brukskonto", 1000);

    myAccount5.setNewCurrency("EUR")

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
