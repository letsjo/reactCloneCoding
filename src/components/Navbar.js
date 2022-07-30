import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NaviFrame>
      <Logo>
        <h2>Beesket Studio</h2>
      </Logo>
      <CenterMenu>
        <P1>ABOUT US</P1>
        <P1>ONLINE SHOP</P1>
        <P1>COMMUNITY</P1>
      </CenterMenu>
      <EndMenu>
        <P2>CART</P2>
        <P2>/</P2>
        <P2>MY PAGE</P2>
        <P2>/</P2>
        <P2><FontAwesomeIcon icon={faSearch}/></P2>
        
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

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 15px;
  margin-left: 40px;
  width: 100%;
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
`;

const EndMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  width: 100%;
`;

export default Navbar;
