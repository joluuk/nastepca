"use client";

import Image from "next/image";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { FlickrSubNav } from "../components/FlickrSubNav";
import { Footer } from "../components/Footer";
import { PhotoLinkCard } from "../components/PhotoLinkCard";
import { PhotoSimpleCard } from "../components/PhotoSimpleCard";
import { Lightbox } from "../components/Lightbox";
import { useReveal } from "../components/useReveal";
import { ALBUMS, HOME_PHOTOS } from "../data/photos";

// Distribusi 3 kolom yang seimbang tinggi alaminya (campuran portrait & landscape)
const HOME_COLUMNS = [
  [HOME_PHOTOS[0], HOME_PHOTOS[2], HOME_PHOTOS[3], HOME_PHOTOS[9]],
  [HOME_PHOTOS[4], HOME_PHOTOS[1], HOME_PHOTOS[7]],
  [HOME_PHOTOS[6], HOME_PHOTOS[5], HOME_PHOTOS[8]],
];

export default function Home() {
  const [lbIndex, setLbIndex] = useState(null);

  const openLightbox = (imgSrc) => {
    const idx = HOME_PHOTOS.findIndex((p) => p.src === imgSrc);
    setLbIndex(idx >= 0 ? idx : 0);
  };
  const closeLightbox = () => setLbIndex(null);

  useReveal();

  return (
    <main className="min-h-screen bg-[#f3f5f6] text-[#212124] relative">
      <Navbar />

      {/* COVER HERO */}
      <section className="relative w-full min-h-[340px] h-[48vh] sm:h-[54vh] md:h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden bg-[#212124]">
        <Image
          src="/koleksi/IMG_9807.JPG"
          alt="Sampul Galeria Nastepca '24"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/75" />

        <div className="relative z-10 w-full max-w-2xl text-center reveal-element opacity-0 translate-y-16 transition-all duration-700 ease-out">
          <h1 className="text-3xl sm:text-5xl md:text-[52px] font-bold text-white tracking-tight leading-[1.1] mb-3 sm:mb-4">
            Temukan kenanganmu.
          </h1>
          <p className="text-sm sm:text-lg text-white/90 font-normal max-w-xl mx-auto leading-relaxed mb-6 sm:mb-7">
            Arsip dokumentasi kebersamaan Nastepca &apos;24 &mdash; dari momen santai, ngaji bulanan, hingga panggung Nihai Show.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#koleksi"
              className="bg-white hover:bg-[#f3f5f6] text-[#212124] font-semibold text-sm sm:text-base px-6 py-2.5 sm:py-3 rounded-[3px] shadow-md transition-all active:scale-[0.98]"
            >
              Jelajahi Photostream
            </a>
          </div>
        </div>

        <div className="absolute bottom-3 right-4 sm:right-8 z-10 text-[11px] sm:text-xs text-white/70">
          Foto sampul oleh <span className="text-white font-medium">Nastepca &apos;24</span>
        </div>
      </section>

      {/* SUB-NAV TAB BAR */}
      <FlickrSubNav countLabel={`${HOME_PHOTOS.length} foto • ${ALBUMS.length} album`} />

      <section id="koleksi" className="py-5 sm:py-7 px-3 sm:px-6 md:px-10 max-w-[1600px] mx-auto space-y-3">
        {/* SEMUA ALBUM DI ATAS (SEJAJAR 3 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {ALBUMS.map((album, idx) => (
            <PhotoLinkCard
              key={album.href}
              href={album.href}
              imgSrc={album.imgSrc}
              width={album.width}
              height={album.height}
              title={album.title}
              countLabel={album.countLabel}
              tag={album.tag}
              priority={idx === 0}
            />
          ))}
        </div>

        {/* MASONRY 3 KOLOM ADAPTIF DENGAN GARIS BAWAH RATA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
          {HOME_COLUMNS.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3">
              {col.map((photo, itemIdx) => (
                <PhotoSimpleCard
                  key={photo.src}
                  imgSrc={photo.src}
                  width={photo.width}
                  height={photo.height}
                  title={photo.title}
                  onClick={openLightbox}
                  priority={itemIdx === 0}
                  fillColumn={itemIdx === col.length - 1}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <Lightbox images={HOME_PHOTOS} index={lbIndex} onClose={closeLightbox} onChange={setLbIndex} />

      {/* TOMBOL INSTAGRAM */}
      <a
        href="https://www.instagram.com/nastepca.24"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Nastepca"
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 bg-[#212124] text-white p-3 rounded-full shadow-lg hover:bg-[#0063dc] hover:scale-105 active:scale-95 transition-all duration-200 border border-white/15"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="md:w-5 md:h-5" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>
      </a>

      <Footer />
    </main>
  );
}