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

// const spinSlotMachine = () => {
//   const dataset = [1, 2, 3, 4, 5, 6, 7];
//   const getRandomNumber = Math.floor(Math.random() * dataset.length);

//   let firstNumber = dataset[getRandomNumber - 1];
//   let middleNumber = dataset[getRandomNumber];
//   let lastNumber = dataset[getRandomNumber + 1];

//   if (firstNumber == undefined) {
//     firstNumber = dataset[dataset.length - 1];
//   }

//   if (lastNumber == undefined) {
//     firstNumber = dataset[0];
//   }

//   if (
//     getRandomNumber == dataset.length - 1 ||
//     isNaN(dataset[getRandomNumber])
//   ) {
//     firstNumber = dataset[getRandomNumber - 1];
//     middleNumber = dataset[getRandomNumber];
//     lastNumber = dataset[0];
//   }
//   console.log(getRandomNumber);

//   // return [firstNumber, middleNumber, lastNumber];
//   return {
//     firstNumber: firstNumber,
//     middleNumber: middleNumber,
//     lastNumber: lastNumber,
//   };
// };

const spinSlotMachine = () => {
  const dataset = [1, 2, 3, 4, 5, 6, 7];
  const getRandomNumber1 = Math.floor(Math.random() * dataset.length);
  const getRandomNumber2 = Math.floor(Math.random() * dataset.length);
  const getRandomNumber3 = Math.floor(Math.random() * dataset.length);

  let firstNumber = dataset[getRandomNumber1];
  let middleNumber = dataset[getRandomNumber2];
  let lastNumber = dataset[getRandomNumber3];

  return {
    firstNumber: firstNumber,
    middleNumber: middleNumber,
    lastNumber: lastNumber,
  };
};

const showTheSpinResult = () => {
  const firstColumn = spinSlotMachine();
  const middleColumn = spinSlotMachine();
  const lastColumn = spinSlotMachine();
  console.log(`
  [${firstColumn.firstNumber}] [${middleColumn.firstNumber}] [${lastColumn.firstNumber}]
  [${firstColumn.middleNumber}] [${middleColumn.middleNumber}] [${lastColumn.middleNumber}] 
  [${firstColumn.lastNumber}] [${middleColumn.lastNumber}] [${lastColumn.lastNumber}]
  `);
  return {
    x11: firstColumn.firstNumber,
    x12: middleColumn.firstNumber,
    x13: lastColumn.firstNumber,
    x21: firstColumn.middleNumber,
    x22: middleColumn.middleNumber,
    x23: lastColumn.middleNumber,
    x31: firstColumn.lastNumber,
    x32: middleColumn.lastNumber,
    x33: lastColumn.lastNumber,
  };
};

let firstLineWin = false;
let middleLineWin = false;
let lastLineWin = false;
const showResultAndVerifyWin = () => {
  let results = showTheSpinResult();

  if (results.x11 == results.x12 && results.x11 == results.x13) {
    console.log("First line win");
    firstLineWin = true;
  }
  if (results.x21 == results.x22 && results.x21 == results.x23) {
    console.log("Second line win");
    middleLineWin = true;
  }
  if (results.x31 == results.x32 && results.x31 == results.x33) {
    console.log("Third line win");
    lastLineWin = true;
  }
};

const giveUserAWinnings = () => {
  if (firstLineWin == true && numberOfLines == 1) {
    usersBetValue *= 2;
    return (depositValue += usersBetValue);
  }

  if (firstLineWin == true && middleLineWin == true && numberOfLines == 2) {
    usersBetValue *= 4;
    return (depositValue += usersBetValue);
  }

  if (
    firstLineWin == true &&
    middleLineWin == true &&
    lastLineWin == true &&
    numberOfLines == 3
  ) {
    usersBetValue *= 6;
    return (depositValue += usersBetValue);
  }
  return (depositValue -= usersBetValue);
};

const game = () => {
  deposit();
  console.log(`Your deposit value ${depositValue}`);
  getNumOfLines();
  console.log(`Selected number of lines ${numberOfLines}`);
  collectUserMoney();
  console.log(`Your bet ${usersBetValue}`);
  showResultAndVerifyWin();
  giveUserAWinnings();
  console.log(`Your deposit value ${depositValue}`);
  while (depositValue > 0) {
    console.log(`Do you want to play one more time?`);
    getNumOfLines();
    console.log(`Selected number of lines ${numberOfLines}`);
    collectUserMoney();
    console.log(`Your bet ${usersBetValue}`);
    showResultAndVerifyWin();
    giveUserAWinnings();
    console.log(`Your deposit value ${depositValue}`);
  }
  while (depositValue <= 0) {
    console.log(
      "Unfortunatelly you lost all your deposit do you want to deposit more"
    );
    deposit();
    console.log(`Your deposit value ${depositValue}`);
    getNumOfLines();
    console.log(`Selected number of lines ${numberOfLines}`);
    collectUserMoney();
    console.log(`Your bet ${usersBetValue}`);
    showResultAndVerifyWin();
    giveUserAWinnings();
    console.log(`Your deposit value ${depositValue}`);
  }
};

game();
