import { Fade } from "react-awesome-reveal";
import { BsChatLeftDots } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { PiNotepad } from "react-icons/pi";
import { TbLeaf } from "react-icons/tb";

function HomeWhy() {
  return (
    <section className="px-16 py-10 bg-dark overflow-hidden max-2xl:px-8">
      <div className="flex gap-8 text-background max-2xl:flex-col max-2xl:gap-10">
        <div>
          <Fade triggerOnce>
            <p className="uppercase tracking-wider text-lg  font-bold max-sm:text-sm">
              Dlaczego Nordom
            </p>
            <h2 className="text-5xl font-semibold tracking-tight mb-8 sm:w-max max-2xl:mb-6 max-sm:text-3xl">
              Więcej niz wykonawca
            </h2>
            <Fade direction="left" duration={300} triggerOnce>
              <p className="border-b-2 w-12 border-(--color-background) mt-4 max-md:mx-0 max-sm:mt-2"></p>
            </Fade>
          </Fade>
        </div>
        <div className="flex gap-6 max-2xl:grid max-2xl:grid-cols-3 max-xl:gap-8 max-sm:grid-cols-2 max-[30rem]:grid-cols-1">
          <p className="border-r  border-border/50 max-2xl:hidden"></p>
          <Fade delay={200} triggerOnce>
            <div className="flex flex-col gap-2 text-sm">
              <PiNotepad className="w-12 h-12 mb-2" />
              <p className="uppercase tracking-wider font-semibold">
                Doświadczenie
              </p>
              <p>Ponad 12 lat praktyki i setki zrealizowanych domów.</p>
            </div>
          </Fade>
          <p className="border-r  border-border/50 max-2xl:hidden"></p>
          <Fade delay={250} triggerOnce>
            <div className="flex flex-col gap-2 text-sm">
              <GoShieldCheck className="w-12 h-12 mb-2" />
              <p className="uppercase tracking-wider font-semibold">
                Jakość i trwałość
              </p>
              <p>
                Sprawdzone materiały, prezycja wykonania, kontrola na każdym
                etapie.
              </p>
            </div>
          </Fade>
          <p className="border-r  border-border/50 max-2xl:hidden"></p>
          <Fade delay={300} triggerOnce>
            <div className="flex flex-col gap-2 text-sm">
              <IoPersonOutline className="w-12 h-12 mb-2" />
              <p className="uppercase tracking-wider font-semibold">
                Kompleksowa obsługa
              </p>
              <p>
                Prowadzimy inwestycję od A do Z - Ty oszczędzasz czas i nerwy.
              </p>
            </div>
          </Fade>
          <p className="border-r  border-border/50 max-2xl:hidden"></p>
          <Fade delay={350} triggerOnce>
            <div className="flex flex-col gap-2 text-sm">
              <TbLeaf className="w-12 h-12 mb-2" />
              <p className="uppercase tracking-wider font-semibold">
                Energooszczędność
              </p>
              <p>
                Budujemy nowocześnie i odpowiedzialnie - niższe koszty na lata.
              </p>
            </div>
          </Fade>
          <p className="border-r  border-border/50 max-2xl:hidden"></p>
          <Fade delay={400} triggerOnce>
            <div className="flex flex-col gap-2 text-sm">
              <BsChatLeftDots className="w-12 h-12 mb-2" />
              <p className="uppercase tracking-wider font-semibold">
                Jasna komunikacja
              </p>
              <p>
                Przejrzyste zasady, stały kontakt i pełna informacja o postępach
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default HomeWhy;
