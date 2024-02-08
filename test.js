const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator(num1, num2, operation) {
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: Division by zero is not allowed.';
            }
        default:
            return 'Error: Invalid operation.';
    }
}

rl.question('Enter the first number: ', (answer1) => {
    const num1 = parseFloat(answer1);
    rl.question('Enter the second number: ', (answer2) => {
        const num2 = parseFloat(answer2);
        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
            const result = calculator(num1, num2, operation);
            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});