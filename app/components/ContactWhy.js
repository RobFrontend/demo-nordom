import { GoClock, GoPeople } from "react-icons/go";
import BG from "@/public/featuresBG.png";
import IMGcon from "@/public/contact2.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { SlNotebook } from "react-icons/sl";
import { GiIonicColumn } from "react-icons/gi";

function ContactWhy() {
  return (
    <section className="px-16 pb-12  overflow-hidden">
      <div className="overflow-hidden relative">
        <Fade triggerOnce duration={1500}>
          <div className="grid grid-cols-[70fr_30fr] gap-8">
            <div className="px-8 py-10">
              <h2 className="text-5xl font-semibold tracking-tight w-max mb-8">
                Dlaczego warto z nami rozmawiać?
              </h2>
              <div className="flex gap-16 justify-center">
                <div className="flex flex-col gap-5 items-center text-center">
                  <div className="py-2">
                    <GoClock className="w-14 h-14" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 tracking-wide">
                      Szybka odpowiedź
                    </p>
                    <p className="max-w-100">
                      Odpowiadamy w ciągu 24 godzin w dni robocze.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center text-center">
                  <div className="py-2">
                    <SlNotebook className="w-14 h-14" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 tracking-wide">
                      Rzetelna wycena
                    </p>
                    <p className="max-w-100">
                      Przejrzyste koszty i realne założenia - bez ukrytych
                      opłat.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center text-center">
                  <div className="py-2">
                    <GiIonicColumn className="w-14 h-14" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 tracking-wide">
                      Doświadczenie
                    </p>
                    <p className="max-w-100">
                      Ponad 12 lat i 140+ zrealizowanych inwestycji.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center text-center">
                  <div className="py-2">
                    <GoPeople className="w-14 h-14" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 tracking-wide">
                      Pełne wsparcie
                    </p>
                    <p className="max-w-100">
                      Prowadzimy Cię przez cały proces - od koncepcji po odbiór.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMGcon}
                alt="alt"
                fill
                className="object-center object-cover -z-10"
              />
            </div>
          </div>
        </Fade>
        <Image
          src={BG}
          alt="stone"
          fill
          className="object-cover object-center -z-10"
        />
      </div>
    </section>
  );
}

export default ContactWhy;
