import Image from "next/image";
import HeroBG from "@/public/HeroBGAbout.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
function AboutHero() {
  return (
    <section className="pt-26  max-2xl:pt-24 ">
      <div className="grid grid-cols-[45fr_55fr] h-full overflow-hidden">
        <Fade triggerOnce>
          <div className="px-16 py-16 flex flex-col justify-between">
            <div className="flex gap-2 uppercase font-semibold text-sm pb-4 tracking-wide">
              <Link href="/" className="opacity-50">
                Strona główna
              </Link>
              <p className="opacity-50">/</p>
              <p className="text-primary">O nas</p>
            </div>
            <div>
              <h1 className="text-8xl font-semibold tracking-tight mb-4">
                Budujemy domy,<br></br>z myślą o tym, co<br></br>naprawdę ważne.
              </h1>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2"></p>
              <p className="text-lg mt-8">
                Wierzymy, że dobrze zaprojektowany i solidnie wykonany <br></br>
                dom to coś więcej niż inwestycja - to przestrzeń, w której
                <br></br>
                życie nabiera jakości. Od 2012 roku łączymy doświadczenie,
                <br></br>nowoczesne technologie i uczciwe podejscie<br></br>do
                każego projektu.
              </p>
            </div>
            <div className="pt-10">
              <Fade delay={250} triggerOnce>
                <Link
                  href="/o-nas#historia"
                  className="btn1 hero-btn1 inline-flex items-center tracking-wider hover:-translate-y-1 text-lg"
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
    </section>
  );
}

export default AboutHero;
