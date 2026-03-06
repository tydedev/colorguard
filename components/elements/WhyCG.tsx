export const WhyCG = () => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <section className="flex flex-col md:flex-row w-full gap-6 px-6 max-w-6xl mx-auto my-8 py-10">
        <div className="flex flex-col gap-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Why ColorGuard?
          </h2>

          <div className="flex flex-col items-start gap-y-4 pl-3">
            <Info
              title="Fast & intuitive"
              description="No technical setup. Paste a color or upload a design — get results immediately."
            />
            <Info
              title="Designer-friendly"
              description="Export palettes directly to Tailwind, CSS variables, or JSON tokens."
            />
            <Info
              title="Collaborative-ready"
              description="Share results and previews with clients or teammates."
            />
            <Info
              title="Free to start"
              description="Core tools are free; Pro plan lets you save, organize, and track your projects."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface Props {
  title: string;
  description: string;
}

const Info = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-lg">
        <span className="font-semibold">{title}:</span> {description}
      </p>
    </div>
  );
};
