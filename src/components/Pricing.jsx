import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Comptes illimités",
  "Contacts illimités",
  "Activités illimitées",
  "Collaboration facile avec gestion des droits",
  "CRM Responsive",
  "Gestion multi agences",
  "Suivi des prospects avec la méthode Kanban",
  "Rapports personalisés",
  "Import/export des données",
  "Gestion des campagnes"
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center  relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Tarifs
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primary-900">
                Une offre simple à choisir
              </h2>
              <p className="mb-6 text-primary-800">
                Choissez la formule qui correspond à vos besoins.
              </p>
              <label className="mx-auto bg-white relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-white after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-primary-600   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Mensuel
                  </div>
                  <div className={isMonthly && "text-gray-400"}>Annuel</div>
                </div>
              </label>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 shadow-yellow text-primary-900  rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading  text-left">
                    Découverte
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-left mt-4 mr-2">
                      0€
                    </div>
                    <div className="text-gray-500">
                      Pendant 14 jours
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Découvrez toutes les fonctionnalités de Fluid CRM gratuitement
                  </p>
                  <ul className="mb-2 2xl:mb-6 ">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Je teste gratuitement
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 shadow-yellow text-primary-900 border-4 border-primary-600 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-left">
                    Premium
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primary-600 text-left mt-4 mr-2">
                      {isMonthly ? "29€" : "290 €"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ mois par utilisateur" : "/ an par utilisateur"}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Toutes les fonctionnalités sans limites.
                  </p>
                  <ul className="mb-14 ">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Je teste gratuitement
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 shadow-yellow text-primary-900 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading  text-left">
                    Personnalisé
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold  text-left mt-4 mr-2">
                    Sur devis
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Pour les entreprises avec des exigences sur mesure.
                  </p>
                  <ul className="mb-2 2xl:mb-6 ">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:hello@fluid-crm.fr"
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    
                  >
                    Contactez-nous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
