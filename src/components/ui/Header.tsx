// import { LINKS } from "../../constants/nav";
// import { Button } from "./Button";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{
//         width: "80%",
//       }}
//       animate={{
//         width: scrolled ? "60%" : "80%",
//       }}
//       transition={{ type: "spring", stiffness: 200, damping: 30 }}
//       className="py-2 pl-4 pr-2 flex items-center justify-between bg-white border border-primary rounded-full fixed z-50 top-16 left-1/2 -translate-1/2"
//     >
//       <img
//         src="/images/logos/primary-responsive.webp"
//         alt="Transvego"
//         className="w-7 lg:hidden"
//       />

//       <img
//         src="/images/logos/primary.webp"
//         alt="Transvego"
//         className="hidden lg:block w-45"
//       />

//       <nav className="hidden md:block">
//         <motion.ul className="flex items-center">
//           {LINKS.map(({ label, href }, i) => (
//             <motion.li
//               key={i}
//               initial={{marginRight : 16}}
//               animate={{ marginRight: scrolled ? 8 : 16 }}
//               transition={{ type: "spring", stiffness: 200, damping: 30 }}
//             >
//               <a href={href}>
//                 <Button link small>
//                   {label}
//                 </Button>
//               </a>
//             </motion.li>
//           ))}
//         </motion.ul>
//       </nav>
//       <div className="xl:hidden">
//         <Button small>Contáctanos</Button>
//       </div>
//       <div className="hidden xl:block">
//         <Button>Contáctanos</Button>
//       </div>
//     </motion.header>
//   );
// };

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

  return (
    <>
      {/* HEADER */}
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
        {/* Logo mobile */}
        <img
          src="/images/logos/primary-responsive.webp"
          alt="Transvego"
          className="w-7 lg:hidden"
        />

        {/* Logo desktop */}
        <img
          src="/images/logos/primary.webp"
          alt="Transvego"
          className="hidden lg:block w-45"
        />

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {LINKS.map(({ label, href }, i) => (
              <li key={i}>
                <a href={href}>
                  <Button link small>
                    {label}
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button small>Contáctanos</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </motion.header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col"
          >
            {/* Spacer for header height */}
            <div className="h-14" />

            <ul className="flex-1 flex flex-col items-center justify-center gap-6">
              {LINKS.map(({ label, href }, i) => (
                <li key={i}>
                  <a href={href} onClick={() => setOpen(false)}>
                    <Button link>{label}</Button>
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button small>Contáctanos</Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
