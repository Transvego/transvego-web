import { LINKS } from "../../constants/nav";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (!element) return;

    const yOffset = -260;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ width: window.innerWidth < 768 ? "100%" : "80%" }}
        animate={{
          width: window.innerWidth < 768 ? "100%" : scrolled ? "60%" : "80%",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="
          py-2 pl-4 pr-2 flex items-center justify-between bg-white border border-primary
          fixed z-50
          top-0 md:top-16
          md:left-1/2 md:-translate-x-1/2
          w-full md:w-auto
          rounded-none md:rounded-full
        "
      >
        <img
          src="/images/logos/primary-responsive.webp"
          alt="Transvego"
          className="w-7 lg:hidden"
        />

        <img
          src="/images/logos/primary.webp"
          alt="Transvego"
          className="hidden lg:block w-45"
        />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {LINKS.map(({ label, href }, i) => (
              <li key={i}>
                <Button onClick={() => handleScroll(href)} link small>
                  {label}
                </Button>
              </li>
            ))}
            <li className="ml-2 xl:ml-6">
              <Button onClick={() => handleScroll("#contacto")} small>
                Contáctanos
              </Button>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col"
          >
            <ul className="flex-1 flex flex-col items-center justify-center gap-6">
              {LINKS.map(({ label, href }, i) => (
                <li key={i}>
                  <Button
                    onClick={() => {
                      handleScroll(href);
                      setOpen(false);
                    }}
                    link
                  >
                    {label}
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => {
                    handleScroll("#contacto");
                    setOpen(false);
                  }}
                >
                  Contáctanos
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
