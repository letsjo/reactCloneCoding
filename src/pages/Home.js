import React from "react";
import CategoryBar from "../components/CategoryBar";
import styled from "styled-components";
import ItemCardInList from "../components/ItemCardInList";
import PageNumber from "../components/PageNumber";

const Home = () => {
  return (
    <HomeFrame>
      <HomeCategoryArea>
        <CategoryBar />
      </HomeCategoryArea>
      <HomeArea>
        <HomeBox>
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
          <ItemCardInList />
        </HomeBox>
        <PageNumber />
      </HomeArea>
    </HomeFrame>
  );
};

const HomeFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 2000px;
  position: relative;
  top: 0;
  width: 100%;
  @media screen and (max-width: 990px) {
    position: relative;
    flex-direction: column;
    width: 95%;
  }
`;

const HomeCategoryArea = styled.div`
  height: auto;
  width: 180px;
  max-width: 180px;
  margin-left: 5rem;
  @media screen and (max-width: 990px) {
    width: 100%;
    max-width: none;
    margin-bottom: 1rem;
    margin-left: 0rem;
    max-width: none;
  }
`;

const HomeArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  max-width: 1660px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

const HomeBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Home;
