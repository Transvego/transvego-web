import { motion, AnimatePresence } from "framer-motion";
import type { ButtonProps } from "../../types/ui/button";
import { useState } from "react";

export const Button = ({
  children,
  secondary,
  link,
  small,
  icon,
  type = "button",
  disabled,
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variant = {
    primary:
      "text-white bg-accent-transvego border border-accent-transvego hover:bg-primary-transvego hover:border-primary-transvego",
    secondary:
      "text-primary-transvego border border-primary-transvego hover:text-white hover:bg-accent-transvego hover:border-accent-transvego",
    link: "text-primary-transvego hover:text-white hover:bg-accent-transvego",
    disabled: "bg-gray-300 border border-gray-300 text-gray-500 ",
  };

  const buttonVariant = disabled
    ? "disabled"
    : link
      ? "link"
      : secondary
        ? "secondary"
        : "primary";

  const size = {
    default: "py-3 px-5 text-lg",
    small: "py-2 px-3.5 text-sm",
  };

  return (
    <motion.button
      type={type}
      {...props}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`${!small ? size.default : size.small} font-medium ${
        variant[buttonVariant]
      } flex items-center justify-center rounded-full ${disabled ? "cursor-not-allowed" : "cursor-pointer"}  ${
        !icon ? "transition-all duration-300" : "transition-none "
      }`}
    >
      {children}

      <AnimatePresence>
        {icon && isHovered && (
          <motion.span
            layout
            initial={{ opacity: 0, paddingLeft: 0 }}
            animate={{ opacity: 1, paddingLeft: 12 }}
            exit={{ opacity: 0, paddingLeft: 0 }}
            transition={{
              opacity: { duration: 0.15, ease: "easeOut" },
              paddingLeft: { duration: 0.5, ease: "backIn" },
            }}
            className="flex items-center justify-end"
          >
            {icon}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
