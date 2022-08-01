import React, { useEffect } from "react";
import styled from "styled-components";
import OptionCounter from "./OptionCounter";

const ItemOptionInDetail = ({ eachPrice, countArr, totalPriceArr }) => {
  useEffect(() => {
    totalPriceArr.setTotalPrice(eachPrice * countArr.count);
  }, [totalPriceArr]);
  return (
    <ItemDetailOptionFrame>
      <OptionTitleArea>수량</OptionTitleArea>
      <DashedLine />
      <OptionMainArea>
        <OptionCounter countArr={countArr} />
        <div>{(eachPrice * countArr.count).toLocaleString("ko-KR")} 원</div>
      </OptionMainArea>
    </ItemDetailOptionFrame>
  );
};

const ItemDetailOptionFrame = styled.div`
  padding: 15px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: rgba(79, 79, 79, 0.03);
  font-size: 12px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const DashedLine = styled.div`
  width: 100%;
  height: 0px;
  border-bottom: 1px dashed rgba(79, 79, 79, 0.1);
  margin: 0.5rem 0 0.5rem 0;
`;

const OptionTitleArea = styled.div`
  width: 100%;
`;

const OptionMainArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    div {
      font-size: 12px;
    }
  }
`;

export default ItemOptionInDetail;
