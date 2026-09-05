import { GoPeople, GoShieldCheck } from "react-icons/go";
import BG from "@/public/featuresBG.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { SlNotebook } from "react-icons/sl";
function OfferFeatures() {
  return (
    <section className="px-16 py-12 relative overflow-hidden max-2xl:px-8">
      <Fade triggerOnce duration={1500}>
        <div className="flex gap-16 justify-center max-md:flex-col max-md:gap-10">
          <div className="flex flex-col gap-5 items-center text-center max-sm:gap-3">
            <div className="py-2">
              <GoShieldCheck className="w-16 h-16 max-sm:w-12 max-sm:h-12" />
            </div>
            <div>
              <p className="uppercase font-semibold mb-2 tracking-wide">
                Jakość, która trwa
              </p>
              <p className="max-w-100">
                Stosujemy sprawdzone technologie i materiały premium. budujemy
                domy, które są trwałe, energooszczędne i bezpieczne.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center max-sm:gap-3">
            <div className="py-2">
              <SlNotebook className="w-16 h-16 max-sm:w-12 max-sm:h-12" />
            </div>
            <div>
              <p className="uppercase font-semibold mb-2 tracking-wide">
                Przejrzyste ceny
              </p>
              <p className="max-w-100">
                Szczegółowa wycena i jasne zasady współpracy. Brak ukrytych
                kosztów, pełna kontrola na każdym etapie.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center text-center max-sm:gap-3">
            <div className="py-2">
              <GoPeople className="w-16 h-16 max-sm:w-12 max-sm:h-12" />
            </div>
            <div>
              <p className="uppercase font-semibold mb-2 tracking-wide">
                Jeden zespół od startu do odbioru
              </p>
              <p className="max-w-100">
                Opiekun projektu, kierownicy i sprawdzeni wykonawcy - jesteśmy z
                Tobąod pierwszej rozmowy do przekazania kluczy.
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <Image
        src={BG}
        alt="stone"
        fill
        className="object-cover object-center -z-10"
      />
    </section>
  );
}

export default OfferFeatures;
