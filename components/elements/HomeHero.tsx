import { Button } from "../ui/button";

export const HomeHero = () => {
  return (
    <section className="h-[calc(100vh-52px)] flex flex-col items-center justify-center text-center gap-4 px-6">
      <h1 className="text-3xl md:text-5xl font-medium max-w-4xl">
        Make your colors <span className="font-semibold">accessible.</span>{" "}
        <span className="animate-pulse"> Instantly.</span>
      </h1>
      <p className="text-base md:text-xl max-w-3xl">
        <span className="font-medium">ColorGuard</span> helps designers and
        developers ensure their websites and UI are fully accessible for all
        users — <span className="font-medium">no guesswork, just clarity.</span>
      </p>
      <div className="my-4 flex items-center justify-center gap-x-3">
        <Button className="cursor-pointer">Try it Free</Button>
        <Button variant="outline" className="cursor-pointer">
          See How It Works
        </Button>
      </div>
    </section>
  );
};
