import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const ItemCardInList = () => {
  const nevigate = useNavigate();
  const GotoDetail = (e) => {
    e.preventDefault();
    nevigate("/detail/1");
  };

  return (
    <ItemCardFrame>
      <CardImageArea onClick={(e) => GotoDetail(e)}>
        <img
          className="before"
          src="https://cdn.imweb.me/thumbnail/20220513/1cbde571daa3b.jpg"
        />
        <img
          className="after"
          src="https://cdn.imweb.me/thumbnail/20211201/468add0b8f3d2.jpg"
        />
      </CardImageArea>
      <CardItemInfoArea>
        <ItemTitleBox to="/detail/1">Season Notebook, Sweet Home (diary)</ItemTitleBox>
        <p>9,000원</p>
      </CardItemInfoArea>
    </ItemCardFrame>
  );
};

const ItemCardFrame = styled.div`
  max-width: calc(100% / 3);
  width: 100%;
  margin: 0 0 40px;
  @media screen and (max-width: 500px) {
        max-width: calc(100% / 2);
    }
`;

const CardImageArea = styled.div`
  margin: 0px 7.5px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .before {
    display: block;
  }
  .after {
    position: absolute;
    top: 0px;
    left: 0px;
    display: none;
  }
  &:hover .after {
    display: block;
  }
`;

const CardItemInfoArea = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 20px 0;
  p {
    font-weight: bold;
    margin: 0.5rem 0 0 0;
  }
`;

const ItemTitleBox = styled(Link)`
  margin: 0px;
  text-decoration: none;
  color: black;
  font-size: 14px;
  a{
    
  }
`;

export default ItemCardInList;
