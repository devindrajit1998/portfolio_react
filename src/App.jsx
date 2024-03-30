import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Preloader from "./components/Preloader";

export default function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slag" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
