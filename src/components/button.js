import React from "react";

const Button = ({ placeHolder, onClickAction, testId }) => {
  return (
    <>
      <button data-testid={testId} onClick={() => onClickAction(testId)}>
        {placeHolder}
      </button>
    </>
  );
};

export default Button;
