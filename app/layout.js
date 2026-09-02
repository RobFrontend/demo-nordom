import {
  Cormorant_Garamond,
  Manrope,
  Libre_Baskerville,
} from "next/font/google";
import "./globals.css";
import HeaderReveal from "./components/HeaderReveal";
import Navigation from "./components/navigation";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const numbers = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-numbers",
});

export const metadata = {
  title: {
    default: "NORDOM | Budowa Domów Warszawa i Mazowsze",
    template: "%s | NORDOM",
  },
  description:
    "Kompleksowa budowa domów jednorodzinnych w Warszawie i na Mazowszu. Stan surowy, deweloperski i dom pod klucz. Sprawdź realizacje i poproś o wycenę.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${cormorant.variable} ${manrope.variable} ${numbers.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HeaderReveal>
          <Navigation />
        </HeaderReveal>
        {children}
        <Footer />
      </body>
    </html>
  );
}
