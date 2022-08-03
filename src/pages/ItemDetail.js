import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import ItemOptionInDetail from "../components/ItemOptionInDetail";
import ItemTotalPriceInDetail from "../components/ItemTotalPriceInDetail";
import NumberInCircle from "../components/NumberInCircle";
import CommentList from "../components/CommentList";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../redux/actions/itemsAction";
import { modalSliceAction } from "../redux/reducers/modalReducer";
import { basketAction } from "../redux/actions/basketAction";
import { basketSliceAction } from "../redux/reducers/basketReducer";

const ItemDetail = ({ categoryId, is_login, QAList = [] }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryIdString = categoryId?.replace(/%26/g, " & ");

  const params = useParams();
  const [count, setCount] = React.useState(1);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [selectedBottomMenu, setSelectedBottomMenu] =
    React.useState("commentList");

  const { productDetail } = useSelector((state) => state.itemsReducer);
  const comments = useSelector((state) => state.commentReducer.comments);

  useEffect(() => {
    dispatch(itemsAction.loadDetailItem(params.id));
  }, []);

  return (
    <ItemDetailFrame>
      <ItemDetailArea>
        <ItemCategoryShow>
          <ItemCategoryPath to="/">HOME</ItemCategoryPath>
          {" > "}
          <ItemCategoryPath to={"/" + categoryId}>
            {categoryIdString}
          </ItemCategoryPath>
        </ItemCategoryShow>
        <ItemDetailTopBox>
          <ItemDetailTopLeftZone>
            <img src={productDetail.imgUrl[1]} />
          </ItemDetailTopLeftZone>
          <ItemDetailTopRightZone>
            <ItemDetailTopRightSection>
              <header>
                <div>{productDetail.productName}</div>
                <div>{productDetail.price.toLocaleString("ko-KR")}원 </div>
              </header>
              <ItemDetailContextSection>
                <ItemDetailContextView>
                  {productDetail.productDetail}
                </ItemDetailContextView>
              </ItemDetailContextSection>
              <ItemDetailOptionSection>
                <ItemOptionInDetail
                  eachPrice={productDetail.price}
                  countArr={{ count, setCount }}
                  totalPriceArr={{ totalPrice, setTotalPrice }}
                />
              </ItemDetailOptionSection>

              <ItemTotalPriceInDetail count={count} totalPrice={totalPrice} />
              <ItemDetailButtonSection>
                <button onClick={(e) => navigate("/")}>구매하기</button>
                <button
                  onClick={async (e) => {
                    try {
                      const responseCart = await dispatch(
                        basketAction.addCart({ productId: params.id, count })
                      ).unwrap();
                      console.log(responseCart)
                      // dispatch(basketSliceAction.addCartList()); 비회원 장바구니
                      dispatch(modalSliceAction.modalCartAlertOpen());
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                >
                  장바구니
                </button>
              </ItemDetailButtonSection>
            </ItemDetailTopRightSection>
          </ItemDetailTopRightZone>
        </ItemDetailTopBox>
        <ItemDetailBottomBox>
          <ItemDetailBottomMenuList>
            <ItemDetailBottomMenu
              onClick={(e) => setSelectedBottomMenu("detailInfo")}
              selected={selectedBottomMenu == "detailInfo" ? true : false}
            >
              상세정보
            </ItemDetailBottomMenu>
            /
            <ItemDetailBottomMenu
              onClick={(e) => setSelectedBottomMenu("commentList")}
              selected={selectedBottomMenu == "commentList" ? true : false}
            >
              구매평
              <NumberInCircle number={comments?.length} />
            </ItemDetailBottomMenu>
            /
            <ItemDetailBottomMenu
              onClick={(e) => setSelectedBottomMenu("QAList")}
              selected={selectedBottomMenu == "QAList" ? true : false}
            >
              Q&A
              <NumberInCircle number={QAList.length} />
            </ItemDetailBottomMenu>
          </ItemDetailBottomMenuList>
        </ItemDetailBottomBox>
        {selectedBottomMenu == "commentList" ? (
          <CommentList is_login={is_login} productId={params?.id} />
        ) : (
          <></>
        )}
      </ItemDetailArea>
    </ItemDetailFrame>
  );
};

const ItemDetailFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ItemCategoryShow = styled.div`
  color: #b3b3b3;
  font-size: 14px;
  margin-bottom: 1rem;
  a {
    text-decoration: none;
    font-size: 14px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const ItemCategoryPath = styled(Link)`
  color: #b3b3b3;
  font-size: 12px;
`;

const ItemDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 1280px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const ItemDetailTopBox = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

const ItemDetailTopLeftZone = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  overflow: hidden;
  height: fit-content;
  img {
    width: 100%;
    height: 100%;
    max-width: 610px;
    max-height: 610px;
    object-fit: contain;
  }
  @media screen and (max-width: 990px) {
    justify-content: center;
    width: 100%;
    img {
      max-width: none;
      max-height: none;
    }
  }
`;

const ItemDetailTopRightZone = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

const ItemDetailTopRightSection = styled.div`
  padding-left: 15%;
  width: 100%;
  header {
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 20px;
  }
  header div {
    margin-bottom: 0.5rem;
    font-size: 20px;
    font-weight: normal;
  }
  @media screen and (max-width: 990px) {
    padding-left: 0;
    header {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
    }
  }
  @media screen and (max-width: 500px) {
    header div {
      font-size: 13px;
      font-weight: normal;
    }
  }
`;

const ItemDetailContextSection = styled.div`
  margin-bottom: 24px;
  font-size: 13px;
  line-height: 1;
  color: rgba(79, 79, 79, 0.7);
`;

const ItemDetailContextView = styled.pre`
  word-wrap: break-word;
  white-space: pre-line;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const ItemDetailBottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ItemDetailOptionSection = styled.div`
  border: transparent;
`;

const ItemDetailButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 45px;
  @media screen and (max-width: 500px) {
    button {
      font-size: 10px;
    }
    height: 30px;
  }
  button {
    width: 100%;
    cursor: pointer;
    background-color: white;
    border: 1px solid rgba(79, 79, 79, 0.2);
  }
  button:hover {
    border: 1px solid #4f4f4f;
  }

  button:first-child {
    background-color: #4f4f4f;
    border: transparent;
    color: white;
  }
  button:first-child:hover {
    background-color: rgba(53, 53, 53, 1);
    border: rgba(53, 53, 53, 1);
  }
`;

const ItemDetailBottomMenuList = styled.div`
  display: flex;
  font-size: 11px;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  gap: 2rem;
  div {
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 500px) {
    gap: 0.5rem;
    font-size: 9px;
  }
`;

const ItemDetailBottomMenu = styled.div`
  ${({ selected }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: ${selected ? "#4f4f4f" : "rgba(79,79,79,0.3)"};
      &:hover {
        color: #4f4f4f;
      }
    `;
  }}
`;

export default ItemDetail;
