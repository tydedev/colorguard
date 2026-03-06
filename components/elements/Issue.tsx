export const Issue = () => {
  return (
    <section className="flex flex-col md:flex-row w-full max-w-5xl mx-auto my-8 gap-6 px-6">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl md:text-4xl font-semibold">
          The Accessibility Gap
        </h2>
        <p className="font-medium">
          40 % of color combinations on top websites fail accessibility
          standards. Make sure your design isn’t one of them.
        </p>
      </div>
      <div className="self-center">
        <p>
          Many designers and developers focus on aesthetics, but accessibility
          is often overlooked — leaving users with visual impairments struggling
          to read your content.
        </p>
      </div>
    </section>
  );
};
