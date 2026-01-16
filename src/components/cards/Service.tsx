import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";
import { Arrow } from "../icons/Arrow";
import type { ServiceProps } from "../../types/ui/service";

export const Service = ({
  service,
  active,
  setActive,
  index,
}: ServiceProps) => {
  return (
    <motion.article
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
      animate={{
        flexGrow: active ? 2 : 1,
      }}
      className="flex flex-col gap-3 flex-1 basis-0 min-h-64 cursor-pointer"
    >
      <motion.h4
        animate={{
          color: active ? "#00D47B" : "rgba(0,0,0,0.2)",
          fontSize: active ? "80px" : "64px",
        }}
      >
        {`0${index + 1}.`}
      </motion.h4>
      <h3 className="text-2xl md:text-[40px] text-primary-transvego">{service.service}</h3>
      <p className="text-primary-transvego/80">{service.description}</p>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
          >
            <Button secondary small icon={<Arrow />}>
              Ver Más
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};