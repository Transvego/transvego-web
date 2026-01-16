import { LINKS } from "../../constants/nav";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{
        width: "80%",
      }}
      animate={{
        width: scrolled ? "60%" : "80%",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className="py-2 pl-4 pr-2 flex items-center justify-between bg-white border border-primary rounded-full fixed z-50 top-16 left-1/2 -translate-1/2"
    >
      <img
        src="/images/logos/primary-responsive.webp"
        alt="Transvego"
        className="w-7 lg:hidden"
      />

      {/* Laptop en adelante */}
      <img
        src="/images/logos/primary.webp"
        alt="Transvego"
        className="hidden lg:block w-45"
      />

      <nav className="hidden md:block">
        <motion.ul className="flex items-center">
          {LINKS.map(({ label, href }, i) => (
            <motion.li
              key={i}
              initial={{marginRight : 16}}
              animate={{ marginRight: scrolled ? 8 : 16 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              <a href={href}>
                <Button link small>
                  {label}
                </Button>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <div className="xl:hidden">
        <Button small>Contáctanos</Button>
      </div>
      <div className="hidden xl:block">
        <Button>Contáctanos</Button>
      </div>
    </motion.header>
  );
};
