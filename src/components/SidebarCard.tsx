import { useDispatch } from "react-redux";
import { Product } from "../app/types/types";
import { remove } from "../features/shoppingCart/shoppingCartSlice";

export default function SideBarCard(props: {
  uniqueIds: String[];
  items: Product[];
}) {
  const dispatch = useDispatch();
  const uniqueIds = props.uniqueIds;
  const items = props.items;

  const uniqueItemsMap = uniqueIds.map((id: String, index) => {
    const result = items.filter((item: Product) => item.id === id);
    const quantity = result.length;
    return (
      <li className="flex py-6" key={index}>
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={result[0].url}
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <p>{result[0].title}</p>
              </h3>
              <p className="ml-4">{result[0].price}</p>
            </div>
            {/* <p className="mt-1 text-sm text-gray-500">Salmon</p> */}
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty {quantity}</p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => {
                  dispatch(remove(items.indexOf(result[0])));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return <>{uniqueItemsMap}</>;
}
