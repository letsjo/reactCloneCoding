import React from "react";
import styled, { css } from "styled-components";
import { BsDot } from "react-icons/bs";
import { userAction } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { modalSliceAction } from "../redux/reducers/modalReducer";

const Signup = () => {
  const dispatch = useDispatch();

  const [notificationText, setNotificationText] = React.useState();
  const [userData, setUserData] = React.useState({});
  const validationState = React.useRef(false);

  const RefEmail = React.useRef(null);
  const Refpassword = React.useRef(null);
  const RefPasswordCheck = React.useRef(null);
  const RefName = React.useRef(null);

  const userSignUp = async (e, userDataForSignUp) => {
    e.preventDefault();
    console.log(userDataForSignUp);
    try {
      const Signup_response = await dispatch(
        userAction.userSignup(userDataForSignUp)
      ).unwrap();
      RefEmail.current.value = "";
      Refpassword.current.value = "";
      RefPasswordCheck.current.value = "";
      RefName.current.value = "";
      console.log(Signup_response);
      dispatch(modalSliceAction.modalClose());
      window.alert("환영합니다 :)");
    } catch (err) {
      window.alert(err.data.message);
    }
  };

  const validation = (e) => {
    e.preventDefault();
    const email = RefEmail.current.value.trim();
    const password = Refpassword.current.value;
    const password2 = RefPasswordCheck.current.value;
    const name = RefName.current.value;

    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!regEmail.test(email)) {
      validationState.current = false;
      setNotificationText("이메일 형식에 맞게 기재해주세요.");
    } else if (password.length < 4) {
      validationState.current = false;
      setNotificationText("비밀번호는 4자 이상이어야 합니다.");
    } else if (password !== password2) {
      validationState.current = false;
      setNotificationText("비밀번호가 서로 일치하지 않습니다.");
    } else if (!name) {
      validationState.current = false;
      setNotificationText("이름을 입력해주세요.");
    } else {
      validationState.current = true;
      setUserData({ email, password, password2, name });
      setNotificationText("");
    }
  };

  return (
    <SignupFrame>
      <SignupArea>
        <H>회원가입</H>
        <LoginBox>
          <Input
            type="text"
            placeholder="이메일"
            ref={RefEmail}
            onChange={(e) => validation(e)}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            ref={Refpassword}
            className="pw"
            onChange={(e) => validation(e)}
          />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            ref={RefPasswordCheck}
            onChange={(e) => validation(e)}
          />
          <P>
            이름<BsDot size={20} color={"#1A6Dff"}></BsDot>
          </P>
          <Input
            type="text"
            placeholder="이름을(를) 입력하세요"
            ref={RefName}
            onChange={(e) => validation(e)}
          />
          <LinkText>{notificationText}</LinkText>
          {validationState.current ? (
            <Button
              validationState={validationState.current}
              onClick={(e) => {
                userSignUp(e, userData);
              }}
            >
              가입하기
            </Button>
          ) : (
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              validationState={validationState.current}
            >
              가입하기
            </Button>
          )}
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
    border-top: transparent;
    border-bottom: transparent;
  }
`;

const P = styled.div`
  font-size: 0.8px;
  width: 100%;
  margin: 1.5rem 0 0.5rem 0;
`;
const H = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
`;

const Button = styled.button`
  ${({ validationState }) => {
    return css`
      background-color: ${validationState ? "#4f4f4f" : "#b3b3b3"};
      width: 100%;
      height: auto;
      border: none;
      color: white;
      padding: 12px 25px;
      text-align: center;
      font-size: 0.9rem;
      margin-top: 15px;
      cursor: ${validationState ? "pointer" : "auto"};
    `;
  }}
`;

const Input = styled.input`
  padding: 10px 0 10px 10px;
  border: 0.1px solid #e5e7eb;
  padding: 12px 16px;
  &:focus {
    outline: none;
  }
`;

const LinkText = styled.div`
  font-size: 12px;
  margin-top: 0.5rem;
  color: red;
`;

export default Signup;
