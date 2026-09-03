import { Fade, Flip, Slide, Zoom } from "react-awesome-reveal";
import { BsChatLeftDots } from "react-icons/bs";
import { GiCrane } from "react-icons/gi";
import { IoKeyOutline } from "react-icons/io5";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { PiProjectorScreenChart } from "react-icons/pi";
import { RiPriceTag2Line } from "react-icons/ri";

function HomeProces() {
  return (
    <section className="px-16 py-10  overflow-x-hidden max-2xl:px-8">
      <Fade triggerOnce>
        <p className="uppercase tracking-wider text-lg  font-bold text-primary max-sm:text-sm">
          Proces
        </p>
        <h2 className="text-5xl font-semibold tracking-tight mb-8 w-max max-sm:text-3xl">
          Jak pracujemy
        </h2>
      </Fade>
      <div className="flex gap-8 text-sm pt-2 justify-between max-2xl:grid max-2xl:grid-cols-3 max-xl:gap-10 max-sm:grid-cols-2">
        <Fade delay={200} triggerOnce>
          <div className="max-w-50">
            <BsChatLeftDots className="w-12 h-12 text-dark justify-self-center" />
            <p className="text-2xl mb-3 font-numbers opacity-80">01</p>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Rozmawiamy
            </p>
            <p>Poznajemy Twoje potrzeby, działkę i oczekiwania.</p>
          </div>
        </Fade>
        <Fade delay={250} className="self-center max-2xl:hidden" triggerOnce>
          <LiaLongArrowAltRightSolid className="self-center w-8 h-8" />
        </Fade>
        <Fade delay={300} triggerOnce>
          <div className="max-w-50">
            <RiPriceTag2Line className="w-12 h-12 text-dark justify-self-center" />
            <p className="text-2xl mb-3 font-numbers opacity-80">02</p>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Wyceniamy
            </p>
            <p>Przygotowujemy transparentną wycenę i harmonogram.</p>
          </div>
        </Fade>
        <Fade delay={350} className="self-center max-2xl:hidden" triggerOnce>
          <LiaLongArrowAltRightSolid className="self-center w-8 h-8" />
        </Fade>
        <Fade delay={400} triggerOnce>
          <div className="max-w-50">
            <PiProjectorScreenChart className="w-12 h-12 text-dark justify-self-center" />
            <p className="text-2xl mb-3 font-numbers opacity-80">03</p>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Planujemy
            </p>
            <p>Doprecyzowujemy projekt i wybieramy najlepsze rozwiązania.</p>
          </div>
        </Fade>
        <Fade delay={450} className="self-center max-2xl:hidden" triggerOnce>
          <LiaLongArrowAltRightSolid className="self-center w-8 h-8" />
        </Fade>
        <Fade delay={500} triggerOnce>
          <div className="max-w-50">
            <GiCrane className="w-12 h-12 text-dark justify-self-center" />
            <p className="text-2xl mb-3 font-numbers opacity-80">04</p>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Realizujemy
            </p>
            <p>Budujemy z dbałością o każdy detal i zgodnie z ustaleniami.</p>
          </div>
        </Fade>
        <Fade delay={550} className="self-center max-2xl:hidden" triggerOnce>
          <LiaLongArrowAltRightSolid className="self-center w-8 h-8" />
        </Fade>
        <Fade delay={600} triggerOnce>
          <div className="max-w-50">
            <IoKeyOutline className="w-12 h-12 text-dark justify-self-center" />
            <Slide triggerOnce>
              <p className="text-2xl mb-3 font-numbers opacity-80">05</p>
            </Slide>
            <p className="uppercase tracking-wider font-semibold mb-1">
              Oddajemy
            </p>
            <p>Przekazujemy gotowy dom i zapewniamy wsparcie po odbiorze.</p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default HomeProces;
