import Image from "next/image";
import HeroBG from "@/public/HeroBG.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { GoHome, GoShieldCheck } from "react-icons/go";
import { BsChatLeftDots } from "react-icons/bs";
function ContactHero() {
  return (
    <section className="pt-26  max-2xl:pt-24 shadow-sm">
      <div className="grid grid-cols-[45fr_55fr] h-full overflow-hidden">
        <Fade triggerOnce>
          <div className="px-16 py-16 flex flex-col justify-between gap-10">
            <div>
              <div className="flex gap-2 uppercase font-semibold text-sm pb-4 tracking-wide">
                <Link href="/" className="opacity-50">
                  Strona główna
                </Link>
                <p className="opacity-50">/</p>
                <p className="text-primary">Kontakt</p>
              </div>
              <h1 className="text-7xl font-semibold tracking-tight mb-4">
                Porozmawiajmy<br></br>o Twoim domu.
              </h1>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2"></p>
              <p className="text-lg mt-8">
                Opowiedz nam o swoich planach, a my przygotujemy <br></br>
                dopasowaną wycenę i przewodnik po kolejnych krokach.
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <GoHome className="w-12 h-12 mx-auto mb-2" />
                <p className="text-center font-semibold">
                  Indywidualne podejście
                </p>
              </div>
              <div>
                <GoShieldCheck className="w-12 h-12 mx-auto mb-2" />
                <p className="text-center font-semibold">Jakość i trwałość</p>
              </div>
              <div>
                <BsChatLeftDots className="w-12 h-12 mx-auto mb-2" />
                <p className="text-center font-semibold">Jasna komunikacja</p>
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
      </div>
    </section>
  );
}

export default ContactHero;
