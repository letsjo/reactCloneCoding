import React from "react";
import styled from "styled-components";

const ItemDetail = () => {
  return (
    <ItemDetailFrame>
      <ItemDetailArea>
        <ItemDetailTopBox>
          <ItemDetailTopLeftZone>상왼</ItemDetailTopLeftZone>
          <ItemDetailTopRightZone>상오</ItemDetailTopRightZone>
        </ItemDetailTopBox>
        <ItemDetailBottomBox>하단</ItemDetailBottomBox>
      </ItemDetailArea>
    </ItemDetailFrame>
  );
};

const ItemDetailFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ItemDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 65%;
`;

const ItemDetailTopBox = styled.div`
  display: flex;
  width: 100%;
`;

const ItemDetailTopLeftZone = styled.div`
  display: flex;
  width: 50%;
`;

const ItemDetailTopRightZone = styled.div`
  display: flex;
  width: 50%;
`;

const ItemDetailBottomBox = styled.div`
  display: flex;
`;

export default ItemDetail;
