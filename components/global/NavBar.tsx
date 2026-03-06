import { Logo } from "../elements/Logo";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-4 border-b-muted-foreground/20 border-b h-13">
      <Logo />
    </nav>
  );
};
