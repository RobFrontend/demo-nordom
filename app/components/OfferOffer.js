import IMG1 from "@/public/homeOffer1.png";
import IMG2 from "@/public/homeOffer2.png";
import IMG3 from "@/public/homeOffer3.png";
import IMG4 from "@/public/homeOffer4.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { BsHouse, BsHouseGear } from "react-icons/bs";
import { LuArmchair, LuBrickWall } from "react-icons/lu";
function OfferOffer() {
  return (
    <section className="pt-12 pb-8 px-16 max-2xl:px-8">
      <div className="flex gap-10">
        <Fade delay={200} triggerOnce>
          <div className="flex gap-8 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col justify-between shadow-md pb-6">
              <div>
                <div className="relative">
                  <Image src={IMG1} alt="alt" />
                  <BsHouse className="absolute bottom-0 left-0 z-10 text-7xl p-4 bg-background" />
                </div>
                <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                  Stan surowy
                </h3>
                <p className="mx-4">
                  Solidna konstrukcja i sprowadzone materiały. Fundament pewnego
                  domu na lata.
                </p>
              </div>
              <Link
                href="/oferta"
                className="inline-flex items-center mt-5 mx-4 text-primary uppercase tracking-wider text-sm font-semibold transition-all duration-300 "
              >
                Dowiedz się więcej<span className="pl-3">→</span>
              </Link>
            </div>
            <div className="flex flex-col justify-between shadow-md pb-6">
              <div>
                <div className="relative">
                  <Image src={IMG2} alt="alt" />
                  <LuBrickWall className="absolute bottom-0 left-0 z-10 text-7xl p-4 bg-background" />
                </div>
                <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                  Stan deweloperski
                </h3>
                <p className="mx-4">
                  Dom gotowy do wykończenia. Instalacja, tynki, wylewki -
                  wszystko przygotowane pod Twój styl.
                </p>
              </div>
              <Link
                href="/oferta"
                className="inline-flex items-center mt-5 mx-4 text-primary uppercase tracking-wider text-sm font-semibold transition-all duration-300 hover:opacity-75"
              >
                Dowiedz się więcej<span className="pl-3">→</span>
              </Link>
            </div>
            <div className="flex flex-col justify-between shadow-md pb-6">
              <div>
                <div className="relative">
                  <Image src={IMG3} alt="alt" />
                  <LuArmchair className="absolute bottom-0 left-0 z-10 text-7xl p-4 bg-background" />
                </div>
                <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                  Dom pod klucz
                </h3>
                <p className="mx-4">
                  Kompleksowa realizacja i wykończenie. Wprowadzasz się do
                  gotowego domu bez stresu.
                </p>
              </div>
              <Link
                href="/oferta"
                className="inline-flex items-center mt-5 mx-4 text-primary uppercase tracking-wider text-sm font-semibold transition-all duration-300 hover:opacity-75"
              >
                Dowiedz się więcej<span className="pl-3">→</span>
              </Link>
            </div>
            <div className="flex flex-col justify-between shadow-md pb-6">
              <div>
                <div className="relative">
                  <Image src={IMG4} alt="alt" />
                  <BsHouseGear className="absolute bottom-0 left-0 z-10 text-7xl p-4 bg-background" />
                </div>
                <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                  Rozbudowa i przebudowa
                </h3>
                <p className="mx-4">
                  Więcej przestrzeni, nowa funkcja, wyższa wartość Twojej
                  nieruchomości.
                </p>
              </div>
              <Link
                href="/oferta"
                className="inline-flex items-center mt-5 mx-4 text-primary uppercase tracking-wider text-sm font-semibold transition-all duration-300 hover:opacity-75"
              >
                Dowiedz się więcej<span className="pl-3">→</span>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default OfferOffer;
