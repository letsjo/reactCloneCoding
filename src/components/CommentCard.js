import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { commentAction } from "../redux/actions/commentAction";
import CommentStar from "./CommentStar";

const CommentCard = ({ comment }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

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
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "/" +
        ("0" + date.getDate()).slice(-2) +
        " " +
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2)
      );
    }
  };

  const delCommentBt = async (e, commentId) => {
    e.preventDefault();
    try {
      const responseComment = await dispatch(commentAction.delComment({ commentId }));
      window.alert("댓글이 삭제 되었습니다.")
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CommentCardFrame>
      <CommentLeftArea>
        <CommentStar point={comment?.scope} />
        <CommentContent>
          <pre>{comment?.content}</pre>
        </CommentContent>
      </CommentLeftArea>
      {user.username == comment.writer.username ? (
        <CommentButtonArea>
          <button onClick={(e) => delCommentBt(e, comment.commentId)}>
            삭제
          </button>
        </CommentButtonArea>
      ) : (
        <CommentButtonArea></CommentButtonArea>
      )}
      <CommentRightArea>
        <CommentInfo>
          <span>{comment.writer.username?.split("@")[0]}</span>
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

const CommentButtonArea = styled.div`
  button {
    width: 50px;
  }
  display: flex;
  justify-content: center;
  margin-right: 1rem;
`;

const CommentContent = styled.div`
  font-size: 14px;
  pre {
    margin: 0.5rem 0 0 0;
  }
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
