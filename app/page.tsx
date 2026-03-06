import { Features } from "@/components/elements/Features";
import { HomeHero } from "@/components/elements/HomeHero";
import { Issue } from "@/components/elements/Issue";
import { WhyCG } from "@/components/elements/WhyCG";
import { NavBar } from "@/components/global/NavBar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <NavBar />
      <main className="flex flex-col flex-1 w-full h-full">
        <HomeHero />
        <Issue />
        <Features />
        <WhyCG />
        <div className="text-center space-y-8 my-10 px-6">
          <h3 className="text-3xl text-center font-semibold">
            Stop guessing, start designing accessibly.
          </h3>
          <div className="flex items-center justify-center gap-x-3">
            <Button className="cursor-pointer">Try ColorGuard Free</Button>
            <Button className="cursor-pointer" variant="outline">
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
