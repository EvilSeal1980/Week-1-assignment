/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, "");
    const tokens = sanitizedExpression.split(/([\+\-\*\/\(\)])/).filter(token => token.trim() !== '');

    if (tokens.length === 0) {
      throw new Error("Invalid expression");
    }

    const postfix = this.convertToPostfix(tokens);
    const result = this.evaluatePostfix(postfix);

    return result;
  }

  convertToPostfix(tokens) {
    const operatorStack = [];
    const postfix = [];

    const precedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
    };

    for (const token of tokens) {
      if (token === "+" || token === "-" || token === "*" || token === "/") {
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] !== "(" &&
          precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]
        ) {
          postfix.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== "(") {
          postfix.push(operatorStack.pop());
        }
        if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1] !== "(") {
          throw new Error("Invalid expression");
        }
        operatorStack.pop();
      } else {
        postfix.push(parseFloat(token));
      }
    }

    while (operatorStack.length > 0) {
      if (operatorStack[operatorStack.length - 1] === "(") {
        throw new Error("Invalid expression");
      }
      postfix.push(operatorStack.pop());
    }

    return postfix;
  }

  evaluatePostfix(postfix) {
    const operandStack = [];

    for (const token of postfix) {
      if (typeof token === "number") {
        operandStack.push(token);
      } else {
        if (operandStack.length < 2) {
          throw new Error("Invalid expression");
        }

        const operand2 = operandStack.pop();
        const operand1 = operandStack.pop();
        let result;

        switch (token) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "/":
            if (operand2 === 0) {
              throw new Error("Division by zero");
            }
            result = operand1 / operand2;
            break;
        }

        operandStack.push(result);
      }
    }

    if (operandStack.length !== 1) {
      throw new Error("Invalid expression");
    }

    return operandStack.pop();
  }
}

let calculator = new Calculator();
console.log(calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7"));

module.exports = Calculator;
