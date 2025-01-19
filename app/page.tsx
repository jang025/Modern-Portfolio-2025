import Hero from "@/components/Hero";
import FloatingNavBar from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
