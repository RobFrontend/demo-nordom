import Doc1 from "@/public/aboutDocWhite1.png";
import Doc2 from "@/public/aboutDocWhite2.png";
import Doc3 from "@/public/aboutDocWhite3.png";
import Doc4 from "@/public/aboutDocWhite4.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
function AboutStandards() {
  return (
    <section className="py-10 px-16 bg-dark text-background">
      <div className="flex gap-6 justify-between">
        <div>
          <Fade triggerOnce>
            <p className="uppercase tracking-wider text-lg text-primary font-bold">
              Standardy i certyfikaty
            </p>
            <h2 className="text-5xl tracking-tight font-semibold">
              Budujemy zgodnie <br></br>z najwyższymi standardami.
            </h2>
          </Fade>
        </div>
        <Fade delay={100} triggerOnce>
          <div className="flex flex-col items-center">
            <Image src={Doc1} alt="ISO" className="max-h-24 w-auto mb-4" />
            <p>ISO 9001</p>
            <p>Zarządzanie jakością</p>
          </div>
        </Fade>
        <p className="border-r  border-border/50"></p>
        <Fade delay={200} triggerOnce>
          <div className="flex flex-col items-center">
            <Image src={Doc2} alt="ISO" className="max-h-24 w-auto mb-4" />
            <p>Polski Związek</p>
            <p>Firm Deweloperskich</p>
          </div>
        </Fade>
        <p className="border-r  border-border/50"></p>
        <Fade delay={300} triggerOnce>
          <div className="flex flex-col items-center">
            <Image src={Doc3} alt="ISO" className="max-h-24 w-auto mb-4" />
            <p>Rzetelny partner</p>
            <p>w biznesie</p>
          </div>
        </Fade>
        <p className="border-r  border-border/50"></p>
        <Fade delay={400} triggerOnce>
          <div className="flex flex-col items-center">
            <Image src={Doc4} alt="ISO" className="max-h-24 w-auto mb-4" />
            <p>Zgodność materiałow</p>
            <p>i systemów z normami UE</p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default AboutStandards;
