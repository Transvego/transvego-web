import { Star } from "../icons/Star";

export const Rating = () => {
  return (
    <div className="flex gap-2.5 h-3.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} />
      ))}
    </div>
  );
};
