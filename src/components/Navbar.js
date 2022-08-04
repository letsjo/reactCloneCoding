import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "../redux/api";

import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSliceAction } from "../redux/reducers/userReducer";
import { modalSliceAction } from "../redux/reducers/modalReducer";
import { is_authorization } from "../App";
import { BsList } from "react-icons/bs";

const Navbar = ({ sessionStorageLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { is_login } = useSelector((state) => state.userReducer);

  const ModalLogin = () => {
    dispatch(modalSliceAction.modalLoginOpen());
  };

  const ModalSignup = () => {
    dispatch(modalSliceAction.modalSignupOpen());
  };

  const GOLogout = () => {
    api.defaults.headers.common["authorization"] = "";
    sessionStorageLogin.clear();
    dispatch(userSliceAction.logoutUser());
    window.location.reload();
  };

  useEffect(() => {
    if (is_authorization) {
      api.defaults.headers.common["authorization"] =
        sessionStorage.getItem("authorization");
      dispatch(
        userSliceAction.recodeUser({
          username: sessionStorage.getItem("email"),
        })
      );
      dispatch(userSliceAction.loginUser());
    }
  }, []);

  return (
    <NaviFrame>
      {/* <MobileList>
        <BsList size={30} />
      </MobileList> */}
      <Logo>
        <a href="/">
          <h2>Beesket Studio</h2>
        </a>
      </Logo>
      <CenterMenu>
        <P1>ABOUT US</P1>
        <P1>ONLINE SHOP</P1>
        <P1>COMMUNITY</P1>
      </CenterMenu>
      <EndMenu>
        <P2 onClick={(e) => navigate("/basket")}>CART</P2>
        <div>/</div>
        {is_login ? (
          <P2 onClick={GOLogout}>LOGOUT</P2>
        ) : (
          <>
            <P2 onClick={ModalLogin}>LOGIN</P2>
            <div>/</div>
            <P2 onClick={ModalSignup}>JOIN</P2>
          </>
        )}
        <div>/</div>
        <P2>
          <FontAwesomeIcon icon={faSearch} />
        </P2>
      </EndMenu>
    </NaviFrame>
  );
};

const NaviFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0 0 0;
  width: 100%;
`;

const MobileList = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 15px;
  margin-left: 40px;
  width: 100%;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const CenterMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
`;
const P1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 12px;
  font-size: 12px;
`;

const P2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 7px;
  font-size: 12px;
  cursor: pointer;
`;

const EndMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  width: 100%;
  gap: 0.5rem;
`;

export default Navbar;
