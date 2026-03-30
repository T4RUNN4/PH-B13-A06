import Hero from "../components/Hero";
import Counts from "../components/Counts";
import ToolsContainer from "../components/ToolsContainer";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import Ready from "../components/Ready";

export default function Main() {
  return (
    <main>
      <Hero></Hero>
      <Counts></Counts>
      <ToolsContainer></ToolsContainer>
      <Process></Process>
      <Pricing></Pricing>
      <Ready></Ready>
    </main>
  );
}
