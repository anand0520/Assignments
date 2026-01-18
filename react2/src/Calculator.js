import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(a + b);
        break;
      case "subtract":
        setResult(a - b);
        break;
      case "multiply":
        setResult(a * b);
        break;
      case "divide":
        if (b === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(a / b);
        }
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={() => calculate("add")}>+</button>
      <button onClick={() => calculate("subtract")}>-</button>
      <button onClick={() => calculate("multiply")}>×</button>
      <button onClick={() => calculate("divide")}>÷</button>

      <div className="result">{result !== null && `Result: ${result}`}</div>
    </div>
  );
};

export default Calculator;
