import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BasketListForm from "../components/BasketListForm";
import BasketTotalPrice from "../components/BasketTotalPrice";
import NumberInCircle from "../components/NumberInCircle";
import { basketAction } from "../redux/actions/basketAction";
import { basketSliceAction } from "../redux/reducers/basketReducer";
import { modalSliceAction } from "../redux/reducers/modalReducer";

const Basket = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const cartTotalList = useSelector((state) => state.basketReducer.cartList);
  const { is_login } = useSelector((state) => state.userReducer);

  useEffect(() => {
    getCartInfo();
  }, []);

  const getCartInfo = async () => {
    try {
      const resCartList = await dispatch(basketAction.getCart(true)).unwrap();
      await dispatch(basketSliceAction.getCartList(resCartList));
    } catch (e) {
      navigator("/");      
      window.alert(e.data.message);
      dispatch(modalSliceAction.modalLoginOpen());
    }
  };
if(is_login)
  return (
    <BasketFrame>
      <BasketArea>
        <BasketTitle>
          <div>장바구니</div>
          <NumberInCircle
            number={cartTotalList.buyProductList.length}
            background="#4f4f4f"
            color="white"
            scale="20px"
          />
        </BasketTitle>
        <BasketListForm cartTotalList={cartTotalList} />
        <BasketTotalPrice cartTotalList={cartTotalList} />
        <BasketButton>
          <button>주문하기</button>
          <a href="/">계속 쇼핑하기</a>
        </BasketButton>
      </BasketArea>
    </BasketFrame>
  );
};

const BasketFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BasketArea = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 1280px;
  margin-top: 1rem;
`;

const BasketTitle = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const BasketButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  button {
    width: 280px;
    height: 48px;
    padding: 0 24px;
    font-size: 14px;
    margin-top: 1rem;
    border-color: #4f4f4f;
    background-color: #4f4f4f;
    color: #fff;
    cursor: pointer;
  }
  a {
    font-size: 13px;
    margin-top: 1rem;
  }
`;

export default Basket;
