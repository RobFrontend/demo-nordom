import FeaturesMain from "../components/FeaturesMain";
import RealizationsCta from "../components/RealizationsCta";
import RealizationsHero from "../components/RealizationsHero";
import RealizationsRealizations from "../components/RealizationsRealizations";

function page() {
  return (
    <>
      <RealizationsHero />
      <RealizationsRealizations />
      <FeaturesMain />
      <RealizationsCta />
    </>
  );
}

export default page;
