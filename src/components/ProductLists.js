import React from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import ItemCardInList from "../components/ItemCardInList";
import ClipLoader from "react-spinners/ClipLoader";

const ProductLists = ({ loading, productInfo, totalCount, page, setPage }) => {
    
  if (loading) {
    return (
      <SpinnerWrap>
        <ClipLoader color="black" loading={loading} size={150} />
      </SpinnerWrap>
    );
  } else
  return (
    <HomeArea>
      <HomeBox>
        {productInfo &&
          productInfo.map((itemList, index) => (
            <ItemCardInList key={index} itemList={itemList} />
          ))}
      </HomeBox>
      <Pagination total={totalCount} limit={15} page={page} setPage={setPage} />
    </HomeArea>
  );
};

const SpinnerWrap = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 1024px) {
    max-width: 1400px;
    margin: 60px auto 0px;
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

export default ProductLists;
