import React, { useState } from "react";
import { MathOperations } from "../utils/math";
import "./calculator.css";
import Results from "./results";
import Input from "./input";
import Button from "./button";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || (operation !== "sqrt" && isNaN(number2))) {
      setResult("Error: Ingresa números válidos");
      return;
    }

    switch (operation) {
      case "add":
        setResult(MathOperations.add(number1, number2));
        break;
      case "subtract":
        setResult(MathOperations.subtract(number1, number2));
        break;
      case "multiply":
        setResult(MathOperations.multiply(number1, number2));
        break;
      case "divide":
        setResult(MathOperations.divide(number1, number2));
        break;
      case "sqrt":
        setResult(MathOperations.sqrt(number1));
        break;
      default:
        setResult("Operación inválida");
    }
  };

  return (
    <div className="calculator-container">
      <h1 style={{ color: "red" }}>Calculadora</h1>
      <div className="input-container">
        <Input value={num1} setValue={setNum1} testId="num1" />
        <Input value={num2} setValue={setNum2} testId="num2" />
      </div>
      <div className="container">
        <Button
          placeHolder={"+"}
          onClickAction={handleCalculate}
          testId="add"
        />
        <Button
          placeHolder={"-"}
          onClickAction={handleCalculate}
          testId="subtract"
        />
        <Button
          placeHolder={"x"}
          onClickAction={handleCalculate}
          testId="multiply"
        />
        <Button
          placeHolder={"/"}
          onClickAction={handleCalculate}
          testId="divide"
        />
      </div>
      <Results result={result} />
    </div>
  );
};

export default Calculator;
