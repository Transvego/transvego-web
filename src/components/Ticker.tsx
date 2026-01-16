import { CLIENTS } from "@/constants/clients";
import LogoLoop from "./LogoLoop";

export const Ticker = () => {
  return (
    <LogoLoop
      logos={CLIENTS}
      logoHeight={42}
      speed={50}
      gap={60}
      hoverSpeed={2}
    />
  );
};
