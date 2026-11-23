"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* BUNGKUSAN UTAMA (HEADER) - Lebih stabil dari nav */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
        
        {/* BAGIAN ATAS: LOGO & MENU DESKTOP */}
        <div className="flex justify-between items-center py-3.5 px-4 sm:px-6 md:px-10 max-w-[1600px] mx-auto">
          
          <Link href="/" className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
            Galeria
          </Link>
          
          {/* MENU DESKTOP (Aman berjejer ke kanan) */}
          <nav className="hidden md:flex gap-6 font-medium text-slate-500 text-sm items-center">
            <Link href="/" className="hover:text-slate-900 transition-colors">Beranda</Link>
            <a href="#koleksi" className="hover:text-slate-900 transition-colors">Koleksi</a>
            <button 
              onClick={() => setIsOpen(true)} 
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Tentang
            </button>
          </nav>

          {/* TOMBOL HAMBURGER (Versi HP) */}
          <button 
            aria-label="Buka menu navigasi"
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> 
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> 
              )}
            </svg>
          </button>

        </div>

        {/* DROPDOWN MENU HP (Ramah sentuhan Android) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/98 border-t border-gray-100 px-4 py-3 flex flex-col gap-1 font-medium text-slate-700 shadow-lg">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-slate-900 active:bg-slate-100 rounded-lg px-3 py-2.5 block transition-colors"
            >
              Beranda
            </Link>
            <a 
              href="#koleksi" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-slate-900 active:bg-slate-100 rounded-lg px-3 py-2.5 block transition-colors"
            >
              Koleksi
            </a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOpen(true);
              }} 
              className="text-left hover:text-slate-900 active:bg-slate-100 rounded-lg px-3 py-2.5 block w-full transition-colors"
            >
              Tentang
            </button>
          </div>
        )}
      </header>

      {/* POP-UP MODAL TENTANG (Sesuai tema Galeria & ramah mobile) */}
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4" 
          style={{ zIndex: 9999 }}
        >
          
          {/* Background Gelap dengan Efek Blur */}
          <div 
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all"
          ></div>

          {/* Kotak Konten Pop-up */}
          <div 
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header Gelap Sesuai Tema Hero & Footer */}
            <div className="relative bg-slate-900 text-white px-6 pt-6 pb-5">
              <button
                aria-label="Tutup modal"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">Tentang Galeria</h3>
                  <p className="text-[11px] uppercase tracking-widest text-slate-400">Nastepca &apos;24 &bull; Arsip Kenangan</p>
                </div>
              </div>
            </div>

            {/* Garis Aksen Tipis */}
            <div className="h-1 w-full bg-gradient-to-r from-slate-900 via-yellow-400 to-slate-900"></div>

            {/* Isi Konten */}
            <div className="p-6 text-left">
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Proyek ini didedikasikan untuk rekan-rekan seperjuangan. Tempat nyimpen dokumentasi momen kebersamaan biar nggak hilang ditelan memori HP.
              </p>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 mb-5">
                <p className="text-xs text-slate-500 italic">
                  &ldquo;Keep in touch dawg!&rdquo;
                </p>
              </div>

              {/* Shortcut Koleksi */}
              <div className="mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Koleksi Tersedia
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/foto-random"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 px-3 py-1.5 rounded-full transition-colors"
                  >
                    Foto Random
                  </Link>
                  <Link
                    href="/ngaji-bulanan"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 px-3 py-1.5 rounded-full transition-colors"
                  >
                    Ngaji Bulanan
                  </Link>
                  <Link
                    href="/proyek-akhir"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 px-3 py-1.5 rounded-full transition-colors"
                  >
                    Nihai Show
                  </Link>
                </div>
              </div>

              {/* Aksi Bawah */}
              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                <a
                  href="https://www.instagram.com/nastepca.24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium py-2.5 px-3 rounded-xl transition-colors text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                  @nastepca.24
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-slate-900 text-white font-medium py-2.5 px-3 rounded-xl hover:bg-slate-800 active:scale-[0.98] transition-all text-xs cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  );
}