import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US");

export default function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const formatted = useTransform(count, (latest) =>
    formatter.format(Math.round(latest))
  );


  useEffect(() => {
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    return () => controls.stop();
  }, [value]);

  return (
    <motion.pre className="text-primary-transvego text-2xl md:text-4xl lg:text-[64px] font-medium leading-none">
      {formatted}
    </motion.pre>
  );
}
