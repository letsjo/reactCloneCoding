import React from "react";
import styled from "styled-components";

const BasketTotalPrice = () => {
  return (
    <BasketTotalFrame>
      <div>총 주문 상품 4개</div>
      <BasketTotalArea>
        <TotalText>
          <div>71,000원</div>
          <div>상품금액</div>
        </TotalText>
        <div>+</div>
        <TotalText>
          <div>무료</div>
          <div>배송비</div>
        </TotalText>
        <div>=</div>
        <TotalText>
          <div>710,000원</div>
          <div>총 주문금액</div>
        </TotalText>
      </BasketTotalArea>
    </BasketTotalFrame>
  );
};

const BasketTotalFrame = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  div {
    padding: 0.5rem;
    font-size: 14px;
  }
`;

const BasketTotalArea = styled.div`
  display: flex;
  width: 100%;

  border-top: 1px solid rgba(33, 33, 33, 0.15);
  border-bottom: 1px solid black;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    font-size: 24px;
  }
`;

const TotalText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    font-weight: bold;
  }
  div:nth-child(2) {
    font-size: 13px;
  }
`;

export default BasketTotalPrice;
