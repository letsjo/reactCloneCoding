import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <CategoryFrame>
      <CategoryText to="/">
        <div>All</div>
      </CategoryText>
      <CategoryText to="/1">
        <div>NOTES</div>
      </CategoryText>
      <CategoryText to="/2">
        <div>PAPER & PRINT</div>
      </CategoryText>
      <CategoryText to="/3">
        <div>BAG & POUCH</div>
      </CategoryText>
    </CategoryFrame>
  );
};

const CategoryFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 18px;
  width: 180px;
  min-width: 180px;
  @media screen and (max-width: 990px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: none;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const CategoryText = styled(Link)`
  text-decoration: none;
  div {
    color: black;
    cursor: pointer;
  }
  div:hover {
    text-decoration: underline;
  }
`;

export default CategoryBar;
