import AboutHero from "../components/AboutHero";
import AboutHistory from "../components/AboutHistory";
import AboutStandards from "../components/AboutStandards";
import AboutTalk from "../components/AboutTalk";
import AboutTeams from "../components/AboutTeams";
import AboutValues from "../components/AboutValues";
import FeaturesMain from "../components/FeaturesMain";

function page() {
  return (
    <>
      <AboutHero />
      <FeaturesMain />
      <AboutHistory />
      <AboutValues />
      <AboutTeams />
      <AboutStandards />
      <AboutTalk />
    </>
  );
}

export default page;
