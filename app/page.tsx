import SvgPlant from "./src/components/SvgPlant";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <main className="card-soft w-full max-w-4xl p-10 md:p-16">
        <section>
          <div className="flex flex-row gap-5">
            <span
              className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-3 py-3 w-19 h-19"
              style={{
                animation: "float 3s ease-in-out infinite",
              }}
            >
              <SvgPlant />
            </span>
            <div>
              <h1 className="font-serif text-5xl font-semibold flex items-center mb-1">
                Sprout Diary
              </h1>
              <p className="text-black/50">
                a tiny, cozy home for your houseplants
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
