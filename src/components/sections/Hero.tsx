import { handleScroll } from "@/lib/utils";
import { StatsBanner } from "../stats/Banner";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <div className="bg-[url(/images/hero.webp)] bg-cover bg-center bg-no-repeat h-dvh">
      <div className="flex flex-col items-center justify-center mx-auto h-full">
        <h1 className="hidden">TRANSVEGO</h1>
        <div className="flex flex-col items-center justify-center text-center max-w-90 md:max-w-120 lg:max-w-none mx-4 lg:mx-auto">
          <h2 className="text-primary-transvego text-3xl md:text-4xl lg:text-[64px] font-medium mb-4 leading-none">
            Cada viaje es una <br /> experiencia memorable
          </h2>
          <p className="text-primary-transvego/70 text-sm md:text-base lg:text-xl  mb-9">
            Garantizando comodidad, seguridad y eficiencia <br /> con un
            servicio sostenible y un equipo altamente capacitado
          </p>
          <div className="lg:hidden">
            <Button small onClick={() => handleScroll("#contacto")}>
              Trabajemos Juntos
            </Button>
          </div>
          <div className="hidden lg:block">
            <Button onClick={() => handleScroll("#contacto")}>
              Trabajemos Juntos
            </Button>
          </div>
        </div>
        <StatsBanner />
      </div>
    </div>
  );
};
