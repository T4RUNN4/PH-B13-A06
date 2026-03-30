import Writing from "../assets/products/writing.png";

export default function ToolsCard() {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-end">
          <span className="badge rounded-full text-[#BB4D00] bg-[#FEF3C6] px-3 py-4 text-sm">
            Most Popular
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center p-2 rounded-full border border-solid border-gray-300 h-16 w-16">
            <img src={Writing} alt="Icon" />
          </div>
          <h2 className="text-2xl font-bold">AI Writing pro</h2>
          <p className="text-gray-500 text-xs">
            Generate high-quality content, blogs, and marketing copy in seconds
            with advanced AI.
          </p>
          <p className="text-xl text-gray-500">
            <span className="font-black text-2xl text-black">$29</span>/mo
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-500">Unlimited AI Generation</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-500">50+ Writing Templates</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-500">Grammer Checker</span>
          </li>
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
