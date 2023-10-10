import { motion } from "framer-motion";


export const Zapier = () => {
  return (
    <section className="w-full bg-custom-gradient  flex justify-center  items-center  py-16 ">
      <div className="flex flex-col justify-center items-center text-center   2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-40 items-center p-5">
            <div className="lg:w-2/5 flex flex-col justify-center items-center gap-5">
              <img className="w-10/12" src="/logo-light.svg" alt="Fluid CRM" />
              <div className=" text-7xl">+</div>
              <img className="w-10/12" alt="Zapier" src="https://res.cloudinary.com/zapier-media/image/upload/q_auto/v1685628568/Zapier%20logos/zapier-logo-no-space_hihmgg.svg" />

            </div>
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 lg:w-3/5 xl:w-2/5 text-left">
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title text-primary-50">
                Intégrez vos <strong>outils préférés</strong> avec Zapier
              </h2>
              <p className=" text-primary-50 leading-loose pb-5">
                <strong>Automatisez facilement</strong> vos workflows avec <a href="https://zapier.com" target="_blank">Zapier</a>. Connectez vos applications préférées, comme Outlook, Gmail, Facebook, Mailchimp et bien plus encore grâce à <a href="https://zapier.com" target="_blank">Zapier</a>.
              </p>
              <p className=" text-primary-50 leading-loose pb-5">
                Avec Fluid CRM, vous économisez du temps et de l'argent grâce à une automatisation simplifiée de vos processus, et vous pouvez <strong>intégrer de nombreuses applications</strong>, même celles qui ne sont pas directement compatibles.
              </p>
              <p className=" text-primary-50 leading-loose">
                Bientôt disponible.
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>);
};