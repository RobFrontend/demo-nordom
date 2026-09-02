import BG from "@/public/featuresBG.png";
import Image from "next/image";
import Link from "next/link";
import { CiLock } from "react-icons/ci";

function ContactForm() {
  return (
    <form className="flex flex-col gap-6 relative px-10 py-12 overflow-hidden h-full">
      <div className="flex flex-col gap-6 justify-between">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight w-max mb-4">
            Wypełnij formularz wyceny
          </h2>
          <p className="text-sm mb-2">
            Im więcej informacji nam przekażesz, tym lepiej dopasujemy ofertę do
            Twoich oczekiwań.
          </p>
        </div>
        <div className="flex gap-4 ">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-semibold uppercase">
              Rodzaj usługi
            </label>
            <div className="w-full  border border-muted/50  pr-2 bg-background/80">
              <select
                className="w-full p-2 text-sm text-dark/80"
                name="service"
                id="service"
              >
                <option>Wybierz usługę</option>
                <option value="budowa">Budowa domu</option>
                <option value="remont">Remont</option>
                <option value="projekt">Projekt</option>
                <option value="inna">Inna</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-semibold uppercase">
              Masz projekt?
            </label>
            <div className="w-full  border border-muted/50  pr-2 bg-background/80">
              <select
                className="w-full p-2 text-sm text-dark/80"
                name="project"
                id="project"
              >
                <option>Wybierz opcję</option>
                <option value="tak">Tak</option>
                <option value="nie">Nie</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-semibold uppercase">
              Lokalizacja inwestycji
            </label>

            <input
              className="w-full p-2 text-sm text-dark/80 border border-muted/50  pr-2 bg-background/80"
              name="location"
              id="location"
              placeholder="Miasto lub miejscowość"
            ></input>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-semibold uppercase">
              Powierzchnia użytkowa
            </label>
            <div className="w-full  border border-muted/50  pr-2 bg-background/80">
              <input
                className="w-full p-2 text-sm text-dark/80"
                name="area"
                id="area"
                placeholder="m²"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-semibold uppercase">
              Termin rozpoczęcia
            </label>
            <div className="w-full  border border-muted/50  bg-background/80">
              <input
                type="date"
                className="w-full p-2 text-sm text-dark/80"
                name="date"
                id="startDate"
                placeholder="Wybierz datę"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-semibold uppercase">
              Planowany budżet
            </label>
            <div className="w-full  border border-muted/50  pr-2 bg-background/80">
              <select
                className="w-full p-2 text-sm text-dark/80"
                name="budget"
                id="budget"
              >
                <option>Wybierz zakres budżetu</option>
                <option value="500000">do 500 000 zł</option>
                <option value="1000000">do 1 000 000 zł</option>
                <option value="1500000">do 1 500 000 zł</option>
                <option value="2000000">powyżej 1 500 000 zł</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-semibold uppercase">
              Telefon
            </label>

            <input
              className="w-full p-2 text-sm text-dark/80 border border-muted/50  pr-2 bg-background/80"
              name="phone"
              id="phone"
              placeholder="+48 123 456 789"
            ></input>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-sm font-semibold uppercase">
              E-mail
            </label>
            <div className="w-full  border border-muted/50  pr-2 bg-background/80">
              <input
                className="w-full p-2 text-sm text-dark/80"
                name="email"
                id="email"
                placeholder="twoj@email.com"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold uppercase">
            Wiadomość
          </label>
          <textarea
            className="w-full p-2 text-sm text-dark/80 border border-muted/50  pr-2 bg-background/80 min-h-40"
            name="message"
            placeholder="Opisz krótko swoje potrzeby, oczekiwania i plany dotyczące domu."
          />
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <label className="text-xs opacity-80">
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
            <Link href="/kontakt" className="font-semibold">
              Polityką prywatności.
            </Link>
          </label>
        </div>
        <button className="btn1 mt-2">
          Wyślij zapytanie o wycenę<span className="pl-6">→</span>
        </button>
      </div>
      <div className="flex gap-2 items-end mx-auto h-full">
        <CiLock className="w-5 h-5 opacity-80" />
        <p className="text-xs opacity-80">
          Twoje dane są u nas bezpieczne. Nie udostępniamy osobom trzecim.
        </p>
      </div>
      <Image
        src={BG}
        alt="stone"
        fill
        className="absolute object-cover object-center -z-10"
      />
    </form>
  );
}

export default ContactForm;
