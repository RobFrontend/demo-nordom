import { GiIonicColumn } from "react-icons/gi";
import { GoHome, GoPeople, GoShieldCheck } from "react-icons/go";
import BG from "@/public/featuresBG.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function FeaturesMain() {
  return (
    <section className="px-16 py-12 relative overflow-hidden">
      <Fade triggerOnce>
        <div className="flex gap-16 justify-center">
          <div className="flex gap-5">
            <div className="py-2">
              <GiIonicColumn className="w-12 h-12" />
            </div>
            <div>
              <p className="text-6xl mb-2 tracking-wide font-numbers">
                12{" "}
                <span className="text-base font-semibold font-sans">Lat</span>
              </p>
              <p className="uppercase font-semibold mb-2 tracking-wide">
                Doświadczenia
              </p>
              <p className="text-sm">Budujemy od 2012 roku</p>
            </div>
          </div>
          <div>
            <p className="border-r h-full border-(--color-muted) opacity-50"></p>
          </div>
          <div className="flex gap-5">
            <div className="py-2">
              <GoHome className="w-12 h-12" />
            </div>
            <div>
              <p className="text-6xl mb-2 tracking-wide font-numbers">140+</p>
              <p className="uppercase font-semibold mb-2 tracking-wide">
                Zrealizowanych <br></br>inwestycji
              </p>
              <p className="text-sm">Domy, które mówią same za siebie.</p>
            </div>
          </div>
          <div>
            <p className="border-r h-full border-(--color-muted) opacity-50"></p>
          </div>
          <div className="flex gap-5">
            <div className="py-2">
              <GoShieldCheck className="w-12 h-12" />
            </div>
            <div>
              <p className="text-6xl mb-2 tracking-wide font-numbers">
                5 <span className="text-base font-semibold font-sans">Lat</span>
              </p>
              <p className="uppercase font-semibold mb-2 tracking-wide">
                Gwarancji
              </p>
              <p className="text-sm">Na wykonane prace</p>
            </div>
          </div>
          <div>
            <p className="border-r h-full border-(--color-muted) opacity-50"></p>
          </div>
          <div className="flex gap-5">
            <div className="py-2">
              <GoPeople className="w-12 h-12" />
            </div>
            <div>
              <p className="text-6xl mb-2 tracking-wide font-numbers">96%</p>
              <p className="uppercase font-semibold mb-2 tracking-wide">
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
