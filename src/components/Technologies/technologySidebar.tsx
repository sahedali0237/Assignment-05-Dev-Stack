import type { dataType } from "../../type/type";

interface TechnologySidebarProps {
  stack: dataType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const TechnologySidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: TechnologySidebarProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="mt-5 flex min-h-25 items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 text-center">
          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-slate-900">
                    {technology.name}
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="text-xl leading-none text-slate-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default TechnologySidebar;
