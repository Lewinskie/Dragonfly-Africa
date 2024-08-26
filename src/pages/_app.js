import "@/styles/globals.css";
import Head from "next/head";
import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import {
  Roboto_Condensed,
  Raleway,
  Playfair_Display,
  Montserrat,
  Merriweather,
  Source_Sans_Pro,
  Libre_Baskerville,
  Oswald,
  EB_Garamond,
  Quattrocento,
  Palanquin,
  Roboto,
  PT_Serif,
  Lato,
  MuseoModerno,
  Lora,
} from "next/font/google";

const displayHeader = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const displayBody = Roboto({
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <div className={`${displayHeader.variable} ${displayBody.variable}`}>
        <Component {...pageProps} />
      </div>
    );
  }
  return (
    <div className={`${displayHeader.variable} ${displayBody.variable}`}>
      <Head>
        <title>DragonFly Aviation </title>
        <meta name="description" content="Content" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
