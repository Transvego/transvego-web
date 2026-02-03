import type { Contact } from "@/types/contact";

export const ContactCard = ({ contact }: { contact: Contact }) => {
  return (
        <p className="flex flex-col text-primary-transvego/60 font-medium text-sm md:text-base">
          {contact.label}
          <span className="text-primary-transvego font-medium text-base md:text-xl">
            {contact.data}
          </span>
        </p>

  );
};
