import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CommentStarPost from "../components/CommentStarPost";
import { commentAction } from "../redux/actions/commentAction";
import { modalAction } from "../redux/actions/modalAction";
import { modalSliceAction } from "../redux/reducers/modalReducer";

const CommentPost = () => {
  const textareaRef = useRef("");
  const dispatch = useDispatch();

  const { starScore } = useSelector((state) => state.commentReducer);
  const { productId } = useSelector((state) => state.modalReducer);

  const commentPost = async (e) => {
    e.preventDefault();
    try {
      const responseComment = await dispatch(
        commentAction.postComment({
          productId,
          postCommentData: {
            scope: starScore,
            content: textareaRef.current.value,
          },
        })
      ).unwrap();
      console.log(responseComment);
      await dispatch(modalSliceAction.modalClose());
      window.location.reload();
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <CommentPostContainer>
      <CommentPostFrame onSubmit={(e) => commentPost(e)}>
        <H>상품평 작성</H>
        <CommentStarPost />
        <CommentContextInput
          ref={textareaRef}
          placeholder="상품평을 입력해주세요."
          required
        />
        <CommentButton>작성완료</CommentButton>
      </CommentPostFrame>
    </CommentPostContainer>
  );
};

const H = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  text-align: center;
  display: flex;
`;

const CommentPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CommentPostFrame = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 90%;
  margin-top: 10px;
`;

const CommentContextInput = styled.textarea`
  width: 99%;
  height: 190px;
  resize: none;
  font-size: 14px;
`;

const CommentButton = styled.button`
  width: 100%;
  height: 45px;
  cursor: pointer;
  border: 1px solid rgba(79, 79, 79, 0.2);
  background-color: #4f4f4f;
  border: transparent;
  color: white;
  margin-top: 1rem;
  &:hover {
    border: 1px solid #4f4f4f;
    background-color: rgba(53, 53, 53, 1);
  }
`;

export default CommentPost;
