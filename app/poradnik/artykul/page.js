import Link from "next/link";

function page() {
  return (
    <div className="grid min-h-[80vh] w-full items-center justify-center uppercase font-semibold px-4 text-lg tracking-wide">
      <div>
        <div className="flex gap-2 uppercase font-semibold text-sm pb-4 tracking-wide max-sm:text-xs max-sm:gap-1 flex-wrap">
          <Link href="/" className="opacity-50 max-2xl:opacity-80">
            Strona główna
          </Link>
          <p className="opacity-50 max-2xl:opacity-80">/</p>
          <Link href="/poradnik" className="opacity-50 max-2xl:opacity-80">
            Poradnik
          </Link>
          <p className="opacity-50 max-2xl:opacity-80">/</p>
          <p className="text-primary">Wybrany artykuł</p>
        </div>
        <p>Indywidualna strona wybranego artykułu</p>
      </div>
    </div>
  );
}

export default page;
