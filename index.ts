#!/usr/bin/env node


import inquirer from "inquirer";

const answer: {
  amount:number,
  amountfrom: "PKR" | "USD" | "AED"  | "JPY",
  amountto: "PKR" | "USD" | "AED" | "JPY"


} =await inquirer.prompt([
  { message: "Type Your Conversion Amount", type: "number", name: "amount" },
  {
    message: "Which Curency Do You Convert From ",
    type: "list",
    name: "amountfrom",
    choices: ["PKR", "USD", "AED", "JPY"],
  },
  {
    message: "Which Curency convert to",
    type: "list",
    name: "amountto",
    choices: ["PKR", "USD", "AED", "JPY"],
  },
]);

let Conversion={
  PKR: {
    USD: 0.0036,
    AED: 0.013,
    JPY: 1.84,
    PKR: 1,
  },
  USD: {

    PKR: 278,
    AED: 3.67,
    JPY: 151.4,
    USD: 1,
  },
  AED: {
    PKR: 76.22,
    USD: 0.27,
    JPY: 41.23,
    AED: 1,
  },
  JPY: {
    PKR: 1.84,
    USD: 0.0066,
    AED: 0.024,
    JPY: 1,
  },
};
const {amount , amountfrom , amountto}=answer;

if (amount && amountfrom && amountto)
{let result = Conversion[amountfrom][amountto] * amount
console.log(`your conversion amount is`,{result})
}
else {
  console.log("invalid! please select a corrext option ")
}




