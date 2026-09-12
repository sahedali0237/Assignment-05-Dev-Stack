import { use, useState } from "react";
import { toast } from "react-toastify";
import type { dataType } from "../../type/type";
import TechnologyCard from "./TechnologyCard";
import TechnologySidebar from "./technologySidebar";

interface TechnologiesProps {
  dataPromise: Promise<dataType[]>;
}

const AllTechnologies = ({ dataPromise }: TechnologiesProps) => {
  const data = use(dataPromise);
  const [stack, setStack] = useState<dataType[]>([]);


  const handleAddToStack = (technology: dataType) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);


    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    
    setStack((previousStack) => [...previousStack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTechnology = stack.find((item) => item.id === id);

    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.warning(`${removedTechnology.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.warning("All technologies removed from your stack!");
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_270px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAdd={handleAddToStack}
              />
            ))}
          </div>

          <TechnologySidebar
            stack={stack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />

        </div>

      </div>
    </section>
  );
};

export default AllTechnologies;
