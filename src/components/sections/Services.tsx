import { useState } from "react";
import { Service } from "../cards/Service";
import { SERVICES } from "../../constants/services";

export const Services = () => {
  const [active, setActive] = useState<Number | null>(null);

  return (
    <section className="mt-65 lg:h-120">
      <h2 className="mb-6 md:mb-16 text-primary-transvego text-3xl md:text-5xl lg:text-[64px] font-medium">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-y-40 gap-x-20 lg:gap-12 w-full">
        {SERVICES.map((service,index) => (
          <Service
            key={index}
            service={service}
            active={active === index}
            setActive={setActive}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
