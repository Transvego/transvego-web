import { ClientCard } from "./cards/Client";
import Stack from "./Stack";

export const Testimonials = () => {
  return (
    <div className="w-72 h-80  md:w-180 md:h-52">
      <Stack
        cards={[
          <ClientCard />,
          <ClientCard />,
          <ClientCard />,
          <ClientCard />,
          <ClientCard />,
        ]}
        sensitivity={170}
        autoplay
        autoplayDelay={4000}
      />
    </div>
  );
};
