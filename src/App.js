import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import Footer from "./components/Footer";
import Basket from "./pages/Basket";
import ModalComponents from "./components/ModalComponents";

export let sessionStorageLogin = sessionStorage;
export const is_authorization = sessionStorage.getItem("authorization")
    ? true
    : false;

function App() {
  const [categoryId, setCategoryId] = React.useState("ALL");
  
  return (
    <AppBody>
      <Navbar
        sessionStorageLogin={sessionStorageLogin}
      />
      <MainBody>
        <Routes>
          <Route path="/" element={<Home categoryId={categoryId} setCategoryId={setCategoryId}/>} />
          <Route path="/:category" element={<Home categoryId={categoryId} setCategoryId={setCategoryId}/>} />
          <Route path="/detail/:id" element={<ItemDetail categoryId={categoryId}/>} />
          <Route path="/basket" element={<Basket/>} />
        </Routes>
        <ModalComponents sessionStorageLogin={sessionStorageLogin}/>
        <Footer />
      </MainBody>
    </AppBody>
  );
}

// 모달 컴포넌트 시작
const AppBody = styled.div`
  margin: 0;
  padding: 0;
`;

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  width: 100%;
  height: auto;
  min-height: 100%;
  @media screen and (max-width: 990px) {
    align-items: center;
  }
`;

export default App;
