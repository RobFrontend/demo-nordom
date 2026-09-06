import { Fade } from "react-awesome-reveal";
import ContactForm from "./ContactForm";
import ContactData from "./ContactData";

function ContactContact() {
  return (
    <section className="py-10 px-16 max-2xl:px-8 max-sm:px-4">
      <div className="flex gap-8 max-lg:flex-col">
        <Fade triggerOnce delay={250} className="w-full">
          <ContactForm />
        </Fade>
        <Fade triggerOnce delay={250} className="w-fit max-lg:w-full">
          <ContactData />
        </Fade>
      </div>
    </section>
  );
}

export default ContactContact;
