
import type { dataType } from "../../type/type";

interface TechnologiesProps {
  dataPromise: Promise<dataType[]>;
}

const AllTechnologies = ({ dataPromise }: TechnologiesProps) => {
 







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



        
      </div>
    </section>
  );
};

export default AllTechnologies;