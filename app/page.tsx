import { HomeHero } from "@/components/elements/HomeHero";
import { Issue } from "@/components/elements/Issue";
import { NavBar } from "@/components/global/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className="flex flex-col flex-1 w-full h-full">
        <HomeHero />
        <Issue />
      </main>
    </div>
  );
}
