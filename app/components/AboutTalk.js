import Image from "next/image";
import Link from "next/link";
import IMGabout3 from "@/public/about3.png";
import { Fade } from "react-awesome-reveal";

function AboutTalk() {
  return (
    <section className="grid grid-cols-2 gap-6 overflow-hidden">
      <div className="pl-16 py-10">
        <Fade triggerOnce>
          <h2 className="text-5xl tracking-tight font-semibold">
            Porozmawiajmy o Twoim domu.
          </h2>
          <p className="py-8">
            Chętnie odpowiemy na pytania, doradzimy, <br></br>i przygotujemy
            indywidualną wycenę - bez zobowiązań.
          </p>
        </Fade>
        <Fade direction="left" delay={250} duration={300} triggerOnce>
          <Link
            href="/kontakt"
            className="btn1 inline-flex items-center tracking-wider hover:-translate-y-1 text-lg"
          >
            Wyceń budowę<span className="pl-6">→</span>
          </Link>
        </Fade>
      </div>
      <div className="relative">
        <Fade duration={1500} triggerOnce>
          <Image
            src={IMGabout3}
            alt="alt"
            fill
            className="object-center object-cover"
          />
        </Fade>
      </div>
    </section>
  );
}

export default AboutTalk;
