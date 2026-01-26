import type { InputProps } from "@/types/ui/input";

export const Input = ({ placeholder, type = "text", id, name }: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full py-3 px-5 rounded-full text-primary-transvego bg-primary-transvego/10 placeholder:text-primary-transvego/60"
    />
  );
};
