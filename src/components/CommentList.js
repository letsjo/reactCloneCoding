import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { commentAction } from "../redux/actions/commentAction";
import { modalSliceAction } from "../redux/reducers/modalReducer";
import CommentCard from "./CommentCard";

const CommentList = ({ productId }) => {
  const dispatch = useDispatch();
  const { is_login } = useSelector(
    (state) => state.userReducer
  );

  const comments = useSelector((state) => state.commentReducer.comments);

  useEffect(() => {
    dispatch(commentAction.loadCommentsList({ productId }));
  }, []);

  return (
    <CommentListFrame>
      {is_login ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(modalSliceAction.modalCommentOpen(productId));
          }}
        >
          구매평 작성
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(modalSliceAction.modalLoginOpen());
          }}
        >
          구매평 작성
        </button>
      )}
      <CommentListArea>
        {comments &&
          comments.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
      </CommentListArea>
      <CommentListBottomArea>
        {is_login ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(modalSliceAction.modalCommentOpen(productId));
            }}
          >
            구매평 작성
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(modalSliceAction.modalLoginOpen());
            }}
          >
            구매평 작성
          </button>
        )}
      </CommentListBottomArea>
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
  @media screen and (max-width: 500px) {
    button {
      font-size: 9px;
      width: 68px;
      height: 30px;
    }
  }
`;

const CommentListArea = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid black;
  margin: 1rem 0 1rem 0;
`;

const CommentListBottomArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default CommentList;
