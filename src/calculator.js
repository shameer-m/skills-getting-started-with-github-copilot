// Simple calculator with four operations.
const { formatDateToISO, reverseString } = require('./utils');
const { add, subtract, multiply, divide } = require('./newCalculator');

// Main input loop using Node.js readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    readline.question('Enter operation (+, -, *, /, date, reverse) or q to quit: ', (op) => {
        if (op === 'q') {
            readline.close();
            return;
        }
        if (op === 'date') {
            readline.question('Enter date in DD-MM-YYYY format: ', (dateStr) => {
                const result = formatDateToISO(dateStr);
                console.log('Formatted date:', result);
                promptUser();
            });
            return;
        }
        if (op === 'reverse') {
            readline.question('Enter string to reverse: ', (str) => {
                const result = reverseString(str);
                console.log('Reversed string:', result);
                promptUser();
            });
            return;
        }
        readline.question('Enter first number: ', (num1) => {
            readline.question('Enter second number: ', (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let result;
                switch (op) {
                    case '+':
                        result = add(a, b);
                        break;
                    case '-':
                        result = subtract(a, b);
                        break;
                    case '*':
                        result = multiply(a, b);
                        break;
                    case '/':
                        result = divide(a, b);
                        break;
                    default:
                        result = 'Invalid operation';
                }
                console.log('Result:', result);
                promptUser();
            });
        });
    });
}

if (require.main === module) {
    promptUser();
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
