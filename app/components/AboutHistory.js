import IMGAbout1 from "@/public/about1.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
function AboutHistory() {
  return (
    <section className="pt-12 pb-8 px-16 bg-background-alt/60" id="historia">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Fade triggerOnce>
            <Image src={IMGAbout1} alt="alt" />
          </Fade>
        </div>
        <div className="flex flex-col justify-between overflow-hidden">
          <div className="mb-8">
            <Fade triggerOnce>
              <p className="uppercase tracking-wider text-lg text-primary font-bold">
                Nasza historia
              </p>
              <h2 className="text-5xl tracking-tight font-semibold">
                Od pasji do jakości, <br></br>od projektu do Twojego domu.
              </h2>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2"></p>
            </Fade>
          </div>
          <div className="mb-10 2xl:max-w-150 text-lg max-2xl:text-base">
            <Fade triggerOnce>
              <p className="mb-4">
                Nordom powstał z potrzeby tworzenia domów, które łączą
                ponadczasową architekturę, funkcjonalność, i rzetelne wykonanie.
                Zaczynaliśmy od niewielkich projektów w Warszawie i okolicach,
                dziś realizujemy inwestycje w całym Mazowszu - zawsze z tym
                samym zaangażowaniem.
              </p>
              <p>
                Towarzyszymy naszym kleintom na każdym etapie - od pierwszej
                rozmowy, przez projekt i budowę, aż po przekazanie kluczy. Dbamy
                o detale, terminy i jakość. Bo dom to nie produkt. To
                odpowiedzialnosć.
              </p>
            </Fade>
          </div>
          <Fade direction="left" delay={250} duration={300} triggerOnce>
            <Link
              href="/realizacje"
              className="btn2 inline-flex items-center self-start text-sm"
            >
              Nasze realizacje<span className="pl-3">→</span>
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default AboutHistory;
