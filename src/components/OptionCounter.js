import React from "react";
import styled from "styled-components";

const OptionCounter = ({countArr}) => {
  const countMinus = () => {
    if(countArr.count>1) countArr.setCount(countArr.count - 1);
  };

  const countPlus = () => {
    countArr.setCount(countArr.count + 1);
  };

  return (
    <CounterFrame>
      <CounterButton onClick={countMinus}>-</CounterButton>
      <CounterInput type="number" value={countArr.count} />
      <CounterButton onClick={countPlus}>+</CounterButton>
    </CounterFrame>
  );
};

const CounterFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 27px;
  max-width: 100px;
`;

const CounterButton = styled.button`
  border: 1px solid #e5e7eb;
  border-radius: 0;
  width: 26px;
  height: 115%;
  background-color: white;
  cursor: pointer;
`;

const CounterInput = styled.input`
  width: 50px;
  text-align: center;
  border: 1px solid #e5e7eb;
  border-radius: 0;
  height: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default OptionCounter;
