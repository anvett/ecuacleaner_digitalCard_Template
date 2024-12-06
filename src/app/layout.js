
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Metadata configurada sin viewport
export const metadata = {
  title: "Gisselle Conde Digital Card",
  description: "Digital Card de Gisselle Conde, Asistente de Ventas de EcuaCleaner Inc.",
  keywords: "Gisselle Conde, EcuaCleaner Inc., Asistente de Ventas",
  authors: [{ name: "Anvetcorp S.A.S." }],
  robots: "index, follow",
  
  openGraph: {
    title: "Gisselle Conde Digital Card",
    description: "Digital Card de Gisselle Conde, Asistente de Ventas de EcuaCleaner Inc.",
    url: "https://gisselleconde.ecuacleanerinc.com",
    images: [
      {
        url: "https://gisselleconde.ecuacleanerinc.com/assets/images/shared_image.png",
        alt: "EcuaCleaner Logo",
        width: 1200, // Ajuste de tamaño recomendado para OpenGraph
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gisselle Conde Digital Card",
    description: "Asistente de Ventas de EcuaCleaner Inc",
    images: ["/assets/images/logo.png"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

// Nueva exportación para viewport
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-image-with-overlay">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
