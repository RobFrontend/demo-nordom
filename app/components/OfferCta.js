import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function OfferCta() {
  return (
    <section className="bg-dark text-background py-10 px-16 border-b border-muted/50 overflow-hidden">
      <Fade triggerOnce>
        <div className="flex gap-44 justify-center items-center">
          <h2 className="text-5xl tracking-tight font-semibold">
            Zacznijmy budowę <br></br>
            Twojego domu.
          </h2>
          <p className="max-w-100">
            Umów się na bezpłatną konsultację i otrzymaj indywidualną wycenę
            dopasowanądo Twoich potrzeb.
          </p>
          <Fade direction="left" triggerOnce delay={250} duration={300}>
            <Link
              href="/kontakt"
              className="btn1 inline-flex items-center tracking-wider hover:-translate-y-1 text-lg"
            >
              Wyceń budowę<span className="pl-6">→</span>
            </Link>
          </Fade>
        </div>
      </Fade>
    </section>
  );
}

export default OfferCta;
