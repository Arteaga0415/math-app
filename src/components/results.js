import React from "react";
import "./results.css";
import PropTypes from "prop-types";

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

Results.propTypes = { result: PropTypes.string.isRequired };

export default Results;
