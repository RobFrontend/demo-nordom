import Image from "next/image";
import HeroBG from "@/public/HeroBGAbout.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
function AboutHero() {
  return (
    <section className="pt-26 max-2xl:pt-24 relative max-2xl:text-background max-2xl:bg-linear-to-r max-2xl:from-dark/85 max-2xl:from-30% max-2xl:to-dark/0 max-2xl:to-80% max-sm:min-h-screen max-sm:bg-linear-to-br">
      <div className="grid grid-cols-[45fr_55fr] h-full overflow-hidden max-[1620px]:grid-cols-2 max-2xl:grid-cols-1">
        <Fade triggerOnce>
          <div className="px-16 py-16 flex flex-col justify-between max-[1720px]:pr-10 max-sm:px-6 max-sm:pb-0">
            <div className="flex gap-2 uppercase font-semibold text-sm pb-4 tracking-wide max-sm:mb-8">
              <Link href="/" className="opacity-50 max-2xl:opacity-80">
                Strona główna
              </Link>
              <p className="opacity-50 max-2xl:opacity-80">/</p>
              <p className="text-primary">O nas</p>
            </div>
            <div>
              <h1 className="text-8xl font-semibold tracking-tight mb-4 max-lg:text-6xl max-sm:hidden">
                Budujemy domy,<br></br>z myślą o tym, co<br></br>naprawdę ważne.
              </h1>
              <h1 className="font-semibold tracking-tight mb-4 text-5xl text-center sm:hidden">
                Budujemy domy, do których chce się wracać.
              </h1>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2 max-sm:mx-auto"></p>
              <p className="text-lg mt-8 max-sm:hidden">
                Wierzymy, że dobrze zaprojektowany i solidnie wykonany <br></br>
                dom to coś więcej niż inwestycja - to przestrzeń, w której
                <br></br>
                życie nabiera jakości. Od 2012 roku łączymy doświadczenie,
                <br></br>nowoczesne technologie i uczciwe podejscie<br></br>do
                każego projektu.
              </p>
              <p className="text-lg mt-8 sm:hidden text-center max-[30rem]:text-base">
                Wierzymy, że dobrze zaprojektowany i solidnie wykonany dom to
                coś więcej niż inwestycja - to przestrzeń, w której życie
                nabiera jakości. Od 2012 roku łączymy doświadczenie, nowoczesne
                technologie i uczciwe podejscie do każego projektu.
              </p>
            </div>
            <div className="pt-10">
              <Fade delay={250} triggerOnce>
                <Link
                  href="/o-nas#historia"
                  className="btn1 hero-btn1 inline-flex items-center tracking-wider hover:-translate-y-1 text-lg max-[1720px]:text-base max-sm:w-full max-sm:flex max-sm:justify-between"
                >
                  Poznaj nas lepiej<span className="pl-6">→</span>
                </Link>
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
      <Image
        src={HeroBG}
        alt="hero"
        fill
        loading="lazy"
        className="object-bottom object-cover -z-10 2xl:hidden"
      />
    </section>
  );
}

export default AboutHero;
