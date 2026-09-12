import { useState } from "react";
import heroImg from "../assets/banner-stack.png";

const hero = () => {
  const [heroButton, setHeroButton] = useState("Explore Technologies");

  const handleExploreTechnologies = () => {
    setHeroButton("Explore Technologies");
  };

  const handleLearnMore = () => {
    setHeroButton("Learn More");
  };

  return (
    <div className="flex min-h-130 flex-col items-center justify-between gap-10 px-[5%] py-10 max-w-360 mx-auto md:flex-row md:px-[8%] md:py-0">
      <div className="w-full max-w-155">
        <h1 className="text-5xl font-bold leading-[1.15] text-[#07142f]">
          Build Your Ideal
          <span className="block bg-linear-to-r from-[#ff5722] via-[#e91e63] to-[#9c27b0] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-150 text-lg leading-8 text-[#64748b]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-4 pt-5">
          <button
            onClick={handleExploreTechnologies}
            className={`rounded-lg px-4 py-3 text-sm font-semibold shadow-sm transition ${
              heroButton === "Explore Technologies"
                ? "bg-linear-to-r from-[#ff6a21] to-[#e83e8c] text-white"
                : "border border-gray-200 bg-white text-[#475569] hover:bg-gray-50"
            }`}
          >
            Explore Technologies
          </button>

          <button
            onClick={handleLearnMore}
            className={`rounded-lg px-12 py-3 text-sm font-medium shadow-sm transition ${
              heroButton === "Learn More"
                ? "bg-linear-to-r from-[#ff6a21] to-[#e83e8c] text-white"
                : "border border-gray-200 bg-white text-[#475569] hover:bg-gray-50"
            }`}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex w-full justify-end">
        <img
          src={heroImg}
          alt="Hero section's image..."
          className="w-full max-w-135 object-contain"
        />
      </div>
    </div>
  );
};

export default hero;