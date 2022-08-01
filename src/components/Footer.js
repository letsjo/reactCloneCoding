import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MainFooter>
      <FooterLeftFrame>
        <FooterLeftMenuArea>
          <div>Customer Center</div>
          <div>+82 (0)10-2231-4408</div>
          <div>Tue - Fri PM 12:00-5:00</div>
        </FooterLeftMenuArea>
        <FooterLeftMenuArea>
          <Link to="/">
            <span>LOGIN</span>
          </Link>
          <Link to="/">
            <span>JOIN</span>
          </Link>
          <Link to="/">
            <span>CART</span>
          </Link>
        </FooterLeftMenuArea>
      </FooterLeftFrame>
      <FooterRightFrame>
        <div>Busan, Korea</div>
        <div>Business License 654-06-00338</div>
        <div>Communication Sales Business Report 2016-Busan Buckgu-0263</div>
        <div>Copyright ⓒ Beesket Studio</div>
        <div>Hosting by I'mweb</div>
      </FooterRightFrame>
    </MainFooter>
  );
};

const MainFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin: 2rem 0 5rem 0;
  color: gray;
  font-size: 12px;
  @media screen and (max-width: 990px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 5%;
    margin-bottom: 5%;
    font-size: 15px;
  }
`;

const FooterLeftFrame = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 990px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
  }
`;

const FooterLeftMenuArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  a {
    margin-bottom: 0.5rem;

    color: black;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 990px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
  }
`;

const FooterRightFrame = styled.div`
  margin-right: 5rem;
  @media screen and (max-width: 990px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
  }
`;

export default Footer;
