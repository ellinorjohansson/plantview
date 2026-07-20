import Footer from "./src/sections/Footer";
import HeaderSection from "./src/sections/HeaderSection";
import OverviewSection from "./src/sections/OverviewSection";
import UserPlants from "./src/sections/UserPlants";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-col flex-1 w-full max-w-5xl mx-auto">
        <div className="mx-auto flex w-full flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
          <HeaderSection />
        </div>
        <OverviewSection />
        <UserPlants />
      </main>
      <footer className="w-full px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
        <div className="mx-auto flex w-full max-w-4xl justify-center">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
