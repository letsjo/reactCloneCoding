import React from 'react';
import styled from 'styled-components';

const ItemTotalPriceInDetail = ({count, totalPrice}) => {
  return (
    <TotalPriceFrame>
        <TotalPriceLeftArea>총 상품금액({count}개)</TotalPriceLeftArea>
        <TotalPriceRightArea>{totalPrice.toLocaleString("ko-KR")}원</TotalPriceRightArea>
    </TotalPriceFrame>
  )
}

const TotalPriceFrame = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const TotalPriceLeftArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    width: 50%;
    font-size: 12px;
`

const TotalPriceRightArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    width: 50%;
`

export default ItemTotalPriceInDetail