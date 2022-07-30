import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import Footer from "./components/Footer";
import Basket from "./pages/Basket";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {GrFormClose} from "react-icons/gr"

function App() {
  const [ModalOpen, SetModalOpen] = useState(false);
  const [ModalRequiredName, SetModalRequiredName] = useState("");

  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        SetModalOpen(false);
      }
    };
    window.addEventListener("keydown", escKeyModalClose);

    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);

  return (
    <AppBody>
      <Navbar SetModalOpen={SetModalOpen} SetModalRequiredName={SetModalRequiredName}/>
      <MainBody>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Home />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        {ModalOpen && (
          <Modal>
            <Overlay></Overlay>
            <ModalBody>
            {ModalRequiredName == "login" ? (
                <ModalContent>
                  <Login SetModalOpen={SetModalOpen} />
                  <CloseModal>
                    <GrFormClose
                      size={35}
                      onClick={() => {
                        SetModalOpen(false);
                      }}
                    />
                  </CloseModal>
                </ModalContent>
              ): ModalRequiredName == "signup" ? (
                <ModalContent>
                  <Signup SetModalOpen={SetModalOpen} />
                  <CloseModal>
                    <GrFormClose
                      size={35}
                      onClick={() => {
                        SetModalOpen(false);
                      }}
                    />
                  </CloseModal>
                </ModalContent>
              ): (
                <>
                </>
              )}
            </ModalBody>
          </Modal>
        )}
        <Footer />
      </MainBody>
    </AppBody>
  );
}

// 모달 컴포넌트 시작

const ModalBody = styled.div``;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

const CloseModal = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
`;
////// ModalContent 여기가 흰 부분 입니다.
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: white;
  padding: 14px 28px;
  border-radius: 10px;
  min-width: 500px;
  min-height: 500px;
  max-height: 800px;
`;

// 모달 컴포넌트 종료

const AppBody = styled.div`
  margin: 0;
  padding: 0;
`;

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  width: 100%;
  height: auto;
  min-height: 100%;
  @media screen and (max-width: 990px) {
    align-items: center;
  }
`;

export default App;
