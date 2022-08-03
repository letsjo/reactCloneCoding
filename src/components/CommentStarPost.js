import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { commentSliceAction } from "../redux/reducers/commentReducer";

const CommentStarPost = () => {
  const [rate, setRate] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentSliceAction.getStarScore(rate));
  }, [rate]);

  return (
    <PostStarContainer>
      {Array.from({ length: 5 }, (item, index) => {
        return rate <= index ? (
          <Star
            key={index}
            onClick={() => {
              setRate(index + 1);
            }}
          />
        ) : (
          <StarFill
            key={index}
            onClick={() => {
              setRate(index + 1);
            }}
          />
        );
      })}
    </PostStarContainer>
  );
};

const PostStarContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
`;

const Star = styled.div`
  background-image: url("https://upto.co.kr/img/star-light.png");
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StarFill = styled.div`
  background-image: url("https://upto.co.kr/img/star-fill.png");
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default CommentStarPost;
