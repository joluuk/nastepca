// File: src/components/SubNavbar.js
import Link from "next/link";

export function SubNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4 px-6 md:px-10 flex justify-between items-center">
      <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
        {/* Ikon Kamera Sederhana */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
        Galeria
      </h1>
      <div className="hidden md:flex gap-6 font-medium text-slate-500 text-sm">
        <Link href="/" className="hover:text-slate-900 transition-colors">
          &larr; Kembali ke Beranda
        </Link>
      </div>
    </nav>
  );
}