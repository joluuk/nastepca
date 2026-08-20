"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* BUNGKUSAN UTAMA (HEADER) - Lebih stabil dari nav */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
        
        {/* BAGIAN ATAS: LOGO & MENU DESKTOP */}
        <div className="flex justify-between items-center p-4 px-6 md:px-10 max-w-[1600px] mx-auto">
          
          <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
            Galeria
          </h1>
          
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
            className="block md:hidden p-2 text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> 
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> 
              )}
            </svg>
          </button>

        </div>

        {/* DROPDOWN MENU HP (Dikeluarkan dari flexbox utama agar tidak hancur) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-t border-gray-100 px-6 py-5 flex flex-col gap-4 font-medium text-slate-600 shadow-md">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-slate-900 block"
            >
              Beranda
            </Link>
            <a 
              href="#koleksi" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-slate-900 block"
            >
              Koleksi
            </a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOpen(true);
              }} 
              className="text-left hover:text-slate-900 block w-full"
            >
              Tentang
            </button>
          </div>
        )}
      </header>

     {/* POP-UP MODAL TENTANG */}
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4" 
          style={{ zIndex: 9999 }} // Ini kuncinya! Dipaksa jadi lapisan paling depan
        >
          
          {/* Background Gelap dengan Efek Blur */}
          <div 
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all"
          ></div>

          {/* Kotak Konten Pop-up */}
          <div 
            className="relative bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 text-center animate-in fade-in zoom-in duration-200"
            style={{ width: '320px', maxWidth: '90vw' }}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tentang Kami</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-5">
              Proyek Ini di dedikasikan untuk rekan-rekan seperjuangan <br/>
              keep in touch dawg!
            </p>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-slate-900 text-white font-medium py-2 rounded-xl hover:bg-slate-800 transition-colors text-xs cursor-pointer"
            >
              Tutup
            </button>
          </div>

        </div>
      )}
    </>
  );
}