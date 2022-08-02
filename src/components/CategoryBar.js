import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryBar = ({params, setCategoryId}) => {
  return (
    <CategoryFrame>
      <CategoryText to="/" onClick={(e)=>setCategoryId("ALL")}>
        <div>ALL</div>
      </CategoryText>
      <CategoryText to="/NOTES" onClick={(e)=>setCategoryId("NOTES")}>
        <div>NOTES</div>
      </CategoryText>
      <CategoryText to="/PAPER&PRINT" onClick={(e)=>setCategoryId("PAPER%26PRINT")}>
        <div>PAPER & PRINT</div>
      </CategoryText>
      <CategoryText to="/BAG&POUCH" onClick={(e)=>setCategoryId("BAG%26POUCH")}>
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
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
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
