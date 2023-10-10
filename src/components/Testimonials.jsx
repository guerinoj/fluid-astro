import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
const testimonial1 = "/images/testimonial1.png";
const testimonial2 = "/images/testimonial2.png";
const testimonial3 = "/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Jonathan Guerino",
    customerTitle: "Fondateur de Fluid CRM",
    content:
      "Qui aime les tableurs ? Qui souhaite perdre son temps en configuration d'une usine à gaz ? Personne. C'est ce que je me suis dit en créant Fluid CRM : Comment mettre l'utilisateur au centre de l'application tout en gardant les fonctionnalités essentielles : celles qui permettent de gagner du temps au quotidien. C'est mon souhait pour les utilisateurs de Fluid CRM.",
    image: testimonial1,
  },
  {
    customerName: "JM De Lanversin",
    customerTitle: "PDG de A3R Solutions",
    content:
      "Nous avions essayé de nombreux CRM, comme Salseforce par exemple. Nous avons choisi Fluid CRM pour sa simplicité, il est adapté à la taille de notre équipe commerciale. Et aussi pour la réactivité de son support. ",
    image: testimonial2,
  },
  {
    customerName: "Jonathan Sardo",
    customerTitle: "Fondateur de Uccello Labs",
    content:
      "En tant qu'entrepreneur, j'ai besoin d'un outil simple d'utilisation et qui me permet de bien suivre ma prospection. Fluid CRM est facile à prendre en main et convient parfaitement à mes besoins. ",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center py-16 bg-white relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Témoignages
        </div>
        <h2 className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Ils gagnent chaque jour du temps avec Fluid CRM
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 neumorphism flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="text-primary-900 h-60">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="text-primary-900 font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
