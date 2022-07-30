import React from "react";
import styled from "styled-components";

const Login = ({SetModalOpen}) => {
  return (
    <SignupFrame>
    <H>로그인</H>
      <SignupArea>
        <LoginBox>
          <Input type="text" placeholder="이메일" className="pw"/>
          <Input type="password" placeholder="비밀번호" />
          <ButtonA>로그인</ButtonA>
        </LoginBox>
        <LoginBox>
          <LoginZone>
            <p>회원가입</p>
            <p>아이디 비밀번호 찾기</p>
          </LoginZone>
          <p>또는</p>
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
  align-items:center;
  width: 100%;
  height: 100%;
`;

const LoginBox = styled.div`
  height: auto;
  width: 100%;
  flex-direction: column;
  display: flex;
  .pw{
    border-bottom: transparent;
  }
  
`;

const LoginZone = styled.div`
  flex-direction: row;
  justify-content:space-between;
  display: flex;
  font-size: 0.6rem;
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
  font-size: 1.3rem;
  text-align: center;
  display: flex;
  padding: 1.5rem;
  margin: 0;

`;
const ButtonA = styled.button`
  background-color: transparent;
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

// const H1 = styled.div`
// display: flex;
// align-items: center;
//   font-size: 20px;
// `;

export default Login;
