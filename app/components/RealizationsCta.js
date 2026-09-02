import IMGCta from "@/public/RealCta.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
function RealizationsCta() {
  return (
    <section className="bg-dark text-background border-b border-muted/50">
      <div className="grid grid-cols-2 gap-8">
        <Fade triggerOnce>
          <div className="pl-16 py-12 flex flex-col gap-4 justify-self-center">
            <h2 className="text-5xl tracking-tight font-semibold">
              Planujesz podobną inwestycję?
            </h2>
            <p>Porozmawiajmy o Twoim projekcie.</p>
            <Fade direction="left" triggerOnce delay={250} duration={300}>
              <Link
                href="/kontakt"
                className="btn1 inline-flex items-center w-fit mt-4"
              >
                Poproś o wycenę<span className="pl-3">→</span>
              </Link>
            </Fade>
          </div>
        </Fade>
        <div className="relative">
          <Fade duration={2000} triggerOnce>
            <Image
              src={IMGCta}
              alt="CTA Image"
              fill
              className="absolute object-cover object-center"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default RealizationsCta;
