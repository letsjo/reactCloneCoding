import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <MainFooter>
      <MainLeftFrame>Left11</MainLeftFrame>
      <MainRightFrame>Right11</MainRightFrame>
    </MainFooter>
  );
};

const MainFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainLeftFrame = styled.div`
  margin-left: 1rem;
`;

const MainRightFrame = styled.div`
  margin-right: 1rem;
`;

const FooterSection = styled.div`
  width: 100%;
  border-width: 0;
  border-style: solid;
`;

export default Footer;
