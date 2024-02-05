//Collect User Money
const prompt = require("prompt-sync")();
const {SYMBOLS_COUNT,SYMBOL_VALUES,ROWS,COLS} = require("./globalVariables")






const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid Deposit amount. Try Again")
        return deposit()
    }
    else {
        return numberDepositAmount
    }
};

const getNumberOfLines = () =>{
    const numberOfLines = prompt("Enter the number of lines(1-3): ")
    const integerNumberOfLines = parseFloat(numberOfLines);
    if (isNaN(integerNumberOfLines) || integerNumberOfLines < 1 || integerNumberOfLines > 3){
        console.log("Invalid number of lines. Try Again")
        return getNumberOfLines()
    }
    else {
        return integerNumberOfLines
    }
};

const getBet = (balance,lines) =>{
    const bet = prompt("Enter bet amount: ")
    const numberBet = parseFloat(bet);
    if (isNaN(numberBet) || numberBet < 1 || numberBet > (balance/ lines)){
        console.log("Invalid bet. Try Again")
        return getNumberOfLines()
    }
    else {
        return numberBet
    }
}

const spin = () =>{
    const symbols = []
    for (const [symbol,count] in Object.entries(SYMBOLS_COUNT)){
        console.log(symbol,count)
    }
}

spin()
// let balance = deposit();
// const numberOfLines = getNumberOfLines();
// const bet = getBet(balance,numberOfLines)