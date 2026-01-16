import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  secondary?: boolean;
  link ? : boolean;
  small?: boolean;
  icon ? : React.ReactNode;
}
