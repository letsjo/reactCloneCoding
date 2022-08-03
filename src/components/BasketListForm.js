import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import BasketItem from "./BasketItem";
import { basketAction } from "../redux/actions/basketAction";

const BasketListForm = ({cartTotalList}) => {
  return (
    <BasketListFrame>
      <BasketContentTop>
        <BasketTitleArea>
          <div>
            <input type="checkbox" />
            상품정보
          </div>
          <div>수량</div>
          <div>주문금액</div>
        </BasketTitleArea>
        <div>배송정보</div>
      </BasketContentTop>

      <BasketContentBottom>
        <BasketContentBottomLeft>
          {cartTotalList &&
            cartTotalList.buyProductList.map((buyProduct, index) => (
              <BasketItem key={index} buyProduct={buyProduct} />
            ))}
        </BasketContentBottomLeft>
        <DeliveryFeeZone>무료</DeliveryFeeZone>
      </BasketContentBottom>
      <BasketUnderArea>
        <BasketLeftBox>
          <button>선택상품 삭제</button>
          <button>품절상품 삭제</button>
        </BasketLeftBox>
        <BasketRightBox>
          <div>결제 시 추가 할인 적용에 따라 배송비가 변경될 수 있습니다.</div>
          <div>
            네이버페이로 결제 시 할인금액과 배송비가 변경될 수 있습니다.
          </div>
        </BasketRightBox>
      </BasketUnderArea>
    </BasketListFrame>
  );
};

const BasketListFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: rgba(79, 79, 79, 0.6);
  font-size: 13px;
`;

const BasketTitleArea = styled.div`
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: 100px;
  }
  div:nth-child(1) {
    flex-grow: 6;
    justify-content: flex-start;
    align-items: flex-start;
    img {
      width: 80px;
      height: 80px;

      margin: 0 1rem 0 1rem;
    }
    input {
      margin: 0 0.5rem 0 0.5rem;
      zoom: 1.2;
    }
  }
  div:nth-child(2) {
    flex-grow: 2;
  }
  div:nth-child(3) {
    flex-grow: 2;
  }
`;

const BasketContentTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  border-top: 2px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  div {
    display: flex;
    flex-direction: row;
    flex-basis: 100px;
  }
  div:nth-child(1) {
    flex-grow: 8;
  }
  div:nth-child(2) {
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

const BasketContentBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const BasketContentBottom = styled.div`
  display: flex;
  flex-direction: row;
  div {
    flex-basis: 100px;
  }
  div:nth-child(1) {
    flex-grow: 8;
  }
  div:nth-child(2) {
    flex-grow: 1;
  }
`;

const DeliveryFeeZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #4f4f4f;
  font-size: 15px;
`;

const BasketUnderArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const BasketLeftBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  button {
    border: 1px solid rgba(79, 79, 79, 0.2);
    background-color: white;
    color: #212121;
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #4f4f4f;
  }
`;

const BasketRightBox = styled.div``;

export default BasketListForm;
