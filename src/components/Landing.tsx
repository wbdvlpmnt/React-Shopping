import { useState, useEffect } from "react";
import { response } from "../app/testData";
import { Product } from "../app/types/types";
import About from "./About";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Products from "./Products";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Landing() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProductsData(response.data);
    console.log("run use effect in app.tsx");
  }, []);
  return (
    <>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : null}

      <Carousel products={productsData} isOpen={isOpen} />
      <Products products={productsData} />
      <About />
      <Footer />
    </>
  );
}
