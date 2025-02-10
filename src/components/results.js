import React from "react";
import "./results.css";

const Results = ({ result }) => {
  return (
    <div className="flex flex-row row-container">
      <h2>Resultado:</h2>
      <h2 className="result" data-testid="result">
        {result}
      </h2>
    </div>
  );
};

export default Results;
