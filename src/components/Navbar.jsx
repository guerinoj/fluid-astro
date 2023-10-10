import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarLinks = [
  { label: "Fonctionnalités", href: "#features", ariaLabel: "Fonctionnalités" },
  { label: "Témoignages", href: "#feedback", ariaLabel: "Témoignages" },
  { label: "Tarifs", href: "#pricing", ariaLabel: "Tarifs" },
  { label: "FAQ", href: "#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setIsVisible(true);
    } else if (scrolled <= 150) {
      setIsVisible(false);
    }
  };

  return (
    <nav className={`w-full h-20 flex flex-col justify-center items-center fixed z-40 ${isVisible ? 'bg-white/70 backdrop-blur-xl' : ''}`}>
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-primary-700 mr-2 text-6xl">
                <img src="/logo-light.svg" alt="Fluid CRM" className="h-10" />

              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a href="/inscription"
              className="flex justify-center items-center rounded-full  shadow bg-primary-500 hover:bg-primary-600 hover:drop-shadow-xl focus-within:bg-primary-700 focus-within:border-primary-700  h-10 px-8  text-white duration-200 "
            >
              Je teste gratuitement

            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border-2 border-primary-600 rounded-md cursor-pointer hover:bg-primary-600 mobile-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-primary-600 mb-1"></div>
          <div className="w-5 h-0.5 bg-primary-600 mb-1"></div>
          <div className="w-5 h-0.5 bg-primary-600 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0   z-50 w-full 
        items-center gap-10 pb-10 border-y bg-white pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a href="/inscription"
                className="border-2 flex justify-center items-center rounded-full border-b-purple-100/30 border-r-purple-100/20 border-t-purple-100/60 border-l-purple-100/50 btn-gradient hover:bg-indigo-700 hover:border-purple-100/80 hover:drop-shadow-2xl focus-within:bg-indigo-700 focus-within:border-indigo-700  h-16 px-8 font-bold text-white duration-200 "
              >
                Je teste gratuitement

              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
