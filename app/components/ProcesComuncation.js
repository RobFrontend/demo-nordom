import Image from "next/image";
import IMGproc1 from "@/public/proces1.png";
import IMGproc2 from "@/public/proces2.png";
import { Fade } from "react-awesome-reveal";
import { GoPersonAdd } from "react-icons/go";
import { PiNotebook } from "react-icons/pi";
import { BsChatLeftDots } from "react-icons/bs";

function ProcesComuncation() {
  return (
    <section className="px-16 pt-10 pb-14 border-y border-border/75 bg-background-alt overflow-hidden">
      <div className="grid grid-cols-2 gap-8 relative">
        <div>
          <Fade triggerOnce>
            <p className="uppercase tracking-wider text-lg  font-bold text-primary ">
              Komunikacja i kontrola
            </p>
            <h2 className="text-5xl font-semibold tracking-tight mb-6">
              Jesteś na bieżąco, <br></br>na każdym etapie
            </h2>
            <p>
              Stawiamy na przejrzystą komunikację i pełną kontrolę <br></br>
              nad postępem prac. Wiesz, co siędzieje na budowie <br></br>i jakie
              sąkolejne kroki.
            </p>
            <div className="flex flex-col gap-8 pt-8">
              <div className="flex gap-6 max-w-100">
                <GoPersonAdd className="w-16 h-16" />
                <div>
                  <p className="font-semibold uppercase">Dedykowany opiekun</p>
                  <p>
                    Masz jeden punkt kontraktu, który zna Twój projekt od
                    początku do końca.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 max-w-100">
                <BsChatLeftDots className="w-16 h-16" />
                <div>
                  <p className="font-semibold uppercase">Dedykowany opiekun</p>
                  <p>
                    Masz jeden punkt kontraktu, który zna Twój projekt od
                    początku do końca.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 max-w-100">
                <PiNotebook className="w-16 h-16" />
                <div>
                  <p className="font-semibold uppercase">Dedykowany opiekun</p>
                  <p>
                    Masz jeden punkt kontraktu, który zna Twój projekt od
                    początku do końca.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div>
          <Fade duration={1000} triggerOnce>
            <Image src={IMGproc1} alt="Proces1" className="w-full h-auto" />
          </Fade>
        </div>
        <Fade duration={1000} triggerOnce>
          <Image
            src={IMGproc2}
            alt="Proces2"
            className="absolute left-1/2 -bottom-12 -translate-x-1/2 max-h-[90%] w-auto"
          />
        </Fade>
      </div>
    </section>
  );
}

export default ProcesComuncation;
