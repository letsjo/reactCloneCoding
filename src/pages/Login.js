import React from "react";
import styled from "styled-components";

const Login = ({SetModalOpen}) => {
  return (
    <SignupFrame>
      <SignupArea>
        <H>로그인</H>
        <LoginBox>
          <Input type="text" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button>로그인</Button>
        </LoginBox>
        <LoginBox>
          <LoginZone>
            <p>회원가입</p>
            <p>아이디 비밀번호 찾기</p>
          </LoginZone>
          <Input type="password" placeholder="이름을(를) 입력하세요" />
        </LoginBox>
        <Button>비회원 주문배송 조회</Button>
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
  
`;

const LoginZone = styled.div`
  flex-direction: row;
  justify-content:space-between;
  display: flex;
  font-size: 13px;
  width: 100%;

`;

const Input = styled.input`
  padding: 10px 0 10px 10px;
  border: 0.1px solid #e5e7eb;
  padding: 12px 16px;
  &:focus {
        outline: none;}

`;

const p = styled.div`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
const H = styled.div`
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  padding: 1.5rem;

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

// const H1 = styled.div`
// display: flex;
// align-items: center;
//   font-size: 20px;
// `;

export default Login;
