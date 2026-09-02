import Image from "next/image";
import HeroBG from "@/public/HeroBG.png";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function OfferHero() {
  return (
    <section className="pt-26  max-2xl:pt-24 shadow-sm">
      <div className="grid grid-cols-[45fr_55fr] h-full overflow-hidden">
        <Fade triggerOnce>
          <div className="px-16 py-16 flex flex-col justify-between">
            <div>
              <div className="flex gap-2 uppercase font-semibold text-sm pb-4 tracking-wide">
                <Link href="/" className="opacity-50">
                  Strona główna
                </Link>
                <p className="opacity-50">/</p>
                <p className="text-primary">Usługi</p>
              </div>
              <h1 className="text-7xl font-semibold tracking-tight mb-4">
                Kompleksowe usługi<br></br>budowy domu<br></br>
                <span className="font-sans font-normal">-</span> od fundamentów
                <br></br>po klucz.
              </h1>
              <p className="border-b-2 w-12 border-(--color-primary) mt-4 max-md:mx-0 max-sm:mt-2"></p>
              <p className="text-lg mt-8">
                Prowadzimy Cię przez każdy etap budowy - rzetelnie, <br></br>
                terminowo i z dbałością o każdy detal. Wybierz zakres <br></br>
                usługi dopasowany do Twoich potrzeb i ciesz się <br></br>
                spokojem na każdym etapie realizacji.
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
    </section>
  );
}

export default OfferHero;
