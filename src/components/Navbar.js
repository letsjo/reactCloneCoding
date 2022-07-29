import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NaviFrame>Navbar</NaviFrame>
  )
}

const NaviFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
`;

export default Navbar