import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { userAction } from "../redux/actions/userAction";
import api from "../redux/api";
import { userSliceAction } from "../redux/reducers/userReducer";

const Login = ({ setIsLogin, SetModalOpen, sessionStorageLogin }) => {
  const dispatch = useDispatch();
  const [notificationText, setNotificationText] = React.useState("");
  const [userData, setUserData] = React.useState({});
  const validationState = React.useRef(false);

  const RefEmail = React.useRef(null);
  const Refpassword = React.useRef(null);

  const validation = (e) => {
    e.preventDefault();
    const email = RefEmail.current.value.trim();
    const password = Refpassword.current.value;
    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!regEmail.test(email)) {
      validationState.current = false;
      setNotificationText("이메일 형식에 맞게 기재해주세요.");
    } else if (password.length < 4) {
      validationState.current = false;
      setNotificationText("비밀번호는 4자 이상이어야 합니다.");
    } else {
      validationState.current = true;
      setUserData({ email, password });
      setNotificationText("");
    }
  };

  const userLogin = async (e, userDataForLogin) => {
    e.preventDefault();
    try {
      const responseLogin = await dispatch(
        userAction.userLogin(userDataForLogin)
      ).unwrap();
      console.log(responseLogin);
      api.defaults.headers.common["authorization"] =
        "Bearer " + responseLogin.headers.authorization;

      
      sessionStorageLogin.setItem(
        "authorization",
        "Bearer " + responseLogin.headers.authorization
      );

      sessionStorageLogin.setItem("email", userDataForLogin.email);

      await dispatch(
        userSliceAction.recodeUser({
          email: userDataForLogin.email,
        })
      );
      RefEmail.current.value = "";
      Refpassword.current.value = "";
      setIsLogin(true);
      SetModalOpen(false);
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <SignupFrame>
      <SignupArea>
        <H>로그인</H>
        <LoginBox>
          <Input
            type="text"
            ref={RefEmail}
            onChange={(e) => validation(e)}
            placeholder="이메일"
            className="pw"
          />
          <Input
            type="password"
            ref={Refpassword}
            onChange={(e) => validation(e)}
            placeholder="비밀번호"
          />
          <LinkText>{notificationText}</LinkText>
          {validationState.current ? (
            <ButtonA
              validationState={validationState.current}
              onClick={(e) => {
                userLogin(e, userData);
              }}
            >
              로그인
            </ButtonA>
          ) : (
            <ButtonA
              onClick={(e) => {
                e.preventDefault();
              }}
              validationState={validationState.current}
            >
              로그인
            </ButtonA>
          )}
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

const LoginBox = styled.form`
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
  align-items: center;
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
  right: 0;
  width: 40%;
`;

const ButtonA = styled.button`
  ${({ validationState }) => {
    return css`
      background-color: ${validationState ? "transparent" : "#bababa"};
      color: ${validationState ? "black" : "white"};
      cursor: ${validationState ? "pointer" : "auto"};
      width: 100%;
      height: auto;
      border: 0.1rem solid #e5e7eb;
      padding: 12px 25px;
      text-align: center;
      font-size: 0.8rem;
      margin-top: 10px;
      &:hover {
        background-color: ${validationState ? "#4f4f4f" : "#bababa"};
        color: ${validationState ? "white" : "#6d6d6d"};
      }
    `;
  }}
`;

const ButtonB = styled.button`
  background-color: #b8b8b8;
  width: 100%;
  height: auto;
  border: none;
  color: white;
  padding: 12px 25px;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 25px;
  cursor: auto;
`;

const LinkText = styled.div`
  font-size: 12px;
  margin-top: 0.5rem;
  color: red;
`;

export default Login;
