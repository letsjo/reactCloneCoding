import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import Footer from "./components/Footer";
import Basket from "./pages/Basket";

function App() {
  return (
    <AppBody>
      <Navbar />
      <MainBody>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<ItemDetail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </MainBody>
      <Footer />
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
  align-items: center;
  position: absolute;
  top: 100px;
  width: 100%;
  height: auto;
`;

export default App;
