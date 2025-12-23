import { useState } from "react";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./comp/Header/Header";
import Home from "./page/Home/Home";
import Footer from "./comp/footer/Footer";
import GetInTouch from "./comp/getintouch/GetInTouch";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Header />
          <GetInTouch />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
