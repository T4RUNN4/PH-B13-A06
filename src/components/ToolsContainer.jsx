import { useState } from "react";
import ToolsCard from "./ToolsCard";
import Cart from "../assets/products/shopping-cart.png"

export default function ToolsContainer({ cart }) {
  const [currentButton, setCurrentButton] = useState("products");

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-16 lg:px-32 py-28">
      <h3 className="text-4xl font-black text-[#101727] leading-14">
        Premium Digital Tools
      </h3>
      <p className="text-gray-400 max-w-md text-center text-sm">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="flex mt-4 gap-2 rounded-full border border-solid border-gray-100 p-1">
        <button
          className={`btn ${currentButton === "products" ? "btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "btn-ghost hover:rounded-full"}`}
          onClick={() => setCurrentButton("products")}
        >
          Products
        </button>
        <button
          className={`btn ${currentButton === "carts" ? "btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "btn-ghost hover:rounded-full"}`}
          onClick={() => setCurrentButton("carts")}
        >
          Cart ({cart.length})
        </button>
      </div>

      {currentButton === "products" ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-7">
          {" "}
          <ToolsCard></ToolsCard>
          <ToolsCard></ToolsCard>
          <ToolsCard></ToolsCard>
          <ToolsCard></ToolsCard>
          <ToolsCard></ToolsCard>
          <ToolsCard></ToolsCard>
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <img src={Cart} alt="cart icon" />
          <h3 className="text-xl font-black text-[#101727] leading-14">
            Empty Cart
          </h3>
          <p className="text-gray-400 max-w-md text-center text-sm">
            There is no item in the cart. Item you will add will appear here
          </p>
        </div>
      )}
    </div>
  );
}
