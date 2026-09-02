import ProcesComuncation from "../components/ProcesComuncation";
import ProcesCta from "../components/ProcesCta";
import ProcesFaq from "../components/ProcesFaq";
import ProcesHarm from "../components/ProcesHarm";
import ProcesHero from "../components/ProcesHero";
import ProcesSteps from "../components/ProcesSteps";

function page() {
  return (
    <>
      <ProcesHero />
      <ProcesSteps />
      <ProcesComuncation />
      <ProcesHarm />
      <ProcesFaq />
      <ProcesCta />
    </>
  );
}

export default page;
