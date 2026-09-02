import IMGCta from "@/public/proces3.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
function ProcesCta() {
  return (
    <section className="bg-dark text-background border-b border-muted/50">
      <div className="grid grid-cols-2 gap-8">
        <Fade triggerOnce>
          <div className="pl-16 py-12 flex flex-col gap-4 justify-self-center">
            <h2 className="text-5xl tracking-tight font-semibold">
              Gotowy, aby zacząć?
            </h2>
            <p>Umów bezpłatną rozmowę i porozmawiajmy o Twoim domu.</p>
            <Fade direction="left" triggerOnce delay={250} duration={300}>
              <Link
                href="/kontakt"
                className="btn1 inline-flex items-center w-fit mt-4"
              >
                Umów rozmowę<span className="pl-3">→</span>
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
              className="object-cover object-center"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default ProcesCta;
