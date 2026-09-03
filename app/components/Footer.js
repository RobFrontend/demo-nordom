import Image from "next/image";
import Logo from "@/public/logo-white.png";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark px-16 pt-10 pb-5 text-background text-sm max-2xl:px-8">
      <div className="flex gap-2 justify-between mb-6 max-lg:grid max-lg:grid-cols-3 max-lg:gap-8 max-md:grid-cols-2 max-[30rem]:grid-cols-1">
        <div className="lg:max-w-[20%] max-lg:max-w-[80%]">
          <Image src={Logo} alt="logo" />
          <p className="pt-6">
            Budujemy nowoczesne domy jednorodzinne w Warszawie i na terenie
            Mazowsza.
          </p>
        </div>{" "}
        <div className="max-lg:hidden">
          <p className="border-r h-full border-(--color-muted) opacity-50"></p>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="uppercase tracking-wider mb-1  font-semibold">
            Oferta
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/oferta">Stan surowy</Link>
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/oferta">Stan deweloperski</Link>
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/oferta">Dom pod klucz</Link>
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/oferta">Rozbudowa i przebudowa</Link>
          </li>
        </ul>
        <div className="max-lg:hidden">
          <p className="border-r h-full border-(--color-muted) opacity-50"></p>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="uppercase tracking-wider mb-1  font-semibold">
            Nawigacja
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/">Strona Główna</Link>
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/o-nas">O nas</Link>
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/realizacje">Realizacje</Link>
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/proces">Proces</Link>
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/poradnik">Poradnik</Link>
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
        <div className="max-lg:hidden">
          <p className="border-r h-full border-(--color-muted) opacity-50"></p>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="uppercase tracking-wider mb-1  font-semibold">
            Kontakt
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            +48 123 456 789
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            biuro@nordom.pl
          </li>
          <li className="opacity-80 transition-opacity duration-300 hover:opacity-60">
            ul. Konstruktorów 7<br></br>02-673 Warszawa
          </li>
        </ul>
        <div className="max-lg:hidden">
          <p className="border-r h-full border-(--color-muted) opacity-50"></p>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="uppercase tracking-wider mb-1  font-semibold">
            Obserwuj nas
          </li>
          <li className="flex gap-2">
            <Link href="/">
              <FaFacebookF className="p-2 border border-muted/50 w-8 h-8 rounded-full transition-opacity duration-300 hover:opacity-80" />
            </Link>
            <Link href="/">
              <FaInstagram className="p-2 border border-muted/50 w-8 h-8 rounded-full transition-opacity duration-300 hover:opacity-80" />
            </Link>

            <Link href="/">
              <FaLinkedinIn className="p-2 border border-muted/50 w-8 h-8 rounded-full transition-opacity duration-300 hover:opacity-80" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between border-t border-muted/50 mx-auto pt-4 text-xs max-md:flex-col max-md:gap-2 max-md:items-center">
        <div className="flex gap-4 max-sm:gap-2 max-[25rem]:flex-col max-[25rem]:gap-1 max-[25rem]:text-center">
          <p className="opacity-80">
            &copy; {new Date().getFullYear()} Nordom Sp. z o.o.
          </p>
          <p className="opacity-80 max-[30rem]:hidden">|</p>
          <p className="opacity-80">Wszelkie prawa zastrzeżone</p>
        </div>
        <div className="flex gap-4 max-sm:gap-2">
          <Link
            href="/"
            className="opacity-80 transition-opacity duration-300 hover:opacity-60"
          >
            Polityka prywatności
          </Link>
          <Link
            href="/"
            className="opacity-80 transition-opacity duration-300 hover:opacity-60"
          >
            Regulamin
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
