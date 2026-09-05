import Image from "next/image";
import HeroBG from "@/public/HeroBG.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function OfferHero() {
  return (
    <section className="pt-26  max-2xl:pt-24 shadow-sm relative max-2xl:text-background max-2xl:bg-linear-to-r max-2xl:from-dark/85 max-2xl:from-30% max-2xl:to-dark/0 max-2xl:to-80% max-sm:min-h-screen max-sm:bg-linear-to-br">
      <div className="grid grid-cols-[45fr_55fr] h-full overflow-hidden max-[1620px]:grid-cols-2 max-2xl:grid-cols-1">
        <Fade triggerOnce>
          <div className="px-16 py-16 flex flex-col justify-between max-[1720px]:pr-10 max-sm:px-6 max-sm:pb-0">
            <div>
              <div className="flex gap-2 uppercase font-semibold text-sm pb-4 tracking-wide max-sm:mb-8">
                <Link href="/" className="opacity-50 max-2xl:opacity-80">
                  Strona główna
                </Link>
                <p className="opacity-50 max-2xl:opacity-80">/</p>
                <p className="text-primary">Usługi</p>
              </div>
              <h1 className="text-7xl font-semibold tracking-tight mb-4  max-lg:text-6xl max-sm:hidden">
                Kompleksowe usługi<br></br>budowy domu<br></br>
                <span className="font-sans font-normal">-</span> od fundamentów
                <br></br>po klucz.
              </h1>
              <h1 className="font-semibold tracking-tight mb-4 text-5xl text-center sm:hidden">
                Kompleksowe usługi budowy domu
                <span className="font-sans font-normal">-</span> od fundamentów
                po klucz.
              </h1>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2 max-sm:mx-auto"></p>
              <p className="text-lg mt-8 max-sm:hidden">
                Prowadzimy Cię przez każdy etap budowy - rzetelnie, <br></br>
                terminowo i z dbałością o każdy detal. Wybierz zakres <br></br>
                usługi dopasowany do Twoich potrzeb i ciesz się <br></br>
                spokojem na każdym etapie realizacji.
              </p>
              <p className="text-lg mt-8 sm:hidden text-center max-[30rem]:text-base">
                Prowadzimy Cię przez każdy etap budowy - rzetelnie, terminowo i
                z dbałością o każdy detal. Wybierz zakres usługi dopasowany do
                Twoich potrzeb i ciesz się spokojem na każdym etapie realizacji.
              </p>
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
        className="object-center object-cover -z-10 2xl:hidden"
      />
    </section>
  );
}

export default OfferHero;
