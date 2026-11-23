import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Galeria",
  description: "Galeri foto kenangan Nastepca '24 — momen kebersamaan, ngaji bulanan, dan proyek akhir.",
  openGraph: {
    title: "Galeria",
    description: "Galeri foto kenangan Nastepca '24.",
    images: ["/koleksi/IMG_9807.JPG"],
    type: "website",
    locale: "id_ID",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={jakarta.className}>
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}