import { motion } from "framer-motion";

const feature5 = "/images/feature5.jpg";
const feature6 = "/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full mt-5 sm:mt-20 mb-10 lg:my-10">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={feature5}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={feature6}
                alt="f2"
                className="rounded-xl  custom-border-gray"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              Un CRM facile à prendre en main
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Votre pipeline de ventes encore plus fluide
            </h2>
            <p className="mb-6 text-primary-900 leading-loose">
              Créez facilement des comptes avec le remplissage automatique des données. Gérez les contacts, les réunions et les activités en quelques clics.
            </p>
            <p className="mb-12 text-primary-900 leading-loose">Pour que CRM ne rime plus avec complexité.</p>
            <ul className="mb-6 text-primary-900">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Comptes, Contacts et activités illimités</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Suivi des prospects avec la méthode Kanban</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Calendrier des activités</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
