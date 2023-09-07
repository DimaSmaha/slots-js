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

const deposit = () => {
  let depositAmount = prompt("Enter your depost amount: ");
  depositValue = parseFloat(depositAmount);
  while (isNaN(depositValue) || depositValue <= 0) {
    console.log(
      "Your deposit value is incorrect please enter a positive number"
    );
    depositAmount = prompt("Enter your depost amount: ");
    depositValue = parseFloat(depositAmount);
  }

  return depositValue;
};

deposit();
console.log(depositValue);
