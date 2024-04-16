#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any ={
    USD: 1, //Base currency
    EUR: 0.94,
    GBP: 0.76,
    INR: 83.63,
    PKR: 278.12,
    ALL: 95.00,
    AED: 3.76,
    NZD: 1.70,
    AFN: 72.21,
    KWD: 0.31
};
let user_answer = await inquirer.prompt(
    [
       {
            name: "from",
            message: "Enter from currency:",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "ALL", "AED", "NZD", "AFN", "KWD"]
        },
        {
            name: "to",
            message: "Enter to currency:",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "ALL", "AED", "NZD", "AFN", "KWD"]
        },
        {
            name: "amount",
            message: "Enter your amount:",
            type: "number"
        }
    ]
);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount /fromamount;  //USD base currency
let convertedAmount = baseAmount * toamount;
let roundNumber = convertedAmount.toFixed(2);
console.log(roundNumber);
