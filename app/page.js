import FeaturesMain from "./components/FeaturesMain";
import HomeOffer from "./components/HomeOffer";
import HomeRealizations from "./components/HomeRealizations";
import HomeWhy from "./components/HomeWhy";
import HomeHero from "./components/HomeHero";
import HomeProces from "./components/HomeProces";
import HomeReviews from "./components/HomeReviews";
import HomeMap from "./components/HomeMap";

export default function Home() {
  return (
    <>
      <header>
        <HomeHero />
      </header>
      <main>
        <FeaturesMain />
        <HomeOffer />
        <HomeRealizations />
        <HomeWhy />
        <HomeProces />
        <HomeReviews />
        <HomeMap />
      </main>
    </>
  );
}
