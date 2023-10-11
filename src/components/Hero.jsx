import { useState } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen  flex justify-center  items-center  pb-24 sm:pb-32 md:pb-44 "
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary-50 text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Découvrez Fluid CRM
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold md:py-10  text-primary-50  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="md:inline">Le CRM qui <strong>simplifie</strong> votre gestion client</span>
          </h1>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-indigo-50 text-sm lg:text-base xl:text-lg sm:text-base mt-10 ">
          Gagnez chaque jour du temps sur vos activités commerciales. <br />
          Testez gratuitement pendant 14 jours. Pas de carte bancaire nécessaire.<br />
          
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-14 justify-center">
            <a href="/inscription"
              className="border-2 rounded-full flex items-center border-b-purple-100/30 border-r-purple-100/20 border-t-purple-100/60 border-l-purple-100/50 btn-gradient hover:bg-indigo-700 hover:border-purple-100/80 hover:drop-shadow-2xl focus-within:bg-indigo-700 focus-within:border-indigo-700 relative w-full h-16 px-8 font-bold text-white duration-200 "
            >
              Je teste gratuitement
              <img class="absolute -right-4 -top-10 h-14" src="/images/smiley.png" alt="Inscription" />
            </a>
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="w-screen flex justify-center ">
            <img
              src="/images/dashboard.jpg"
              alt="Tout ce dont vous avez besoin pour gérer vos activités commerciales"
              className="w-4/5 2xl:w-[1200px] mx-auto shadow-lg shadow-primary-700/40 rounded-2xl"
            />
          </div>
        </motion.div>
       
      </div>
    </section>
  );
};
