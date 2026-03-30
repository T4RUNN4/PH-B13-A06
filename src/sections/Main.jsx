import { Suspense } from "react";

import Hero from "../components/Hero";
import Counts from "../components/Counts";
import ToolsContainer from "../components/ToolsContainer";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import Ready from "../components/Ready";

const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

export default function Main({ cart, setCart }) {
  const productsPromise = fetchProducts();

  return (
    <main>
      <Hero></Hero>
      <Counts></Counts>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <ToolsContainer
          productsPromise={productsPromise}
          cart={cart} setCart={setCart}
        ></ToolsContainer>
      </Suspense>
      <Process></Process>
      <Pricing></Pricing>
      <Ready></Ready>
    </main>
  );
}
