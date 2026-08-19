"use client";

import { useMemo, useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import PlantForm from "./PlantForm";
import SvgPlant2 from "../components/SvgPlant2";
import {
  createId,
  dayDifference,
  emptyPlant,
  formatDate,
  nextWateringDate,
  Plant,
  storageKey,
} from "./userPlantsHelpers";

const UserPlants = () => {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let timer: number | undefined;
    try {
      const stored = window.localStorage.getItem(storageKey);
      const parsed = stored ? (JSON.parse(stored) as Plant[]) : [];
      try {
        const isSame = JSON.stringify([]) === JSON.stringify(parsed);
        if (!isSame) timer = window.setTimeout(() => setPlants(parsed), 0);
      } catch {
        timer = window.setTimeout(() => setPlants(parsed), 0);
      }
    } catch {
      timer = window.setTimeout(() => setPlants([]), 0);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);
  const [formVisible, setFormVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [active, setActive] = useState<Plant>(emptyPlant);

  const dueCount = useMemo(
    () =>
      plants.filter((plant) => dayDifference(nextWateringDate(plant)) <= 0)
        .length,
    [plants],
  );

  const persist = (items: Plant[]) => {
    setPlants(items);
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  };

  const openForm = (plant?: Plant) => {
    setActive(
      plant
        ? { ...plant }
        : {
            ...emptyPlant,
            id: createId(),
            lastWatered: new Date().toISOString().slice(0, 10),
          },
    );
    setEditing(Boolean(plant));
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
    setActive(emptyPlant);
    setEditing(false);
  };

  const handleChange = (field: keyof Plant, value: string) => {
    setActive(
      (current) =>
        ({
          ...current,
          [field]: field === "frequency" ? Number(value) : value,
        }) as Plant,
    );
  };

  const savePlant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updated = editing
      ? plants.map((plant) => (plant.id === active.id ? active : plant))
      : [...plants, active];
    persist(updated);
    closeForm();
  };

  const deletePlant = (id: string) =>
    persist(plants.filter((plant) => plant.id !== id));

  const waterNow = (id: string) =>
    persist(
      plants.map((plant) =>
        plant.id === id
          ? { ...plant, lastWatered: new Date().toISOString().slice(0, 10) }
          : plant,
      ),
    );

  return (
    <section className="mt-15 mb-30 px-4 md:px-8 lg:px-12">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl">Your green friends</h2>
          <p className="font-sans text-xs text-black/60">
            A cozy diary of every leaf in your care
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold">
            {dueCount} {dueCount === 1 ? "plant due" : "plants due"}
          </div>
          <button
            onClick={() => openForm()}
            className="font-sans text-sm flex flex-row items-center shadow-lg bg-linear-to-r from-green-600 via-green-800 to-emerald-800 rounded-full cursor-pointer px-6 py-3 text-amber-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus text-amber-50"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
            Add a plant
          </button>
        </div>
      </div>

      <div className="grid gap-6 mt-8">
        {plants.length === 0 ? (
          <div className="bg-amber-50 rounded-4xl">
            <div className="flex flex-col items-center justify-center mt-5 pt-10 pb-10">
              <SvgPlant2 />
              <h3 className="text-2xl mt-5">Your windowsill is empty</h3>
              <p className="text-xs text-black/60 text-center max-w-sm">
                Pick a plant you have at home and we will help you take care of
                it.
              </p>
              <button
                onClick={() => openForm()}
                className="font-sans text-sm mt-5 flex flex-row items-center shadow-lg bg-linear-to-r from-green-600 via-green-800 to-emerald-800 rounded-full cursor-pointer px-6 py-3 text-amber-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus text-amber-50"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                Add your first plant
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 auto-rows-fr">
            {plants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onEdit={openForm}
                onDelete={deletePlant}
                onWater={waterNow}
                formatDate={formatDate}
                nextWateringDate={nextWateringDate}
                dayDifference={dayDifference}
              />
            ))}
          </div>
        )}
      </div>

      {formVisible ? (
        <PlantForm
          active={active}
          editing={editing}
          onChange={handleChange}
          onClose={closeForm}
          onSave={savePlant}
        />
      ) : null}
    </section>
  );
};

export default UserPlants;
