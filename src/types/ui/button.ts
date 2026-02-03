import type { HTMLMotionProps } from "motion/react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  secondary?: boolean;
  link ? : boolean;
  small?: boolean;
  icon ? : React.ReactNode;
}
