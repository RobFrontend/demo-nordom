import OfferCta from "../components/OfferCta";
import OfferFeatures from "../components/OfferFeatures";
import OfferHero from "../components/OfferHero";
import OfferOffer from "../components/OfferOffer";
import OfferTable from "../components/OfferTable";

function page() {
  return (
    <>
      <OfferHero />
      <OfferOffer />
      <OfferTable />
      <OfferFeatures />
      <OfferCta />
    </>
  );
}

export default page;
