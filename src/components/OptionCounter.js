import React from "react";
import styled from "styled-components";

const OptionCounter = ({countArr}) => {
  const countMinus = () => {
    if(countArr.count>1) countArr.setCount(countArr.count - 1);
  };

  const countPlus = () => {
    countArr.setCount(Number(countArr.count) + 1);
  };

  const inputChange =(e) =>{
    Number(e.target.value)>0?countArr.setCount(e.target.value):countArr.setCount(1);
  }

  return (
    <CounterFrame>
      <CounterButton onClick={countMinus}>-</CounterButton>
      <CounterInput type="number" onChange={(e)=>inputChange(e)} value={countArr.count} />
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
  @media screen and (max-width: 500px) {
    height: 20px;
  }
`;

const CounterButton = styled.button`
  border: 1px solid #e5e7eb;
  border-radius: 0;
  width: 26px;
  height: 115%;
  background-color: white;
  cursor: pointer;
  @media screen and (max-width: 500px) {
      font-size: 10px;
      width: 17px;
  }
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
  @media screen and (max-width: 500px) {
      font-size: 10px;
      width: 30px;
  }
`;

export default OptionCounter;
