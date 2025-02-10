import React from "react";
import "./input.css";

const Input = ({ value, setValue, testId }) => {
  return (
    <input
      className="input"
      data-testid={testId}
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Número"
    />
  );
};

export default Input;
