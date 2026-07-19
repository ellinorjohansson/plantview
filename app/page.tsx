import HeaderSection from "./src/sections/HeaderSection";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="card-soft w-full max-w-4xl p-10 md:p-16">
        <HeaderSection />
      </main>
    </div>
  );
}
