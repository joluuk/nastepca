// File: src/components/SubNavbar.js
import Link from "next/link";

export function SubNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4 px-4 md:px-10 flex justify-between items-center">
      
      {/* LOGO GALERIA */}
      <h1 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-1.5 md:gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
        Galeria
      </h1>
      
      {/* TOMBOL KEMBALI (Sekarang tampil di HP dan PC) */}
      <div className="flex font-medium text-slate-500 text-xs md:text-sm">
        <Link href="/" className="hover:text-slate-900 transition-colors flex items-center gap-1 md:gap-2 bg-slate-50 md:bg-transparent px-3 py-1.5 md:px-0 md:py-0 rounded-full border border-slate-200 md:border-none">
          <span>&larr;</span> 
          <span className="hidden md:inline">Kembali ke Beranda</span>
          <span className="md:hidden"></span>
        </Link>
      </div>

    </nav>
  );
}