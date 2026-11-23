"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SubNavbar } from "../../components/SubNavbar";
import { Footer } from "../../components/Footer";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=OpiMCCLxRPc";

export default function ProyekAkhirPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(YOUTUBE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      
      {/* 1. NAVBAR */}
      <SubNavbar />

      {/* 2. HERO SECTION SINEMATIK (#1) */}
      <section className="relative w-full min-h-[280px] h-[40vh] sm:h-[46vh] md:h-[54vh] flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden">
        <Image
          src="/koleksi/Screenshot 2026-08-12 092650.png"
          alt="Panggung Nihai Show 2024"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80"></div>
        
        <div className="relative z-10 w-full max-w-3xl text-center">
          <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-1 rounded-full mb-3 sm:mb-4">
            Pagelaran Seni &amp; Budaya &bull; TA 2023/2024
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 md:mb-4">
            Nihai Show 2024
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium max-w-xl mx-auto leading-relaxed">
            Puncak persembahan dan panggung kreasi santri akhir Ma&apos;had Al-Hidayah Basmol.
          </p>
        </div>
      </section>

      {/* 3. PLAYER VIDEO THEATER MODE (#2) */}
      <section className="max-w-4xl mx-auto px-3 sm:px-6 md:px-10 pt-8 sm:pt-12 pb-6">
        <div className="bg-slate-950 rounded-2xl shadow-xl border border-slate-800 overflow-hidden">
          
          {/* Header Bar Player */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3.5 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>Arsip Siaran Langsung</span>
            </div>
            <span className="text-xs text-slate-400">
              Ma&apos;had Al-Hidayah Basmol
            </span>
          </div>

          {/* Video 16:9 */}
          <div className="relative w-full aspect-video bg-black">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/OpiMCCLxRPc" 
              title="LIVE Nihai Show TA 2023/2024 | Ma'had Al Hidayah Basmol" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Info & Tombol Aksi */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 sm:px-6 py-4 bg-slate-900/70">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                LIVE Nihai Show TA 2023/2024
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Dokumentasi penuh &bull; Kualitas HD &bull; Nastepca &apos;24
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-medium text-slate-200 bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 px-3.5 py-2 rounded-lg transition-all cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {copied ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  )}
                </svg>
                <span>{copied ? "Tersalin!" : "Salin Link"}</span>
              </button>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-200 active:scale-95 px-3.5 py-2 rounded-lg transition-all"
              >
                <span>Tonton di YouTube</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. NAVIGASI LINTAS KOLEKSI (#5) */}
      <section className="max-w-4xl mx-auto px-3 sm:px-6 md:px-10 pt-8 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Lihat Koleksi Lainnya
          </h3>
          <Link href="/" className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Semua di Beranda &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/foto-random"
            className="group relative block h-[170px] sm:h-[190px] rounded-xl overflow-hidden bg-gray-200"
          >
            <Image
              src="/koleksi/IMG-20240505-WA0045.jpg"
              alt="Foto Random"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-5">
              <h4 className="text-lg font-bold text-white">Foto Random</h4>
              <p className="text-xs text-gray-200 mt-0.5">Kumpulan momen santai &amp; kebersamaan &rarr;</p>
            </div>
          </Link>

          <Link
            href="/ngaji-bulanan"
            className="group relative block h-[170px] sm:h-[190px] rounded-xl overflow-hidden bg-gray-200"
          >
            <Image
              src="/koleksi/IMG_9807.JPG"
              alt="Ngaji Bulanan"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-5">
              <h4 className="text-lg font-bold text-white">Ngaji Bulanan</h4>
              <p className="text-xs text-gray-200 mt-0.5">Dokumentasi kajian rutin bulanan &rarr;</p>
            </div>
          </Link>
        </div>
      </section>

      {/* TOMBOL INSTAGRAM */}
      <a href="https://www.instagram.com/nastepca.24" target="_blank" rel="noopener noreferrer" aria-label="Instagram Nastepca" className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 bg-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="text-slate-800 md:w-6 md:h-6" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>
      </a>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}