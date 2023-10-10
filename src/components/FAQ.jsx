import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Pourquoi choisir Fluid CRM plutôt qu'une solution Open Source?",
    answer:
      "Fluid CRM vous fait gagner du temps en étant prêt à l'emploi, sans nécessiter de développement complexe. Notre équipe dévouée est là pour vous accompagner avec une assistance personnelle et des mises à jour régulières. Optez pour la simplicité et la performance avec Fluid CRM, sans les tracas techniques. Rejoignez les leaders qui font confiance à notre solution.",
  },
  {
    question: "Pouvez-vous personnaliser le CRM ?",
    answer:
      "Oui, vous pouvez facilement personnaliser Fluid CRM grâce à ses puissants outils intégrés. Si vos besoins sont encore plus spécifiques, notre équipe de support est là pour vous. Nous analyserons vos exigences et créerons un devis sur mesure pour améliorer votre expérience. Chez Fluid CRM, la personnalisation est au cœur de notre approche.",
  },
  {
    question: "Y a-t-il des frais d'onBoarding ?",
    answer:
      "Non, vous pouvez commencer à utiliser Fluid CRM directement, sans frais supplémentaires. Notre CRM est prêt à l'emploi. Cependant, si vous souhaitez une expérience plus rapide, vous pouvez contacter notre équipe pour des services d'importation et de configuration, disponibles en option. Nous sommes là pour vous offrir la meilleure expérience possible avec Fluid CRM.",
  },
  {
    question: "Comment obtenir de l'aide ?",
    answer:
      "Pour obtenir de l'aide, nous mettons à votre disposition une documentation complète, comprenant des guides texte et vidéo, qui seront continuellement enrichis pour répondre à vos besoins. Si vous avez des questions spécifiques ou avez besoin d'une assistance personnalisée, n'hésitez pas à nous contacter par e-mail à support@fluid-crm.fr. Notre équipe est là pour vous accompagner à chaque étape.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-custom-gradient overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-primary-50 text-center">
            Besoin de plus d'informations ?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Foire Aux Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`FAQ-${item.question}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-white mb-4 relative shadow-lg ease-linear duration-300 hover:shadow-2xl cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className="text-primary-900 pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={` pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
