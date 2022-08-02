import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { modalSliceAction } from "../redux/reducers/modalReducer";

const ModalComponents = ({ sessionStorageLogin, setIsLogin }) => {
  const dispatch = useDispatch();

  const { ModalOpen, ModalRequiredName } = useSelector((state)=> state.modalReducer);

  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        dispatch(modalSliceAction.modalClose());
      }
    };
    window.addEventListener("keydown", escKeyModalClose);

    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);

  return (
    <>
      {ModalOpen && (
        <Modal>
          <Overlay></Overlay>
          <ModalBody>
            {ModalRequiredName == "login" ? (
              <ModalContent>
                <Login
                  sessionStorageLogin={sessionStorageLogin}
                  setIsLogin={setIsLogin}
                />
                <CloseModal>
                  <GrFormClose
                    size={35}
                    onClick={() => {
                      dispatch(modalSliceAction.modalClose());
                    }}
                  />
                </CloseModal>
              </ModalContent>
            ) : ModalRequiredName == "signup" ? (
              <ModalContent>
                <Signup />
                <CloseModal>
                  <GrFormClose
                    size={35}
                    onClick={() => {
                      dispatch(modalSliceAction.modalClose());
                    }}
                  />
                </CloseModal>
              </ModalContent>
            ) : (
              <></>
            )}
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

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
  &:hover {
    color: "red";
  }
`;
////// ModalContent 여기가 흰 부분 입니다.
const ModalContent = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 34px 24px 24px;
  border-radius: 5px;
  min-width: 320px;
  min-height: 350px;
  width: 10%;

  @media screen and (max-width: 768px) {
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

// const MainBody = styled.div`
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// margin-top: 100px;
// width: 100%;
// height: auto;
// min-height: 100%;
// @media screen and (max-width: 990px) {
// align-items: center;
// }

// 모달 컴포넌트 종료

export default ModalComponents;
