import Link from "next/link";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className="flex justify-between px-16 py-6 items-center max-2xl:px-10   max-lg:px-4 shadow-sm">
      <Logo />
      <ul className="flex items-center gap-14 uppercase tracking-wide max-2xl:gap-10 max-lg:hidden max-[1100px]:gap-6 font-semibold">
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
            className="btn1 uppercase font-semibold tracking-widest inline-flex items-center max-lg:hidden "
          >
            Poproś o wycenę<span className="pl-3">→</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
