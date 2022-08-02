import React from "react";
import styled from "styled-components";
import CommentStar from "./CommentStar";

const CommentCard = ({comment}) => {
  
  const timeSetting = (stringTime) => {
    const objectDate = new Date(stringTime);
    var timestampInput = objectDate.getTime();
    var timestampNow = Date.now();
    var gap_time = timestampNow - timestampInput;
    if (gap_time < 3600000) {
      return Math.ceil(gap_time / 60000) + " 분 전";
    } else {
      var date = new Date(timestampInput);
      return (
        date.getFullYear() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    }
  };

  return (
    <CommentCardFrame>
      <CommentLeftArea>
        <CommentStar point={comment?.scope} />
        <CommentContent>
          {comment?.content}
        </CommentContent>
      </CommentLeftArea>
      <CommentRightArea>
        <CommentInfo>
          <span>{comment.writer.username?.split('@')[0]}</span>
          <span>{timeSetting(comment?.createdAt)}</span>
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
