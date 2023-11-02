import { Product } from "../app/types/types";
import { HashLink } from "react-router-hash-link";

export default function Carousel(props: {
  products: Product[];
  isOpen: boolean;
}) {
  const products = props.products;
  return (
    <>
      {products.length > 0 && (
        <div
          className="carousel relative container mx-auto"
          style={{ maxWidth: "1600px" }}
        >
          <div className="carousel-inner relative overflow-hidden w-full">
            {/* <!--Slide 1--> */}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              hidden={true}
              checked={true}
              readOnly
            />
            <div
              className="carousel-item absolute opacity-0"
              style={{ height: "50vh" }}
            >
              <div
                className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style={{
                  backgroundImage: `url(${products[0].url})`,
                }}
              >
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">
                      {products[0].title}
                    </p>
                    <HashLink smooth to="/#shop">
                      <button className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black">
                        view product
                      </button>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            <label
              htmlFor="carousel-3"
              className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-2"
              className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>

            {/* <!--Slide 2--> */}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden={true}
              checked={true}
              readOnly
            />
            <div
              className="carousel-item absolute opacity-0"
              style={{ height: "50vh" }}
            >
              <div
                className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style={{
                  backgroundImage: `url(${products[1].url})`,
                }}
              >
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">
                      {products[1].title}
                    </p>
                    <HashLink smooth to="/#shop">
                      <button className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black">
                        view product
                      </button>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            <label
              htmlFor="carousel-1"
              className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-3"
              className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            >
              ›
            </label>

            {/* <!--Slide 3--> */}
            <input
              className="carousel-open"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden={true}
              checked={true}
              readOnly
            />
            <div
              className="carousel-item absolute opacity-0"
              style={{ height: "50vh" }}
            >
              <div
                className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
                style={{
                  backgroundImage: `url(${products[2].url})`,
                }}
              >
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">
                      {products[2].title}
                    </p>
                    <HashLink smooth to="/#shop">
                      <button className="w-full text-xl no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black">
                        view product
                      </button>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            {!props.isOpen ? (
              <label
                htmlFor="carousel-2"
                className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
              >
                ‹
              </label>
            ) : null}

            {!props.isOpen ? (
              <label
                htmlFor="carousel-1"
                className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
              >
                ›
              </label>
            ) : null}

            {/* <!-- Add additional indicators for each slide--> */}
            {!props.isOpen ? (
              <ol className="carousel-indicators">
                <li className="inline-block mr-3">
                  <label
                    htmlFor="carousel-1"
                    className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                  >
                    •
                  </label>
                </li>
                <li className="inline-block mr-3">
                  <label
                    htmlFor="carousel-2"
                    className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                  >
                    •
                  </label>
                </li>
                <li className="inline-block mr-3">
                  <label
                    htmlFor="carousel-3"
                    className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                  >
                    •
                  </label>
                </li>
              </ol>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
