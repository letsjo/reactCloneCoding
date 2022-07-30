import React from "react";
import styled from "styled-components";
import {BsDot} from "react-icons/bs"

const Signup = ({SetModalOpen}) => {
  return (
    <SignupFrame>
      <SignupArea>
        <H>회원가입</H>
        <LoginBox>
          <Input type="text" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" className="pw"/>
          <Input type="password" placeholder="비밀번호 확인" />
          <P>이름<BsDot size={20} color={"#1A6Dff"}></BsDot></P>
          <Input type="text" placeholder="이름을(를) 입력하세요" />
          </LoginBox>
        <Button>가입하기</Button>
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
  align-items:center;
  width: 100%;
`;

const LoginBox = styled.div`
  height: auto;
  width: 300px;
  flex-direction: column;
  display: flex;
  .pw{
    border-top: transparent;
    border-bottom: transparent;
  }
  `;

const P = styled.div`
  font-size: 14px;
  width: 100%;
  margin: 1.5rem 0 0.5rem 0;
`;
const H = styled.div`
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  padding: 1.5rem;
`;
const a = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #4f4f4f;
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

const Input = styled.input`
  padding: 10px 0 10px 10px;
  border: 0.1px solid #e5e7eb;
  padding: 12px 16px;
  &:focus {
        outline: none;}

`;

export default Signup;
