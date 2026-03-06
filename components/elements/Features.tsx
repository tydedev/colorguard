import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const Features = () => {
  return (
    <section className="flex flex-col w-full gap-6 px-6 max-w-6xl mx-auto my-8 py-10">
      <h2 className="text-2xl md:text-4xl font-semibold mb-8">
        What does ColorGuard do?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Contrast Checker"
          subtitle="Instantly check text and background contrast."
          description="Make sure your content meets WCAG AA and AAA standards — automatically and visually."
        />

        <FeatureCard
          title="Palette Generator"
          subtitle="Create accessible color palettes in seconds."
          description="Generate WCAG-compliant scales for Tailwind, CSS variables, or JSON design tokens. Never worry about contrast again."
        />
        <FeatureCard
          title="Daltonism Simulator"
          subtitle="See your designs like everyone else does."
          description="Simulate Protanopia, Deuteranopia, Tritanopia, or full color blindness on uploaded images or screenshots."
        />
        <FeatureCard
          title="Website Scanner (Pro)"
          subtitle="Scan entire pages and highlight accessibility issues visually."
          description="Perfect for agencies, teams, and freelancers working with client websites."
        />
      </div>
    </section>
  );
};

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

const FeatureCard = ({ title, subtitle, description }: Props) => {
  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-foreground font-medium text-lg">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
};
