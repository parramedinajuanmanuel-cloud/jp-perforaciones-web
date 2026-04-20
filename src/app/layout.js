import { Montserrat, Open_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "JP Perforaciones | Estudio de Suelos, Geotecnia y Pilotaje en Ecuador",
  description: "Líderes en ingeniería geotécnica en Ecuador. Especialistas en estudio de suelos, perforaciones SPT, pilotaje y cimentaciones profundas. Quito y Guayaquil.",
  keywords: ["estudio de suelos Ecuador", "geotecnia", "perforaciones", "pilotaje", "ingeniería civil", "ensayo SPT"],
  openGraph: {
    title: "JP Perforaciones | Ingeniería Geotécnica",
    description: "Expertos en estudio de suelos y pilotaje en Ecuador.",
    url: "https://www.jpperforaciones.com",
    siteName: "JP Perforaciones",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo JP Perforaciones",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <body style={{ fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
