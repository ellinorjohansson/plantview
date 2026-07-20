const UserPlants = () => {
  return (
    <section className="mt-15 mb-10 px-4 md:px-8 lg:px-12">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl">Your green friends</h2>
          <p className="font-sans text-xs text-black/60">
            A cozy diary of every leaf in your care
          </p>
        </div>
        <div>
          <button className="font-sans text-sm flex flex-row items-center bg-linear-to-r from-green-600 via-green-800 to-emerald-800 rounded-full cursor-pointer px-5 py-2 text-amber-50">
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
    </section>
  );
};

export default UserPlants;
