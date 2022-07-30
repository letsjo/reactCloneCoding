import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import Footer from "./components/Footer";
import Basket from "./pages/Basket";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <AppBody>
      <Navbar />
      <MainBody>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Home />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </MainBody>
    </AppBody>
  );
}

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
