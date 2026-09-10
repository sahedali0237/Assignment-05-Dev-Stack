import heroImg from "../assets/banner-stack.png";


const hero = () => {
  return (
    <div className="flex justify-between">
        <div>
      <h1>
        Build Your Ideal
        <span>Development Stack</span>
      </h1>
      <p>
        Explore frontend, backend, database, and tooling options, compare them
        side by side, and put together the stack that fits your next project.
      </p>
      <div>
        <button>Explore Technologies</button>
        <button>Learn More</button>
      </div>
    
    </div>
        <div>
            <img src={heroImg} alt="Hero section's image..." />
        </div>
    </div>
  );
};

export default hero;
