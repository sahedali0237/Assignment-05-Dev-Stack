
import type { dataType } from "../../type/type";

interface TechnologyCardProps {
  technology: dataType;
  isAdded: boolean;
  onAdd: (technology: dataType) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <article className="flex min-h-67.5 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-auto pt-4">
        <div className="mb-4 border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-600">
              {technology.category}
            </span>

            <span className="text-slate-500">
              {technology.difficulty}
            </span>

            <span className="flex items-center gap-1 font-medium text-slate-600">
              <span className="text-yellow-400">★</span>
              {technology.rating}
            </span>
          </div>
        </div>

        <button
          type="button"
          disabled={isAdded}
          onClick={() => onAdd(technology)}
          className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium transition ${
            isAdded
              ? "cursor-not-allowed bg-pink-600 text-white"
              : "bg-slate-950 text-white hover:bg-linear-to-r hover:from-orange-500 hover:via-pink-500 hover:to-violet-600"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechnologyCard;
