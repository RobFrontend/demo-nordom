import Link from "next/link";
import IMG1 from "@/public/homeReal1.png";
import IMG2 from "@/public/homeReal2.png";
import IMG3 from "@/public/homeReal3.png";
import IMG4 from "@/public/homeReal4.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function HomeRealizations() {
  return (
    <section className="px-16 bg-background-alt/60 max-2xl:px-8">
      <div className=" py-8  border-t border-border">
        <Fade triggerOnce>
          <div className="flex justify-between  mb-6 max-md:flex-col max-md:gap-6">
            <div>
              <p className="uppercase tracking-wider text-lg text-primary font-bold max-sm:text-sm">
                Realizacje
              </p>
              <h2 className="text-5xl tracking-tight font-semibold max-sm:text-3xl">
                Wybrane realizacje
              </h2>
            </div>
            <Link
              href="/realizacje"
              className="btn2 inline-flex items-center w-fit md:self-end text-sm max-[25rem]:hidden"
            >
              Zobacz wszystkie realizacje<span className="pl-3">→</span>
            </Link>
            <Link
              href="/realizacje"
              className="btn2 inline-flex items-center w-fit md:self-end text-sm min-[25rem]:hidden"
            >
              Wszystkie realizacje<span className="pl-3">→</span>
            </Link>
          </div>

          <div className="flex gap-6 max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col justify-between bg-background pb-4 ">
              <Link
                href="/realizacje"
                className="transition-opacity duration-300 hover:opacity-80"
              >
                <div>
                  <Image src={IMG1} alt="alt" />
                  <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                    Wilanów, Warszawa
                  </h3>
                  <div className="flex justify-between mx-4">
                    <p>
                      Dom jednorodzinny <span className="px-2">|</span> 240 m
                      <sup>2</sup>
                    </p>
                    <p className="font-semibold">→</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col justify-between bg-background pb-4">
              <Link
                href="/realizacje"
                className="transition-opacity duration-300 hover:opacity-80"
              >
                <div>
                  <Image src={IMG2} alt="alt" />
                  <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                    Konstancin-Jeziorna
                  </h3>
                  <div className="flex justify-between mx-4">
                    <p>
                      Dom jednorodzinny <span className="px-2">|</span> 180 m
                      <sup>2</sup>
                    </p>
                    <p className="font-semibold">→</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col justify-between bg-background pb-4">
              <Link
                href="/realizacje"
                className="transition-opacity duration-300 hover:opacity-80"
              >
                <div>
                  <Image src={IMG3} alt="alt" />
                  <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                    Piaseczno
                  </h3>
                  <div className="flex justify-between mx-4">
                    <p>
                      Dom jednorodzinny <span className="px-2">|</span> 208 m
                      <sup>2</sup>
                    </p>
                    <p className="font-semibold">→</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col justify-between bg-background pb-4">
              <Link
                href="/realizacje"
                className="transition-opacity duration-300 hover:opacity-80"
              >
                <div>
                  <Image src={IMG4} alt="alt" />
                  <h3 className="text-xl font-semibold uppercase mt-4 mx-4 mb-2">
                    Łomianki
                  </h3>
                  <div className="flex justify-between mx-4">
                    <p>
                      Dom jednorodzinny <span className="px-2">|</span> 200 m
                      <sup>2</sup>
                    </p>
                    <p className="font-semibold">→</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default HomeRealizations;
