import Link from "next/link";
import LogoIMG from "@/public/logo.png";
import LogoIMGShort from "@/public/logoShort.png";
import Image from "next/image";
function Logo() {
  return (
    <Link href="/" className="inline-flex items-center min-h-12">
      <Image
        src={LogoIMG}
        alt="logo"
        className="max-h-14 w-auto max-2xl:max-h-12 max-xl:max-h-10 max-[1150px]:hidden"
      />
      <Image
        src={LogoIMGShort}
        alt="logo"
        className="max-h-12 w-auto min-[1150px]:hidden max-lg:hidden max-[35rem]:block"
      />
      <Image
        src={LogoIMG}
        alt="logo"
        className="max-h-12 w-auto lg:hidden max-[35rem]:hidden"
      />
    </Link>
  );
}
export default Logo;
