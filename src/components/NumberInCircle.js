import React from "react";
import styled, { css } from "styled-components";

const NumberInCircle = ({
  number,
  scale = "17px",
  color = "#4f4f4f",
  background = "rgba(79, 79, 79, 0.2)",
}) => {
  return (
    <CircleShape scale={scale} color={color} background={background}>
      {number}
    </CircleShape>
  );
};

const CircleShape = styled.div`
  ${({ scale, color, background }) => {
    return css`
      width: ${scale};
      height: ${scale};
      border-radius: 50%;
      font-size: 5px;
      font-weight: bold;
      color: ${color};
      background: ${background};
      display: flex;
      justify-content: center;
      align-items: center;
    `;
  }}
`;

export default NumberInCircle;
