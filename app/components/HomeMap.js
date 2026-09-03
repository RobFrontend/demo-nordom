import BGMap from "@/public/homeMap.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function HomeMap() {
  return (
    <section className="grid grid-cols-[30fr_70fr] max-[1650px]:grid-cols-[40fr_60fr]  max-[1460px]:grid-cols-1 ">
      <div className="px-16 h-full py-10 flex flex-col justify-between max-2xl:px-8">
        <div>
          <Fade triggerOnce>
            <p className="uppercase tracking-wider text-lg  font-bold text-primary max-sm:text-sm">
              Działamy na terenie
            </p>
            <h2 className="text-5xl font-semibold tracking-tight mb-6 max-sm:text-3xl">
              Warszawa i Mazowsze
            </h2>
            <p>
              Realizujemy inwestycje w Warszawie oraz na terenie całego
              województwa mazowieckiego. Znamy lokalne uwarunkowania i pomagamy
              wybrać najlepsze rozwiązania dla Twojej działki.
            </p>
          </Fade>
        </div>
        <Fade delay={250} direction="left" triggerOnce>
          <Link
            href="/"
            className="inline-flex items-center mt-5 text-primary uppercase tracking-wider text-sm font-semibold transition-all duration-300"
          >
            Dowiedz się więcej<span className="pl-3">→</span>
          </Link>
        </Fade>
      </div>
      <div className="bg-background relative">
        <Fade triggerOnce>
          <Image
            src={BGMap}
            alt="Mapa działania Nordom"
            className="w-full h-auto"
          />
        </Fade>
        <div className="max-[1460px]:hidden absolute top-0 left-0 w-full h-full bg-linear-to-r from-background from-10% to-background/0 to-40%"></div>
      </div>
    </section>
  );
}

export default HomeMap;
