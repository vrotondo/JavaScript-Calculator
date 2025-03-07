let history = [];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is impossible!";
    }
    return a / b;
}

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
};

function calculate(a, b, operation) {
    if (!operations.hasOwnProperty(operation)) {
        return "Error: Invalid operation!";
    }

    const result = operations[operation](a, b);

    history.push({
        a: a,
        b: b,
        operation: operation,
        result: result
    });

    return result;
}

function showHistory() {
    const historyDiv = document.getElementById('history');
    if (history.length === 0) {
        historyDiv.innerText = "There have been no calculations made so far...";
    } else {
        historyDiv.innerHTML = "<strong>History:</strong><br>";
        history.forEach((calc, index) => {
            historyDiv.innerHTML += `${index + 1}: ${calc.a} ${calc.operation} ${calc.b} = ${calc.result}<br>`;
        });
    }
}

function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Error: Please enter valid numbers.";
        return;
    }

    const result = calculate(num1, num2, operation);
    document.getElementById('result').innerText = `Result: ${result}`;
}