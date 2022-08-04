import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BasketItem = ({ buyProduct }) => {
  const navigator = useNavigate();

  const goToDetail = (e, id) => {
    e.preventDefault();
    navigator(`/detail/${id}`);
  };

  return (
    <BasketItemArea>
      <div>
        <div>
          <input type="checkbox" />
          <img
            src={buyProduct.imgUrl}
            onClick={(e) => goToDetail(e, buyProduct?.product.id)}
          />
          <div>
            <div onClick={(e) => goToDetail(e, buyProduct?.product.id)}>
              {buyProduct?.product.productName}
            </div>
          </div>
        </div>
        <IoIosClose size={30} />
      </div>
      <div>{buyProduct?.count}</div>
      <div>
        {(buyProduct?.product.price * buyProduct?.count).toLocaleString(
          "ko-KR"
        )}
        원
      </div>
    </BasketItemArea>
  );
};

const BasketItemArea = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 0.5rem;
  border-bottom: 1px solid #e5e7eb;

  color: #4f4f4f;
  font-size: 15px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: 100px;

    border-right: 1px solid #e5e7eb;
  }
  div:nth-child(1) {
    flex-grow: 6;
    justify-content: space-between;
    align-items: flex-start;
    div {
      justify-content: flex-start;
      align-items: flex-start;
      border: none;
      div {
        cursor: pointer;
      }
      svg {
        margin-right: 0.5rem;
      }
    }
    img {
      width: 80px;
      height: 80px;
      border: 1px solid #e5e7eb;
      margin: 0 1rem 0 1rem;
      cursor: pointer;
    }
    input {
      margin: 0.2rem 0.5rem 0 0.5rem;
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

export default BasketItem;
