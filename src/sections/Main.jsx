import Hero from "../components/Hero";
import Counts from "../components/Counts";
import ToolsContainer from "../components/ToolsContainer";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import Ready from "../components/Ready";

export default function Main({ cart }) {
  
  return (
    <main>
      <Hero></Hero>
      <Counts></Counts>
      <ToolsContainer cart={cart}></ToolsContainer>
      <Process></Process>
      <Pricing></Pricing>
      <Ready></Ready>
    </main>
  );
}
