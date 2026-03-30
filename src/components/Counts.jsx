export default function Counst() {
  return (
    <div className="md:px-32 mt-10 lg:mt-0 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 flex flex-row items-center justify-center text-white md:gap-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="text-4xl font-extrabold">50k+</h3>
        <p>Active user</p>
      </div>
      <div class="divider divider-horizontal before:bg-gray-300/50 after:bg-gray-300/50"></div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="text-4xl font-extrabold">200+</h3>
        <p>Premium Tools</p>
      </div>
      <div class="divider divider-horizontal before:bg-gray-300/50 after:bg-gray-300/50"></div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="text-4xl font-extrabold">4.9</h3>
        <p>Rating</p>
      </div>
    </div>
  );
}
