"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FiMinus, FiPlus } from "react-icons/fi";

function ProcesFaq() {
  const [isShow, setIsShow] = useState(0);
  return (
    <section className="px-16 py-10 max-2xl:px-8 max-sm:px-4">
      <Fade triggerOnce>
        <div className="flex gap-8 justify-between max-lg:flex-col max-lg:gap-4">
          <div>
            <p className="uppercase tracking-wider text-lg  font-bold text-primary w-max">
              Najczęściej zadawane pytania
            </p>
            <h2 className="text-5xl font-semibold tracking-tight mb-6">FAQ</h2>
          </div>
          <div className="flex flex-col gap-2 w-[70%] max-lg:w-full">
            <Fade cascade triggerOnce duration={500}>
              <div className=" border border-border/50">
                <div
                  className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  onClick={() => {
                    isShow !== 1 ? setIsShow(1) : setIsShow(0);
                  }}
                >
                  <p className="font-medium max-sm:text-sm">
                    Ile trwa budowa domu w NORDOM?
                  </p>
                  {isShow !== 1 ? <FiPlus /> : <FiMinus />}
                </div>
                {isShow === 1 && (
                  <div className="px-4 ">
                    <Fade>
                      <p className="opacity-80 pb-1">
                        Czas realizacji zależy od zakresu prac, projektu i
                        warunków na działce. Standardowa budowa domu
                        jednorodzinnego trwa najczęściej od około 8 do 14
                        miesięcy. Przed rozpoczęciem prac przygotowujemy
                        szczegółowy harmonogram, dzięki czemu wiesz, jak będą
                        wyglądały kolejne etapy inwestycji.
                      </p>
                    </Fade>
                  </div>
                )}
              </div>
              <div className=" border border-border/50">
                <div
                  className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  onClick={() => {
                    isShow !== 2 ? setIsShow(2) : setIsShow(0);
                  }}
                >
                  <p className="font-medium max-sm:text-sm">
                    Czy mogę wprowadzić zmiany w projekcie w trakcie budowy?
                  </p>
                  {isShow !== 2 ? <FiPlus /> : <FiMinus />}
                </div>
                {isShow === 2 && (
                  <div className="px-4 ">
                    <Fade>
                      <p className="opacity-80 pb-1">
                        Tak, w wielu przypadkach jest to możliwe. Każdą zmianę
                        analizujemy pod kątem technicznym, kosztowym i wpływu na
                        harmonogram. Jeśli modyfikacja wymaga dodatkowych
                        uzgodnień projektowych lub formalnych, informujemy o tym
                        przed rozpoczęciem prac.
                      </p>
                    </Fade>
                  </div>
                )}
              </div>
              <div className=" border border-border/50">
                <div
                  className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  onClick={() => {
                    isShow !== 3 ? setIsShow(3) : setIsShow(0);
                  }}
                >
                  <p className="font-medium max-sm:text-sm">
                    Jak wygląda płatność za realizacje?
                  </p>
                  {isShow !== 3 ? <FiPlus /> : <FiMinus />}
                </div>
                {isShow === 3 && (
                  <div className="px-4 ">
                    <Fade>
                      <p className="opacity-80 pb-1">
                        Płatność odbywa się etapami, zgodnie z ustalonym
                        harmonogramem prac. Dzięki temu rozliczasz się za
                        faktycznie zrealizowane etapy budowy. Szczegółowe zasady
                        płatności, terminy oraz zakres każdego etapu określamy w
                        umowie przed rozpoczęciem inwestycji.
                      </p>
                    </Fade>
                  </div>
                )}
              </div>
              <div className=" border border-border/50">
                <div
                  className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  onClick={() => {
                    isShow !== 4 ? setIsShow(4) : setIsShow(0);
                  }}
                >
                  <p className="font-medium max-sm:text-sm">
                    Czy pomagacie w uzyskaniu pozwolenia na budowę?
                  </p>
                  {isShow !== 4 ? <FiPlus /> : <FiMinus />}
                </div>
                {isShow === 4 && (
                  <div className="px-4">
                    <Fade>
                      <p className="opacity-80 pb-1">
                        Tak. Możemy wesprzeć Cię w przygotowaniu dokumentacji,
                        uzgodnieniach oraz formalnościach związanych z
                        rozpoczęciem budowy. Zakres pomocy ustalamy
                        indywidualnie w zależności od tego, czy masz już gotowy
                        projekt i komplet wymaganych dokumentów.
                      </p>
                    </Fade>
                  </div>
                )}
              </div>
              <div className=" border border-border/50">
                <div
                  className="flex justify-between items-center bg-cream py-2 px-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  onClick={() => {
                    isShow !== 5 ? setIsShow(5) : setIsShow(0);
                  }}
                >
                  <p className="font-medium max-sm:text-sm">
                    Jakie są gwarancje na wykonane prace?
                  </p>
                  {isShow !== 5 ? <FiPlus /> : <FiMinus />}
                </div>
                {isShow === 5 && (
                  <div className="px-4">
                    <Fade>
                      <p className="opacity-80 pb-1">
                        Na wykonane przez nas prace udzielamy gwarancji zgodnej
                        z zakresem umowy. Jej długość zależy od rodzaju
                        realizowanych prac i zastosowanych materiałów. Po
                        zakończeniu inwestycji otrzymujesz komplet dokumentacji
                        oraz jasne warunki obsługi gwarancyjnej.
                      </p>
                    </Fade>
                  </div>
                )}
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default ProcesFaq;
