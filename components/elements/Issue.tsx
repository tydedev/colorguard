import Link from "next/link";
import { Button } from "../ui/button";

export const Issue = () => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <section className="flex flex-col md:flex-row w-full gap-6 px-6 max-w-6xl mx-auto my-8 py-10">
        <div className="flex flex-col gap-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold">
            The Accessibility Gap
          </h2>

          <div className="flex items-center gap-x-4">
            <span className="text-5xl md:text-6xl font-bold">40%</span>
            <p className="font-medium text-lg">
              of color combinations on top websites fail accessibility
              standards.
            </p>
          </div>
        </div>
        <div className="flex-2/3 flex flex-col gap-y-5">
          <p className="text-lg">
            Designers focus on aesthetics. Developers focus on shipping.
            Accessibility often slips through the cracks — leaving millions of
            users struggling to read content because of poor color contrast.
          </p>

          <p className="text-lg font-medium">
            ColorGuard helps you catch these issues instantly.
          </p>
        </div>
      </section>
    </div>
  );
};
