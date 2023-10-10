import { LinkedIn } from "../assets/icons/LinkedIn";
import { Youtube } from "../assets/icons/Youtube";
import { Support } from "../assets/icons/Support";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-white radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="text-center text-primary-900">
            <h2 class="mx-auto my-10 text-2xl font-black text-center lg:w-2/3 xl:w-1/2 sm:text-5xl ">Prêt à <strong>booster</strong> votre activité ?</h2>
            <p className="text-lg py-5 font-medium">Testez dès maintenant Fluid CRM pendant 14 jours et découvrez comment simplifier votre gestion de clients.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-14 justify-center">
            <a href="/inscription"
              className="border-2 rounded-full flex items-center border-b-purple-100/30 border-r-purple-100/20 border-t-purple-100/60 border-l-purple-100/50 btn-gradient hover:bg-indigo-700 hover:border-purple-100/80 hover:drop-shadow-xl shadow focus-within:bg-indigo-700 focus-within:border-indigo-700 relative h-16 px-8 font-bold text-white duration-200 "
            >
              Je teste gratuitement
            </a>
          </div>

          <div class="flex justify-center pt-16 space-x-10">
            
              <a href='https://www.linkedin.com/in/jonathan-guerino-14b34951' target="_blank" class="text-primary-500 hover:text-primary-600">
                <span class="sr-only">LinkedIn</span>
                <LinkedIn />
              </a>

              <a href='https://www.youtube.fr' target="_blank" class="text-primary-500 hover:text-primary-600">
                <span class="sr-only">Youtube</span>
                <Youtube />
              </a>

              <a href='mailto:support@fluid-crm.fr' target="_blank" class="text-primary-500 hover:text-primary-600">
                <span class="sr-only">Support client</span>
                <Support />
              </a>
            
          </div>

          <p className="lg:text-center text-sm text-primary-600 pt-12 mt-16 ">
            &copy; 2023 Fluid CRM by <a href="https://www.peakway.fr">Peak Way</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
