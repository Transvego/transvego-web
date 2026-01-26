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
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ width: "80%" }}
        animate={{ width: scrolled ? "60%" : "80%" }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="py-2 pl-4 pr-2 flex items-center justify-between bg-white border border-primary rounded-full fixed z-50 top-16 left-1/2 -translate-x-1/2"
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
          <motion.ul className="flex items-center">
            {LINKS.map(({ label, href }, i) => (
              <motion.li
                key={i}
                initial={{ marginRight: 16 }}
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
            <li>
              <Button small>Contáctanos</Button>
            </li>
          </motion.ul>
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          <span className="text-xl">☰</span>
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-32 left-1/2 -translate-x-1/2 w-[90%] bg-white border border-primary rounded-2xl p-6 z-40 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {LINKS.map(({ label, href }, i) => (
                <li key={i}>
                  <a href={href} onClick={() => setOpen(false)}>
                    <Button link>{label}</Button>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button >Contáctanos</Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
