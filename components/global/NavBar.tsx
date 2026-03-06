import { Logo } from "../elements/Logo";
import { ModeToggle } from "../toggles/ModeToggle";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 border-b-muted-foreground/20 border-b h-13">
      <Logo />
      <ModeToggle />
    </nav>
  );
};
