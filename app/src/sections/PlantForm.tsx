import type { Plant } from "./userPlantsHelpers";

type PlantFormProps = {
  active: Plant;
  editing: boolean;
  onChange: (field: keyof Plant, value: string) => void;
  onClose: () => void;
  onSave: (event: React.FormEvent<HTMLFormElement>) => void;
};

const PlantForm = ({
  active,
  editing,
  onChange,
  onClose,
  onSave,
}: PlantFormProps) => (
  <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 px-4 py-8">
    <div className="w-full max-w-xl rounded-4xl bg-white p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">
            {editing ? "Edit plant" : "Add plant"}
          </h3>
          <p className="text-xs text-black/60 mt-1">
            Track watering and care for every plant.
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full border border-black/10 px-3 py-2 text-sm cursor-pointer font-sans"
        >
          Close
        </button>
      </div>
      <form className="mt-6 space-y-4" onSubmit={onSave}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>Name</span>
            <input
              value={active.name}
              onChange={(event) => onChange("name", event.target.value)}
              required
              className="w-full rounded-3xl border border-black/10 bg-slate-50 px-4 py-3 text-sm"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Variety</span>
            <input
              value={active.variety}
              onChange={(event) => onChange("variety", event.target.value)}
              required
              className="w-full rounded-3xl border border-black/10 bg-slate-50 px-4 py-3 text-sm"
            />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="space-y-2 text-sm">
            <span>Frequency (days)</span>
            <input
              type="number"
              min="1"
              value={active.frequency}
              onChange={(event) => onChange("frequency", event.target.value)}
              required
              className="w-full rounded-3xl border border-black/10 bg-slate-50 px-4 py-3 text-sm"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Last watered</span>
            <input
              type="date"
              value={active.lastWatered}
              onChange={(event) => onChange("lastWatered", event.target.value)}
              required
              className="w-full rounded-3xl border border-black/10 bg-slate-50 px-4 py-3 text-sm"
            />
          </label>
        </div>
        <label className="space-y-2 text-sm">
          <span>Notes</span>
          <textarea
            value={active.notes}
            onChange={(event) => onChange("notes", event.target.value)}
            rows={4}
            className="w-full rounded-3xl border border-black/10 bg-slate-50 px-4 py-3 text-sm"
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="w-full rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-amber-50 sm:w-auto cursor-pointer font-sans">
            {editing ? "Save changes" : "Add plant"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-full border border-black/10 px-5 py-3 text-sm sm:w-auto cursor-pointer font-sans"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default PlantForm;
