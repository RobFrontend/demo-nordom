import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoClock, GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import BG from "@/public/contact1.png";
import Image from "next/image";

function ContactData() {
  return (
    <div>
      <div className="px-10 py-12 bg-background-alt max-2xl:min-w-full min-w-150">
        <h2 className="text-4xl font-semibold tracking-tight w-max mb-4">
          Dane kontaktowe
        </h2>
        <p className="text-sm mb-2">
          Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami telefonicznie,
          mailowo lub odwiedź nasze biuro.
        </p>
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex gap-6">
            <BsTelephone className="w-8 h-8 mt-1" />
            <div>
              <p className="font-semibold uppercase mb-1">Telefon</p>
              <p className="text-sm">+48 123 456 789</p>
            </div>
          </div>
          <div className="flex gap-6">
            <GoMail className="w-8 h-8 mt-1" />
            <div>
              <p className="font-semibold uppercase mb-1">E-mail</p>
              <p className="text-sm">biuro@nordom.pl</p>
            </div>
          </div>
          <div className="flex gap-6">
            <IoLocationOutline className="w-8 h-8 mt-1" />
            <div>
              <p className="font-semibold uppercase mb-1">Adres biura</p>
              <p className="text-sm">ul. Konstruktorów 7</p>
              <p className="text-sm">02-673 Warszawa</p>
            </div>
          </div>
          <div className="flex gap-6">
            <GoClock className="w-8 h-8 mt-1" />
            <div>
              <p className="font-semibold uppercase mb-1">Godziny otwarcia</p>
              <p className="text-sm">Poniedziałek - Piątek 9:00 - 17:00</p>
              <p className="text-sm">Spotkania po wcześniejszym umówieniu.</p>
            </div>
          </div>
        </div>
        <p className="border-b w-full border-muted/60 mt-6 max-md:mx-0 max-sm:mt-2"></p>
        <ul className="flex flex-col gap-2 mt-6">
          <li className="uppercase tracking-wider mb-1  font-semibold">
            Obserwuj nas
          </li>
          <li className="flex gap-2">
            <Link href="/">
              <FaFacebookF className="p-3 border border-muted/50 w-12 h-12 rounded-full transition-opacity duration-300 hover:opacity-80" />
            </Link>
            <Link href="/">
              <FaInstagram className="p-3 border border-muted/50 w-12 h-12 rounded-full transition-opacity duration-300 hover:opacity-80" />
            </Link>

            <Link href="/">
              <FaLinkedinIn className="p-3 border border-muted/50 w-12 h-12 rounded-full transition-opacity duration-300 hover:opacity-80" />
            </Link>
          </li>
        </ul>
      </div>
      <div className=" text-background mt-4 px-10 py-12 relative overflow-hidden">
        <h2 className="text-3xl font-semibold tracking-tight w-max mb-4">
          Działąmy na terenie<br></br>Warszawy i Mazowsza
        </h2>
        <p className="text-sm mb-2 max-w-75">
          Realizujemy inwestycje w Warszawie oraz na terenie całego województwa
          mazowieckiego. Znamy lokalne uwarunkowania i pomagamy wybrać najlepsze
          rozwiązania dla Twojej działki.
        </p>
        <button className="btn2-white mt-6">
          Sprawdź obszar działania<span className="pl-3">→</span>
        </button>
        <div className="top-0 left-0 bg-dark absolute w-full h-full -z-10">
          <Image
            src={BG}
            alt="bg"
            fill
            className="object-contain object-right opacity-30 -z-20"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactData;
