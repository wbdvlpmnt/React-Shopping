import { useDispatch } from "react-redux";
import { Product } from "../app/types/types";
import { add } from "../features/shoppingCart/shoppingCartSlice";

export default function ProductCard(props: { product: Product }) {
  const product = props.product;
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <button>
          <img className="hover:grow hover:shadow-lg" src={product.url} />
          <div className="pt-3 flex items-center justify-between">
            <p className="">{product.title}</p>
            <svg
              className="fill-current hover:text-black active:scale-90"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={() => {
                dispatch(add(product));
              }}
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </div>
        </button>
        <p className="pt-1 text-gray-900">{product.price}</p>
      </div>
    </>
  );
}
