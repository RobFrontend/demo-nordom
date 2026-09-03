import Image from "next/image";
import HeroBG from "@/public/HeroBG.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function HomeHero() {
  return (
    <section className="pt-26  max-2xl:pt-24 relative max-2xl:text-background max-2xl:bg-linear-to-r max-2xl:from-dark/95 max-2xl:from-30% max-2xl:to-dark/0 max-2xl:to-80% max-sm:min-h-screen max-sm:bg-linear-to-br">
      <div className="grid grid-cols-[45fr_55fr] h-full overflow-hidden max-[1620px]:grid-cols-2 max-2xl:grid-cols-1">
        <Fade triggerOnce>
          <div className="pl-16 pr-16 py-16 flex flex-col justify-between max-[1720px]:pr-10 max-sm:px-6 max-sm:pb-0">
            <div>
              <h1 className="text-8xl font-semibold tracking-tight mb-4 max-lg:text-6xl max-sm:hidden">
                Budujemy domy,<br></br>do których<br></br>chce się wracać.
              </h1>
              <h1 className="font-semibold tracking-tight mb-4 text-5xl text-center sm:hidden">
                Budujemy domy,<br></br> do których<br></br> chce się wracać.
              </h1>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2 max-sm:mx-auto"></p>
              <p className="text-lg mt-8 max-sm:hidden">
                Tworzymy nowoczesne, trwałe i energooszczędne domy <br></br>
                jednorodzinne w Warszawie i na terenie całego Mazowsza.<br></br>
                Kompleksowo. Solidnie. Na lata.
              </p>
              <p className="text-lg mt-8 sm:hidden text-center max-[30rem]:text-base">
                Tworzymy nowoczesne, trwałe i energooszczędne domy jednorodzinne
                w Warszawie i na terenie całego Mazowsza. Kompleksowo. Solidnie.
                Na lata.
              </p>
            </div>
            <div className="flex justify-between gap-4 pt-10 max-2xl:justify-start max-sm:flex-col">
              <Fade delay={250} triggerOnce>
                <Link
                  href="/"
                  className="btn1 xl:hero-btn1 inline-flex items-center tracking-wider hover:-translate-y-1 text-lg max-[1720px]:text-base max-sm:w-full max-sm:flex max-sm:justify-between"
                >
                  Wyceń budowę<span className="pl-6 max-xl:pl-3">→</span>
                </Link>
              </Fade>
              <Fade delay={500} triggerOnce>
                <Link
                  href="/"
                  className="btn2 hero-btn2  inline-flex items-center tracking-wider hover:-translate-y-1 text-lg max-[1720px]:text-base max-2xl:hidden"
                >
                  Zobacz realizacje<span className="pl-6">→</span>
                </Link>
                <Link
                  href="/"
                  className="btn2-white xl:hero-btn2  inline-flex items-center tracking-wider hover:-translate-y-1 text-lg max-[1720px]:text-base 2xl:hidden max-sm:w-full max-sm:flex max-sm:justify-between"
                >
                  Zobacz realizacje<span className="pl-6 max-xl:pl-3">→</span>
                </Link>
              </Fade>
            </div>
          </div>
        </Fade>
        <div className="relative max-2xl:hidden">
          <Fade duration={2000} triggerOnce>
            <Image
              src={HeroBG}
              alt="hero"
              fill
              loading="lazy"
              className="object-center object-cover"
            />
          </Fade>
        </div>
      </div>
      <Image
        src={HeroBG}
        alt="hero"
        fill
        loading="lazy"
        className="object-center object-cover -z-10 2xl:hidden"
      />
    </section>
  );
}

export default HomeHero;
