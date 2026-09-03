import { GiIonicColumn } from "react-icons/gi";
import { GoHome, GoPeople, GoShieldCheck } from "react-icons/go";
import BG from "@/public/featuresBG.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function FeaturesMain() {
  return (
    <section className="px-16 py-12 relative overflow-hidden max-2xl:px-8">
      <Fade triggerOnce>
        <div className="flex gap-16 justify-center max-2xl:gap-10 max-xl:gap-8 max-lg:grid max-lg:grid-cols-2 max-lg:w-fit max-lg:mx-auto max-sm:grid-cols-1 max-sm:mx-0">
          <div className="flex gap-5">
            <div className="py-1.5 max-2xl:py-1 max-xl:py-0">
              <GiIonicColumn className="w-12 h-12 max-2xl:w-10 max-2xl:h-10" />
            </div>
            <div>
              <p className="text-6xl mb-2 tracking-wide font-numbers max-2xl:text-5xl max-xl:text-3xl">
                12{" "}
                <span className="text-base font-semibold font-sans">Lat</span>
              </p>
              <p className="uppercase font-semibold mb-2 tracking-wide max-xl:text-sm">
                Doświadczenia
              </p>
              <p className="text-sm">Budujemy od 2012 roku</p>
            </div>
          </div>
          <div className="max-lg:hidden">
            <p className="border-r h-full border-(--color-muted) opacity-50"></p>
          </div>
          <div className="flex gap-5">
            <div className="py-2 max-2xl:py-1.5 max-xl:py-0">
              <GoHome className="w-12 h-12 max-2xl:w-10 max-2xl:h-10" />
            </div>
            <div>
              <p className="text-6xl mb-2 tracking-wide font-numbers max-2xl:text-5xl max-xl:text-3xl">
                140+
              </p>
              <p className="uppercase font-semibold mb-2 tracking-wide max-xl:text-sm">
                Zrealizowanych <br></br>inwestycji
              </p>
              <p className="text-sm">Domy, które mówią same za siebie.</p>
            </div>
          </div>
          <div className="max-lg:hidden">
            <p className="border-r h-full border-(--color-muted) opacity-50"></p>
          </div>
          <div className="flex gap-5">
            <div className="py-1.5 max-2xl:py-1 max-xl:py-0">
              <GoShieldCheck className="w-12 h-12 max-2xl:w-10 max-2xl:h-10" />
            </div>
            <div>
              <p className="text-6xl mb-2 tracking-wide font-numbers max-2xl:text-5xl max-xl:text-3xl">
                5 <span className="text-base font-semibold font-sans">Lat</span>
              </p>
              <p className="uppercase font-semibold mb-2 tracking-wide max-xl:text-sm">
                Gwarancji
              </p>
              <p className="text-sm">Na wykonane prace</p>
            </div>
          </div>
          <div className="max-lg:hidden">
            <p className="border-r h-full border-(--color-muted) opacity-50"></p>
          </div>
          <div className="flex gap-5">
            <div className="py-2 max-2xl:py-1 max-xl:py-0">
              <GoPeople className="w-12 h-12 max-2xl:w-10 max-2xl:h-10" />
            </div>
            <div>
              <p className="text-6xl mb-2 tracking-wide font-numbers max-2xl:text-5xl max-xl:text-3xl">
                96%
              </p>
              <p className="uppercase font-semibold mb-2 tracking-wide max-xl:text-sm">
                Klientów <br></br>z polecenia
              </p>
              <p className="text-sm">Najlepsze rekomendacje</p>
            </div>
          </div>
        </div>
      </Fade>
      <Image
        src={BG}
        alt="stone"
        fill
        className="absolute object-cover object-center -z-10"
      />
    </section>
  );
}

export default FeaturesMain;
