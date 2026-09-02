import { Fade } from "react-awesome-reveal";
import { BsHouse, BsHouseGear } from "react-icons/bs";
import { FaCheck, FaMinus, FaRegCircle } from "react-icons/fa";
import { LuArmchair, LuBrickWall, LuHouse } from "react-icons/lu";
import { SiRenovate } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import { TfiPaintRoller } from "react-icons/tfi";

function OfferTable() {
  return (
    <section className="pt-10 pb-12 px-16">
      <Fade triggerOnce>
        <div className="pt-4 overflow-x-auto px-1 pb-2 max-md:scrollbar-none bg-background-alt/60">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th scope="col" className="px-4 py-2 text-left">
                  Co obejmuje każdy etap?
                </th>
                <th scope="col" className="px-4 py-2">
                  <div className="flex items-center gap-3 p-2 justify-center">
                    <BsHouse className="w-8 h-8 opacity-75" />
                    <p>Stan surowy</p>
                  </div>
                </th>
                <th scope="col" className="px-4 py-2">
                  <div className="flex items-center gap-3 p-2 justify-center">
                    <LuBrickWall className="w-8 h-8 opacity-75" />
                    <p>Stan deweloperski</p>
                  </div>
                </th>
                <th scope="col" className="px-4 py-2">
                  <div className="flex items-center gap-3 p-2 justify-center">
                    <LuArmchair className="w-8 h-8 opacity-75" />
                    <p>Dom pod klucz</p>
                  </div>
                </th>
                <th scope="col" className="px-4 py-2">
                  <div className="flex items-center gap-3 p-2 justify-center">
                    <BsHouseGear className="w-8 h-8 opacity-75" />
                    <p>Rozbudowa i przebudowa</p>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th
                  scope="row"
                  className="py-4 px-2 bg-background border border-border/20"
                >
                  <div className="flex gap-3 p-2">
                    <LuHouse className="h-10 w-10 opacity-75" />
                    <div className="text-left">
                      <p className="font-semibold text-left uppercase">
                        Konstrukcja
                      </p>
                      <p className="font-normal">
                        Fundamenty, ściany, stropy, dach
                      </p>
                    </div>
                  </div>
                </th>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="py-4 px-2 bg-background border border-border/20"
                >
                  <div className="flex gap-3 p-2">
                    <SlEnergy className="h-10 w-10 opacity-75" />
                    <div className="text-left">
                      <p className="font-semibold text-left uppercase">
                        Instalacje
                      </p>
                      <p className="font-normal">
                        Elektryczna, wod.-kan., CO, wentylacja
                      </p>
                    </div>
                  </div>
                </th>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaMinus className="text-muted mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="py-4 px-2 bg-background border border-border/20"
                >
                  <div className="flex gap-3 p-2">
                    <SiRenovate className="h-10 w-10 opacity-75" />
                    <div className="text-left">
                      <p className="font-semibold text-left uppercase">
                        Wykończenie
                      </p>
                      <p className="font-normal">
                        Tynki, wylewki, sufity, gładzie
                      </p>
                    </div>
                  </div>
                </th>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaMinus className="text-muted mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="py-4 px-2 bg-background border border-border/20"
                >
                  <div className="flex gap-3 p-2">
                    <TfiPaintRoller className="h-10 w-10 opacity-75" />
                    <div className="text-left">
                      <p className="font-semibold text-left uppercase">
                        Prace wykończeniowe
                      </p>
                      <p className="font-normal">
                        Podłogi, łazienki, stolarka, malowanie
                      </p>
                    </div>
                  </div>
                </th>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaMinus className="text-muted mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaMinus className="text-muted mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
              </tr>

              <tr>
                <th
                  scope="row"
                  className="py-4 px-2 bg-background border border-border/20"
                >
                  <div className="flex gap-3 p-2">
                    <FaRegCircle className="h-10 w-10 opacity-75" />
                    <div className="text-left">
                      <p className="font-semibold text-left uppercase">
                        Odbiory i dokumentacja
                      </p>
                      <p className="font-normal">
                        Próby, odbiory, dokumenty powykonawcze
                      </p>
                    </div>
                  </div>
                </th>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaMinus className="text-muted mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaMinus className="text-muted mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
                <td className="py-4 px-2 bg-background border border-border/20 text-center">
                  <FaCheck className="text-primary mx-auto text-2xl" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fade>
    </section>
  );
}

export default OfferTable;
