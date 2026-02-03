import { CONTACT } from "@/constants/contact";
import { ContactCard } from "./cards/Contact";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {CONTACT.map((contact, index) => (
        <ContactCard contact={contact} key={index} />
      ))}
    </div>
  );
};
