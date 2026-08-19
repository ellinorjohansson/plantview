export type Plant = {
  id: string;
  name: string;
  variety: string;
  frequency: number;
  lastWatered: string;
  notes: string;
};

export const storageKey = "plantview-plants";

export const createId = () =>
  typeof crypto === "undefined" ? String(Date.now()) : crypto.randomUUID();

export const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

export const dayDifference = (date: Date) =>
  Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

export const nextWateringDate = (plant: Plant) => {
  const next = new Date(plant.lastWatered);
  next.setDate(next.getDate() + plant.frequency);
  return next;
};

export const emptyPlant: Plant = {
  id: "",
  name: "",
  variety: "",
  frequency: 7,
  lastWatered: new Date(0).toISOString().slice(0, 10),
  notes: "",
};
