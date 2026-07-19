import SvgPlant from "../components/SvgPlant";

const HeaderSection = () => {
  return (
    <section>
      <div className="flex flex-row gap-5">
        <span
          className="bg-yellow-200/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-3 py-3 w-15 h-15"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <SvgPlant />
        </span>
        <div>
          <h1 className="font-serif text-4xl font-semibold flex items-center mb-1">
            Sprout Diary
          </h1>
          <p className="text-black/50">
            a tiny, cozy home for your houseplants
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
