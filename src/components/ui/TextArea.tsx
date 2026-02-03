import type { TextAreaProps } from "@/types/ui/textArea";

export const TextArea = ({
  placeholder = "Label",
  id,
  name,
  onChange,
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      id={id}
      name={name}
      onChange={onChange}
      {...props}
      className="w-full h-52 py-3 px-5 bg-primary-transvego/10 rounded-xl text-primary-transvego placeholder:text-primary-transvego/60 focus:outline-none focus:ring-2 focus:ring-accent-transvego"
      placeholder={placeholder}
    ></textarea>
  );
};
