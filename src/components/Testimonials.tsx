import { ClientCard } from "./cards/Client";
import Stack from "./Stack";

export const Testimonials = () => {
  return (
    <div className="w-full pr-12 md:pr-0 md:w-200 lg:w-150 h-80">
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
