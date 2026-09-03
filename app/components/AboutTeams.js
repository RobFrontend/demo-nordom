import IMGAbout2 from "@/public/about2_1.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { FaRegCircleCheck } from "react-icons/fa6";

function AboutTeams() {
  return (
    <section className="pt-2 bg-background-alt/60">
      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        <div className="pl-16 pb-8 max-lg:px-8">
          <Fade triggerOnce>
            <p className="uppercase tracking-wider text-lg text-primary font-bold max-sm:text-sm">
              Własne zespoły, zaufani ludzie
            </p>
            <h2 className="text-5xl tracking-tight font-semibold max-sm:text-3xl">
              Doświadczenie ludzi, którym mozesz zaufać.
            </h2>
            <p className="pt-8 pb-6">
              Pracujemy na własnych ekipach budowlanych, które znamy i z którymi
              realizujemy inwestycje od lat. Współpracujemy również ze
              sprawdzonymi projektantami, brandystami i dostawcami, aby zapewnić
              najwyższą jakośćna każdym etapie budowy.
            </p>
          </Fade>
          <ul className="flex flex-col gap-2">
            <Fade triggerOnce>
              <li className="flex gap-4 font-semibold">
                <FaRegCircleCheck className="text-primary mt-1" /> Własne ekipy
                budowlane i kierownicy budowy
              </li>
            </Fade>
            <Fade delay={100} triggerOnce>
              <li className="flex gap-4 font-semibold">
                <FaRegCircleCheck className="text-primary mt-1" /> Zaufani
                projektanci i sprawdzeni dostawcy
              </li>
            </Fade>
            <Fade delay={200} triggerOnce>
              <li className="flex gap-4 font-semibold">
                <FaRegCircleCheck className="text-primary mt-1" /> Stała
                kontrola jakości i harmonogramu
              </li>
            </Fade>
          </ul>
        </div>
        <div className="relative min-h-80">
          <Fade duration={1500} triggerOnce>
            <Image
              src={IMGAbout2}
              alt="alt"
              fill
              className="object-top object-cover"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default AboutTeams;
