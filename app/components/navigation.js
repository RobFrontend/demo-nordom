import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

function Navigation() {
  return (
    <nav className="flex justify-between px-16 py-6 items-center max-2xl:px-10   max-xl:px-4 shadow-sm">
      <Logo />
      <ul className="flex items-center gap-14 uppercase tracking-wide max-2xl:gap-8  max-xl:gap-6 max-lg:hidden font-semibold">
        <li className="navLink">
          <Link href="/o-nas">O Nas</Link>
        </li>
        <li className="navLink">
          <Link href="/oferta">Oferta</Link>
        </li>
        <li className="navLink">
          <Link href="/realizacje">Realizacje</Link>
        </li>
        <li className="navLink">
          <Link href="/proces">Proces</Link>
        </li>
        <li className="navLink">
          <Link href="/poradnik">Poradnik</Link>
        </li>
        <li className="navLink">
          <Link href="/kontakt">Kontakt</Link>
        </li>
        <li>
          <Link
            href="/kontakt"
            className="btn1 uppercase font-semibold tracking-widest inline-flex items-center max-lg:hidden max-2xl:text-sm"
          >
            Poproś o wycenę<span className="pl-3">→</span>
          </Link>
        </li>
      </ul>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navigation;
