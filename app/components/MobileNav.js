"use client";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { VscCloseCompact } from "react-icons/vsc";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <VscCloseCompact className="text-3xl font-semibold cursor-pointer z-90" />
        ) : (
          <RiMenu3Line className="text-4xl font-semibold cursor-pointer z-90" />
        )}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 -z-1 bg-background/95 h-svh w-full">
          <Fade duration={300} triggerOnce direction="down">
            <ul className="flex flex-col justify-center items-center h-full gap-8 px-4 font-semibold text-lg">
              <li className="navLink">
                <Link href="#" onClick={() => setIsOpen(!isOpen)}>
                  Strona Główna
                </Link>
              </li>
              <li className="navLink">
                <Link href="/o-nas" onClick={() => setIsOpen(!isOpen)}>
                  O nas
                </Link>
              </li>
              <li className="navLink">
                <Link href="/oferta" onClick={() => setIsOpen(!isOpen)}>
                  Oferta
                </Link>
              </li>
              <li className="navLink">
                <Link href="/realizacje" onClick={() => setIsOpen(!isOpen)}>
                  Realizacje
                </Link>
              </li>
              <li className="navLink">
                <Link href="/proces" onClick={() => setIsOpen(!isOpen)}>
                  Proces
                </Link>
              </li>

              <li className="navLink">
                <Link href="/poradnik" onClick={() => setIsOpen(!isOpen)}>
                  Poradnik
                </Link>
              </li>
              <li className="navLink">
                <Link href="/kontakt" onClick={() => setIsOpen(!isOpen)}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </Fade>
        </div>
      )}
    </>
  );
}

export default MobileNav;
