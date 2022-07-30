import React from "react";
import styled from "styled-components";
import CommentStar from "./CommentStar";

const CommentCard = () => {
  return (
    <CommentCardFrame>
      <CommentLeftArea>
        <CommentStar point="3.5" />
        <CommentContent>
          달력 사진 정말 너무예뻐요. 2022년이 벌써 행복해요!
        </CommentContent>
      </CommentLeftArea>
      <CommentRightArea>
        <CommentInfo>
          <span>hyunoh.jo</span>
          <span>2022-01-01 16:09</span>
        </CommentInfo>
      </CommentRightArea>
    </CommentCardFrame>
  );
};

const CommentCardFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
  width: 100%;
  border-bottom: 1px solid rgba(79, 79, 79, 0.15);
`;

const CommentLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 85%;
`;

const CommentRightArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15%;
`;

const CommentContent = styled.div`
  font-size: 14px;
  @media screen and (max-width: 990px) {
    font-size: 9px;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 13px;
  color: rgba(79, 79, 79, 0.65);
  white-space: pre-line;
  @media screen and (max-width: 990px) {
    font-size: 9px;
  }
`;

export default CommentCard;
