import { useState, useEffect } from "react";
import { response } from "../app/testData";
import { Product } from "../app/types/types";
import About from "./About";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Products from "./Products";
import Nav from "./Nav";

export default function Landing() {
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    setProductsData(response.data);
    console.log("run use effect in app.tsx");
  }, []);
  return (
    <>
      <Nav />
      <Carousel products={productsData} />
      <Products products={productsData} />
      <About />
      <Footer />
    </>
  );
}
