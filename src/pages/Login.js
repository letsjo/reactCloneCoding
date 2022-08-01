import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = ({ SetModalOpen }) => {
  return (
    <SignupFrame>
      <SignupArea>
        <H>로그인</H>
        <LoginBox>
          <Input type="text" placeholder="이메일" className="pw" />
          <Input type="password" placeholder="비밀번호" />
          <ButtonA>로그인</ButtonA>
        </LoginBox>
        <LoginBox>
          <LoginZone>
            <p>회원가입</p>
            <p>아이디 비밀번호 찾기</p>
          </LoginZone>
          <Or>
            <Hr /> 또는
            <HrRight />
          </Or>
          <ButtonB>비회원 주문배송 조회</ButtonB>
        </LoginBox>
      </SignupArea>
    </SignupFrame>
  );
};

const SignupFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const SignupArea = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoginBox = styled.div`
  height: auto;
  width: 100%;
  flex-direction: column;
  display: flex;
  .pw {
    border-bottom: transparent;
  }
`;

const LoginZone = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  font-size: 0.7rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px 0 10px 10px;
  border: 0.1px solid #e5e7eb;
  padding: 12px 16px;
  &:focus {
    outline: none;
  }
`;

const H = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
`;

const Or = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  position: relative;
  height: 30px;
  font-size: 0.7rem;
`;

const Hr = styled.div`
  border-top: 1px solid #e5e7eb;
  border-bottom: none;
  position: absolute;
  top: calc(50% - 0.5px);
  left: 0;
  width: 40%;
`;

const HrRight = styled.div`
  border-bottom: 1px solid #e5e7eb;
  position: absolute;
  top: calc(50% - 0.5px);
  right:0;
  width: 40%;
`;

const ButtonA = styled.button`
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #4f4f4f;
    color: white;
  }
  width: 100%;
  height: auto;
  border: 0.1rem solid #e5e7eb;
  padding: 12px 25px;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 25px;
  cursor: pointer;
`;

const ButtonB = styled.button`
  background-color: #8393a7;
  width: 100%;
  height: auto;
  border: none;
  color: white;
  padding: 12px 25px;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 25px;
  cursor: pointer;
`;

export default Login;
