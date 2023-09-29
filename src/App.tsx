import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import { Product } from "./app/types/types";
import { response } from "./app/testData";

function App() {
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    setProductsData(response.data);
    console.log("run use effect in app.tsx");
  }, []);

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Nav />
      <Carousel products={productsData}/>
      <Products products={productsData} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
