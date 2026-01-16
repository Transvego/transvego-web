import { CONTACT } from "../../constants/contact";
import { LINKS } from "../../constants/nav";
import { Wrapper } from "../Wrapper";

export const Footer = () => {
  return (
    <footer className="mt-32 md:mt-40 py-16">
      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-16 justify-between w-full">
          <div className="flex flex-col gap-2 md:gap-6">
            <img
              src="/images/logos/primary.webp"
              alt="Transvego"
              className="w-56 md:w-70"
            />
            <p className="text-primary-transvego/60">
              Servimos con calidad y calidez <br className="hidden md:block" />
              por una Colombia mejor
            </p>
          </div>
          <div>
            <p className="text-xl text-primary-transvego font-medium mb-1">Contacto</p>
            <div className="flex flex-col gap-2.5">
              {CONTACT.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 text-primary-transvego/80"
                >
                  <i>{contact.icon}</i> {contact.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4">
            {LINKS.map((link, index) => (
              <a key={index} href={link.href} className="text-xl text-primary-transvego/80 font-medium hover:text-accent-transvego transition">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
