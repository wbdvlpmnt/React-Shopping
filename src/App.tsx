import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Nav />
      <Carousel />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
