import { Fade } from "react-awesome-reveal";
import { BsChatLeftDots } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { LuHandshake } from "react-icons/lu";

function AboutValues() {
  return (
    <section className="pt-2 pb-8 px-16 bg-background-alt/60">
      <Fade triggerOnce>
        <p className="uppercase tracking-wider text-lg text-primary font-bold">
          Nasze wartości
        </p>
        <h2 className="text-5xl tracking-tight font-semibold">
          Zasady, którymi kierujemy się każdego dnia.
        </h2>
      </Fade>
      <div className="flex gap-6 justify-between pt-8 ">
        <Fade triggerOnce>
          <div className="bg-background p-6 flex flex-col gap-6 justify-between">
            <div className="flex gap-6 items-center">
              <FiAward className="w-12 h-12" />
              <p className="uppercase tracking-wide font-semibold">Jakość</p>
            </div>
            <p className="text-sm">
              Stawiamy na sprawdzone materiały, solidne wykonanie i dbałość o
              każdy detal.
            </p>
          </div>
        </Fade>
        <Fade delay={100} triggerOnce>
          <div className="bg-background p-6 flex flex-col gap-6 justify-between">
            <div className="flex gap-6 items-center">
              <BsChatLeftDots className="w-12 h-12" />
              <p className="uppercase tracking-wide font-semibold">
                Komunikacja
              </p>
            </div>
            <p className="text-sm">
              Jesteśmy w stałym kontakcie i jasno informujemy o postępach na
              każdym etapie.
            </p>
          </div>
        </Fade>
        <Fade delay={200} triggerOnce>
          <div className="bg-background p-6 flex flex-col gap-6 justify-between">
            <div className="flex gap-6 items-center">
              <LuHandshake className="w-12 h-12" />
              <p className="uppercase tracking-wide font-semibold">
                Odpowiedzialność
              </p>
            </div>
            <p className="text-sm">
              Dotrzymujemy słowa, terminów i budżetu. Bierzemy odpowiedzialność
              za efekt końcowy.
            </p>
          </div>
        </Fade>
        <Fade delay={300} triggerOnce>
          <div className="bg-background p-6 flex flex-col gap-6 justify-between">
            <div className="flex gap-6 items-center">
              <GoGoal className="w-12 h-12" />
              <p className="uppercase tracking-wide font-semibold">Precyzja</p>
            </div>
            <p className="text-sm">
              Planowanie, organizacja i kontrola jakości pozwalają nam osiągać
              zamierzone cele.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default AboutValues;
