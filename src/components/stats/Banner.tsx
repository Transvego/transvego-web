import { STATS } from "../../constants/stats";
import Counter from "./Counter";

export const StatsBanner = () => {
  return (
    <section className="mt-11 hidden md:flex items-center justify-between gap-4 md:gap-6 lg:gap-12 w-full md:max-w-140 lg:max-w-200">
      {STATS.map(({ value, stat }, i) => (
        <div key={i} className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary-transvego/20">+</span> <Counter value={value} />
          </div>
          <p className="text-sm lg:text-xl text-primary-transvego">{stat}</p>
        </div>
      ))}
    </section>
  );
};
