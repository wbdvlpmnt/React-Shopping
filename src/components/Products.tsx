import { Product } from "../app/types/types";
import ProductCard from "./ProductCard";

export default function Products(props: { products: Product[] }) {
  const products = props.products;
  return (
    <div
      className="container mx-auto flex items-center flex-wrap pt-4 pb-12"
      id="shop"
    >
      {products.map((product: Product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
