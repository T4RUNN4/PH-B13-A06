import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart}></Header>
      <Main cart={cart} setCart={setCart}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
