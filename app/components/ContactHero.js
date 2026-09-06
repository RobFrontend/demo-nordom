import Image from "next/image";
import HeroBG from "@/public/HeroBG.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { GoHome, GoShieldCheck } from "react-icons/go";
import { BsChatLeftDots } from "react-icons/bs";
function ContactHero() {
  return (
    <section className="pt-26  max-2xl:pt-24 shadow-sm relative max-2xl:text-background max-2xl:bg-linear-to-r max-2xl:from-dark/95 max-2xl:from-30% max-2xl:to-dark/0 max-2xl:to-80% max-sm:min-h-screen max-sm:bg-linear-to-br">
      <div className="grid grid-cols-[45fr_55fr] h-full overflow-hidden max-[1620px]:grid-cols-2 max-2xl:grid-cols-1">
        <Fade triggerOnce>
          <div className="px-16 py-16 flex flex-col justify-between gap-10 max-[1720px]:pr-10 max-sm:px-6 max-sm:pb-0">
            <div>
              <div className="flex gap-2 uppercase font-semibold text-sm pb-4 tracking-wide">
                <Link href="/" className="opacity-50 max-2xl:opacity-80">
                  Strona główna
                </Link>
                <p className="opacity-50 max-2xl:opacity-80">/</p>
                <p className="text-primary">Kontakt</p>
              </div>
              <h1 className="text-7xl font-semibold tracking-tight mb-4 max-sm:hidden">
                Porozmawiajmy<br></br>o Twoim domu.
              </h1>
              <h1 className="font-semibold tracking-tight mb-4 text-5xl text-center sm:hidden">
                Porozmawiajmy<br></br>o Twoim domu.
              </h1>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2 max-sm:mx-auto"></p>
              <p className="text-lg mt-8 max-sm:hidden">
                Opowiedz nam o swoich planach, a my przygotujemy <br></br>
                dopasowaną wycenę i przewodnik po kolejnych krokach.
              </p>
              <p className="text-lg mt-8 sm:hidden text-center max-[30rem]:text-base">
                Opowiedz nam o swoich planach, a my przygotujemy dopasowaną
                wycenę i przewodnik po kolejnych krokach.
              </p>
            </div>
            <div className="flex gap-8 max-sm:gap-6">
              <div>
                <GoHome className="w-12 h-12 mx-auto mb-2 max-sm:w-10 max-sm:h-10" />
                <p className="text-center font-semibold max-sm:text-sm">
                  Indywidualne podejście
                </p>
              </div>
              <div>
                <GoShieldCheck className="w-12 h-12 mx-auto mb-2 max-sm:w-10 max-sm:h-10" />
                <p className="text-center font-semibold max-sm:text-sm">
                  Jakość i trwałość
                </p>
              </div>
              <div>
                <BsChatLeftDots className="w-12 h-12 mx-auto mb-2 max-sm:w-10 max-sm:h-10" />
                <p className="text-center font-semibold max-sm:text-sm">
                  Jasna komunikacja
                </p>
              </div>
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
      </div>{" "}
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

export default ContactHero;
