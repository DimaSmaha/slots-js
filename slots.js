/**
 * Create a mini program which can
 * 1. Deposit some money
 * 2. Determine lines user want to bet on
 * 3. Collect money
 * 4. Spin slot machine
 * 5. Check if user won
 * 6. Give their winnings
 * 7. Play again
 *
 * |1|3|1| ----> line 1 lose
 * |2|2|2| ----> line 2 win
 * |3|1|3| ----> line 3 lose
 *
 * if user bet on 3 lines give him 0.33
 */

const prompt = require("prompt-sync")();
let depositValue = 0;
let numberOfLines = 0;
let usersBetValue = 0;

const deposit = () => {
  let depositAmount = prompt("Enter your deposit amount: ");
  depositValue = parseFloat(depositAmount);
  while (isNaN(depositValue) || depositValue <= 0) {
    console.log(
      "Your deposit value is incorrect please enter a positive number"
    );
    depositAmount = prompt("Enter your deposit amount: ");
    depositValue = parseFloat(depositAmount);
  }

  return depositValue;
};

const getNumOfLines = () => {
  let linesAmount = prompt(
    "Enter the number of lines you want to bet 1, 2 or 3: "
  );
  numberOfLines = parseFloat(linesAmount);
  while (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
    console.log(
      "Your lines value is incorrect please enter a positive number 1,2 or 3"
    );
    linesAmount = prompt("Enter the number of lines you want to bet: ");
    numberOfLines = parseFloat(linesAmount);
  }

  return numberOfLines;
};

const collectUserMoney = () => {
  let usersBet = prompt(
    "Please place your bet that is not more than your deposit _-_: "
  );
  usersBetValue = parseFloat(usersBet);
  while (isNaN(usersBetValue) || usersBetValue <= 0) {
    console.log("Your bet value is incorrect please enter a positive number");
    usersBet = prompt(
      "Please place your bet that is not more than your deposit _-_: "
    );
    usersBetValue = parseFloat(usersBet);
  }
  while (
    usersBetValue > depositValue ||
    isNaN(usersBetValue) ||
    usersBetValue <= 0
  ) {
    console.log("You have entered value that is bigger than your deposit _-_");
    usersBet = prompt(
      "Please place your bet that is not more than your deposit _-_: "
    );
    usersBetValue = parseFloat(usersBet);
  }

  return usersBetValue;
};

deposit();
console.log(depositValue);
getNumOfLines();
console.log(numberOfLines);
collectUserMoney();
console.log(usersBetValue);
