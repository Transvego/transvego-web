import type { InputProps } from "@/types/ui/input";

export const Input = ({
  placeholder,
  type = "text",
  id,
  name,
  onChange,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
      className="w-full py-3 px-5 rounded-full text-primary-transvego bg-primary-transvego/10 placeholder:text-primary-transvego/60  focus:outline-none focus:ring-2 focus:ring-accent-transvego"
    />
  );
};
