import React from "react";
import styled from "styled-components";

const NumberInCircle = ({number}) => {
  return <CircleShape>{number}</CircleShape>;
};

const CircleShape = styled.div`
  width: 17px;
  height: 17px;
  border-radius:50%;
  font-size: 5px;
  font-weight: bold;
  color: #4f4f4f;
  background: rgba(79,79,79,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NumberInCircle;
