"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
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

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/foto-random", label: "Foto Random" },
    { href: "/ngaji-bulanan", label: "Ngaji Bulanan" },
    { href: "/proyek-akhir", label: "Nihai Show" },
  ];

  return (
    <>
      {/* GLOBAL DARK HEADER - BERSIH & LEGA */}
      <header className="sticky top-0 z-50 w-full bg-[#212124]/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="flex items-center justify-between h-14 px-4 sm:px-6 md:px-10 max-w-[1600px] mx-auto gap-4">
          {/* KIRI: LOGO SEDERHANA GALERIA */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 text-white hover:opacity-90 transition-opacity focus:outline-none"
            aria-label="Galeria Beranda"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            <span className="text-[19px] font-bold tracking-tight leading-none">
              Galeria
            </span>
          </Link>

          {/* TENGAH / KANAN: MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            <nav className="flex items-center gap-6 lg:gap-7 text-[14px] font-medium text-white/75">
              {navLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors whitespace-nowrap ${
                      active ? "text-white font-semibold" : "hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Tentang
              </button>
            </nav>

            <a
              href="https://www.instagram.com/nastepca.24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0063dc] hover:bg-[#0052b8] text-white text-[13px] font-semibold px-3.5 h-[34px] rounded-[3px] transition-colors shrink-0"
            >
              @nastepca.24
            </a>
          </div>

          {/* TOMBOL HAMBURGER MOBILE */}
          <button
            type="button"
            aria-label="Buka menu navigasi"
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-[3px] text-white/90 hover:bg-white/10 active:bg-white/15 transition-colors focus:outline-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* DROPDOWN MENU HP */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1d] border-t border-white/10 px-4 py-3 flex flex-col gap-1 text-sm font-medium text-white/85 shadow-xl">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-[3px] px-3 py-2.5 block transition-colors ${
                    active ? "bg-white/10 text-white font-semibold" : "hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOpen(true);
              }}
              className="text-left hover:bg-white/5 hover:text-white rounded-[3px] px-3 py-2.5 block w-full transition-colors cursor-pointer"
            >
              Tentang
            </button>
          </div>
        )}
      </header>

      {/* POP-UP MODAL TENTANG */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-all"
          />

          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-[4px] shadow-2xl border border-[#e5e5e5] overflow-hidden">
            {/* Header Gelap */}
            <div className="relative bg-[#212124] text-white px-6 pt-6 pb-5">
              <button
                type="button"
                aria-label="Tutup modal"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[4px] bg-white/10 border border-white/15 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">Tentang Galeria</h3>
                  <p className="text-[11px] uppercase tracking-widest text-white/60">
                    Nastepca &apos;24 &bull; Arsip Kenangan
                  </p>
                </div>
              </div>
            </div>

            {/* Garis Aksen Tipis */}
            <div className="h-[3px] w-full bg-[#0063dc]" />

            {/* Isi Konten */}
            <div className="p-6 text-left">
              <p className="text-[#212124] text-sm leading-relaxed mb-4">
                Proyek ini didedikasikan untuk rekan-rekan seperjuangan. Tempat nyimpen dokumentasi momen kebersamaan biar nggak hilang ditelan memori HP.
              </p>

              <div className="bg-[#f3f5f6] border border-[#e5e5e5] rounded-[3px] px-4 py-3 mb-5">
                <p className="text-xs text-[#555] italic">&ldquo;Keep in touch dawg!&rdquo;</p>
              </div>

              {/* Shortcut Koleksi */}
              <div className="mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#767676] mb-2">
                  Album Tersedia
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/foto-random"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium bg-[#f3f5f6] hover:bg-[#0063dc] hover:text-white text-[#212124] px-3 py-1.5 rounded-[3px] border border-[#e5e5e5] hover:border-[#0063dc] transition-colors"
                  >
                    Foto Random
                  </Link>
                  <Link
                    href="/ngaji-bulanan"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium bg-[#f3f5f6] hover:bg-[#0063dc] hover:text-white text-[#212124] px-3 py-1.5 rounded-[3px] border border-[#e5e5e5] hover:border-[#0063dc] transition-colors"
                  >
                    Ngaji Bulanan
                  </Link>
                  <Link
                    href="/proyek-akhir"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium bg-[#f3f5f6] hover:bg-[#0063dc] hover:text-white text-[#212124] px-3 py-1.5 rounded-[3px] border border-[#e5e5e5] hover:border-[#0063dc] transition-colors"
                  >
                    Nihai Show
                  </Link>
                </div>
              </div>

              {/* Aksi Bawah */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#e5e5e5]">
                <a
                  href="https://www.instagram.com/nastepca.24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-[#d6d6d6] hover:border-[#212124] bg-white text-[#212124] font-medium py-2.5 px-3 rounded-[3px] transition-colors text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                  @nastepca.24
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-[#0063dc] text-white font-semibold py-2.5 px-3 rounded-[3px] hover:bg-[#0052b8] active:scale-[0.98] transition-all text-xs cursor-pointer"
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