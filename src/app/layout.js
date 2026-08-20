import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Galeria",
  description: "Website Galeri Foto",
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