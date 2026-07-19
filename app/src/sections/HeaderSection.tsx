import SvgPlant from "../components/SvgPlant";

const HeaderSection = () => {
  return (
    <section>
      <div className="flex flex-row gap-5 items-center">
        <span
          className="backdrop-blur-md border border-white/10 shadow-lg rounded-full px-3 py-3 w-15 h-15"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <SvgPlant />
        </span>
        <div>
          <h1 className="mb-1 flex items-center text-4xl! tracking-tight text-black/90 md:text-5xl">
            Sprout Diary
          </h1>
          <p className="font-sans text-sm text-black/60">
            a tiny, cozy home for your houseplants
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
