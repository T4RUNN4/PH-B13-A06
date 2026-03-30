import ToolsCard from "./ToolsCard";

export default function ToolsContainer() {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-32 py-28">
      <h3 className="text-3xl font-black text-[#101727] leading-14">
        Premium Digital Tools
      </h3>
      <p className="text-gray-400 max-w-lg text-center text-sm">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="flex mt-4 gap-2 rounded-full border border-solid border-gray-100 p-2">
        <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          Products
        </button>
        <button className="btn btn-ghost">Cart (0)</button>
      </div>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-7">
        <ToolsCard></ToolsCard>
        <ToolsCard></ToolsCard>
        <ToolsCard></ToolsCard>
        <ToolsCard></ToolsCard>
        <ToolsCard></ToolsCard>
        <ToolsCard></ToolsCard>
      </div>
    </div>
  );
}
