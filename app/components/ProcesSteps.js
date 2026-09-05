import { Fade, Flip, Slide, Zoom } from "react-awesome-reveal";
import { BsChatLeftDots } from "react-icons/bs";
import { GiCrane } from "react-icons/gi";
import { IoKeyOutline } from "react-icons/io5";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { PiProjectorScreenChart } from "react-icons/pi";
import { RiPriceTag2Line } from "react-icons/ri";
function ProcesSteps() {
  return (
    <section className="px-16 py-10 max-2xl:px-8 max-sm:px-4">
      <Fade triggerOnce>
        <p className="uppercase tracking-wider text-lg  font-bold text-primary text-center max-sm:text-sm">
          Jak pracujemy
        </p>
        <h2 className="text-5xl font-semibold tracking-tight text-center max-sm:text-3xl">
          <span className="font-numbers">5</span> kroków do Twojego domu
        </h2>
        <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-sm:mt-2 mx-auto mb-8"></p>
      </Fade>
      <div className="flex gap-8 text-sm pt-2 justify-between max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center">
        <Fade delay={200} triggerOnce>
          <div className="max-w-50 text-center max-sm:max-w-100">
            <BsChatLeftDots className="w-12 h-12 text-dark justify-self-center mb-4 max-sm:mb-3" />
            <p className="text-2xl mb-3 font-numbers opacity-80 text-primary max-sm:mb-2">
              01
            </p>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Rozmowa
            </p>
            <p>
              Poznajemy Twoje potrzeby, oczekiwania i budżet. Odpowiadamy na
              pytania i doradzamy najlepsze rozwiązania.
            </p>
          </div>
        </Fade>
        <Fade delay={250} className="self-center max-xl:hidden" triggerOnce>
          <LiaLongArrowAltRightSolid className="self-center w-8 h-8" />
        </Fade>
        <Fade delay={300} triggerOnce>
          <div className="max-w-50 text-center max-sm:max-w-100">
            <RiPriceTag2Line className="w-12 h-12 text-dark justify-self-center mb-4 max-sm:mb-3" />
            <p className="text-2xl mb-3 font-numbers opacity-80 text-primary max-sm:mb-2">
              02
            </p>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Wycena
            </p>
            <p>
              Przygotowujemy transparentną wycenę i harmonogram prac. Wiesz, za
              co płacisz i kiedy rozpoczynamy.
            </p>
          </div>
        </Fade>
        <Fade delay={350} className="self-center max-xl:hidden" triggerOnce>
          <LiaLongArrowAltRightSolid className="self-center w-8 h-8" />
        </Fade>
        <Fade delay={400} triggerOnce>
          <div className="max-w-50 text-center max-sm:max-w-100">
            <PiProjectorScreenChart className="w-12 h-12 text-dark justify-self-center mb-4 max-sm:mb-3" />
            <p className="text-2xl mb-3 font-numbers opacity-80 text-primary max-sm:mb-2">
              03
            </p>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Planowanie
            </p>
            <p>
              Doprecyzowujemy projekt techniczny i wizualizacje. Uzyskujemy
              niezbędne zgody i pozwolenia.
            </p>
          </div>
        </Fade>
        <Fade delay={450} className="self-center max-xl:hidden" triggerOnce>
          <LiaLongArrowAltRightSolid className="self-center w-8 h-8" />
        </Fade>
        <Fade delay={500} triggerOnce>
          <div className="max-w-50 text-center max-sm:max-w-100">
            <GiCrane className="w-12 h-12 text-dark justify-self-center mb-4 max-sm:mb-3" />
            <p className="text-2xl mb-3 font-numbers opacity-80 text-primary max-sm:mb-2">
              04
            </p>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Realizacja
            </p>
            <p>
              Budujemy Twój dom zgodnie z planem i dbałością o każdy detal oraz
              najwyższe standardy jakości.
            </p>
          </div>
        </Fade>
        <Fade delay={550} className="self-center max-xl:hidden" triggerOnce>
          <LiaLongArrowAltRightSolid className="self-center w-8 h-8" />
        </Fade>
        <Fade delay={600} triggerOnce>
          <div className="max-w-50 text-center max-sm:max-w-100">
            <IoKeyOutline className="w-12 h-12 text-dark justify-self-center mb-4 max-sm:mb-3" />
            <Slide triggerOnce>
              <p className="text-2xl mb-3 font-numbers opacity-80 text-primary max-sm:mb-2">
                05
              </p>
            </Slide>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Odbiór
            </p>
            <p>
              Przeprowadzamy szczegółowy odbiór i przekazujemy kompletną
              dokumentację wraz z gwarancją.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default ProcesSteps;
