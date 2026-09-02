import { Fade } from "react-awesome-reveal";
import ContactForm from "./ContactForm";
import ContactData from "./ContactData";

function ContactContact() {
  return (
    <section className="py-10 px-16">
      <div className="flex gap-8">
        <Fade triggerOnce delay={250} className="w-full">
          <ContactForm />
        </Fade>
        <Fade triggerOnce delay={250} className="w-fit">
          <ContactData />
        </Fade>
      </div>
    </section>
  );
}

export default ContactContact;
