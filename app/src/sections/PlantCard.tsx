import { useState } from "react";
import type { Plant } from "./userPlantsHelpers";

type PlantCardProps = {
  plant: Plant;
  onEdit: (plant: Plant) => void;
  onDelete: (id: string) => void;
  onWater: (id: string) => void;
  formatDate: (value: string) => string;
  nextWateringDate: (plant: Plant) => Date;
  dayDifference: (date: Date) => number;
};

const PlantCard = ({
  plant,
  onEdit,
  onDelete,
  onWater,
  formatDate,
  nextWateringDate,
  dayDifference,
}: PlantCardProps) => {
  const next = nextWateringDate(plant);
  const days = dayDifference(next);
  const status =
    days <= 0
      ? "Water today"
      : days === 1
        ? "Water tomorrow"
        : `Next in ${days} days`;

  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <div className="bg-amber-50 rounded-4xl p-6 shadow-lg border border-white/10 h-full flex flex-col">
        <div className="flex-1">
          <div className="flex flex-row justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold">{plant.name}</h3>
              <p className="text-xs text-black/60 mt-1">{plant.variety}</p>
            </div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                days <= 0
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-emerald-800"
              }`}
            >
              {status}
            </span>
          </div>
          <div className="mt-5 grid gap-3 text-sm text-black/70">
            <div className="flex justify-between">
              <span>Next watering</span>
              <span>{formatDate(next.toISOString())}</span>
            </div>
            <div className="flex justify-between">
              <span>Last watered</span>
              <span>{formatDate(plant.lastWatered)}</span>
            </div>
            <div className="flex justify-between">
              <span>Water every</span>
              <span>{plant.frequency} days</span>
            </div>
            {plant.notes ? (
              <div>
                <span className="text-xs uppercase text-black/50">Notes</span>
                <p className="mt-1 text-sm text-black/75">{plant.notes}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => onWater(plant.id)}
            className="text-sm rounded-full bg-emerald-700 px-4 py-2 text-amber-50 font-sans cursor-pointer"
          >
            Water now
          </button>
          <button
            onClick={() => onEdit(plant)}
            className="text-sm rounded-full border border-black/10 px-4 py-2 font-sans cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => setConfirmOpen(true)}
            className="text-sm rounded-full border border-red-200 bg-red-50 px-4 py-2 text-red-700 font-sans cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>

      {confirmOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setConfirmOpen(false)}
          />
          <div className="relative bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
            <h4 className="text-lg font-semibold">Delete plant?</h4>
            <p className="text-sm text-black/60 mt-2">
              This action cannot be undone. Are you sure you want to delete{" "}
              <strong>{plant.name}</strong>?
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 rounded-full border font-sans cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete(plant.id);
                  setConfirmOpen(false);
                }}
                className="px-4 py-2 rounded-full bg-red-600 text-white font-sans cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlantCard;
