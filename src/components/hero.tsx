import heroImg from "../assets/banner-stack.png";

const hero = () => {
  return (
   <div className="flex min-h-130 items-center justify-between gap-10 px-[8%] max-w-360 mx-auto">
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

        <div className="mt-12 flex gap-3">
          <button className="rounded-lg bg-linear-to-r from-[#ff6a21] to-[#e83e8c] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
            Explore Technologies
          </button>

          <button className="rounded-lg border border-gray-200 bg-white px-12 py-3 text-sm font-medium text-[#475569] shadow-sm transition hover:bg-gray-50">
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