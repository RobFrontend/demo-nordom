import Link from "next/link";
import CarouselReviewsComp from "./CarouselReviews";
import { Fade } from "react-awesome-reveal";

function HomeReviews() {
  return (
    <section className="px-16 py-10 bg-dark">
      <Fade triggerOnce>
        <div className="flex gap-8">
          <div className="flex flex-col justify-between text-background">
            <div>
              <p className="uppercase tracking-wider text-lg  font-bold text-primary">
                Opinie
              </p>
              <h2 className="text-5xl font-semibold tracking-tight mb-8">
                Zaufanie buduje najlepsze domy
              </h2>
            </div>
            <Link
              href="https://www.google.com"
              className="btn2-white inline-flex items-center w-fit tracking-wider"
            >
              Zobacz więcej opinii<span className="pl-3">→</span>
            </Link>
          </div>
          <div className="bg-background w-full">
            <Fade delay={250} triggerOnce>
              <CarouselReviewsComp />
            </Fade>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default HomeReviews;
