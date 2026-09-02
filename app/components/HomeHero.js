import Image from "next/image";
import HeroBG from "@/public/HeroBG.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function HomeHero() {
  return (
    <section className="pt-26  max-2xl:pt-24 ">
      <div className="grid grid-cols-[45fr_55fr] h-full overflow-hidden">
        <Fade triggerOnce>
          <div className="px-16 py-16 flex flex-col justify-between">
            <div>
              <h1 className="text-8xl font-semibold tracking-tight mb-4">
                Budujemy domy,<br></br>do których<br></br>chce się wracać.
              </h1>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2"></p>
              <p className="text-lg mt-8">
                Tworzymy nowoczesne, trwałe i energooszczędne domy <br></br>
                jednorodzinne w Warszawie i na terenie całego Mazowsza.<br></br>
                Kompleksowo. Solidnie. Na lata.
              </p>
            </div>
            <div className="flex justify-between gap-4 pt-10">
              <Fade delay={250} triggerOnce>
                <Link
                  href="/"
                  className="btn1 hero-btn1 inline-flex items-center tracking-wider hover:-translate-y-1 text-lg"
                >
                  Wyceń budowę<span className="pl-6">→</span>
                </Link>
              </Fade>
              <Fade delay={500} triggerOnce>
                <Link
                  href="/"
                  className="btn2 hero-btn2 inline-flex items-center tracking-wider hover:-translate-y-1 text-lg"
                >
                  Zobacz realizacje<span className="pl-6">→</span>
                </Link>{" "}
              </Fade>
            </div>
          </div>
        </Fade>
        <div className="relative">
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
    </section>
  );
}

export default HomeHero;
