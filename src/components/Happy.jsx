import { motion } from "framer-motion";
const happy_customers = "/images/happy_customers.png";

export const Happy = () => {
  return (
    <section className="w-full bg-white   flex justify-center  items-center  py-16 ">
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Résultat ? <strong> Aucun prospect n'est mis de côté</strong>
            </h2>
            <div className="flex items-center justify-center w-full ">
              <img src={happy_customers} alt="Des équipes commerciales efficaces" />
            </div>
          </div>

        </motion.div>
      </div>
    </section>);
};