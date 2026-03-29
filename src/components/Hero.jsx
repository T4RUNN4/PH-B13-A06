import HeroImage from "../assets/banner.png";
import Play from "../assets/play.png";

export default function Hero() {
  return (
    <div className="hero md:px-32 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HeroImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="max-w-md text-center lg:text-left mt-4 lg:mt-0">
          <h1 className="text-5xl font-bold text-[#101727] leading-14">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 lg:mr-16">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <a className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mr-4">
            Explore Products
          </a>
          <a className="btn btn-ghost bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text border border-solid border-[#9514FA] rounded-full">
            {" "}
            <img src={Play} /> Watch Demo
          </a>
        </div>
      </div>
    </div>
  );
}
