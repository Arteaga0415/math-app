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

import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

test("Incrementa el contador", () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
