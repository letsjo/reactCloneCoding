import React from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";

const CommentList = () => {
  return (
    <CommentListFrame>
      <button>구매평 작성</button>
        <CommentListArea>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </CommentListArea>
      <CommentListBottomArea><button>구매평 작성</button></CommentListBottomArea>
    </CommentListFrame>
  );
};

const CommentListFrame = styled.div`
  margin-top: 1rem;
  button {
    background-color: #ffffff;
    color: #4f4f4f;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 12px;
    width: 95px;
    height: 40px;
    cursor: pointer;
    &:hover {
      background-color: #4f4f4f;
      border: 1px solid #4f4f4f;
      color: #ffffff;
    }
  }
`;

const CommentListArea = styled.div`
    width: 100%;
    height: auto;
    border-top: 1px solid black;
    margin: 1rem 0 1rem 0;
`

const CommentListBottomArea = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default CommentList;
