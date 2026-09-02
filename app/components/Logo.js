import Link from "next/link";
import LogoIMG from "@/public/logo.png";
import Image from "next/image";
function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src={LogoIMG}
        alt="logo"
        className="max-h-14 w-auto max-2xl:max-h-12"
      />
    </Link>
  );
}
export default Logo;
