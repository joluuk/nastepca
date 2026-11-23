"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PhotoLinkCard } from "../components/PhotoLinkCard";
import { PhotoSimpleCard } from "../components/PhotoSimpleCard";

export default function Home() {
  
  // 1. STATE UNTUK LIGHTBOX (Hanya menyimpan info gambar saja)
  const [lightbox, setLightbox] = useState({ isOpen: false, imgSrc: "" });

  // 2. STATE UNTUK GIMMICK SEARCH BOX
  const [searchText, setSearchText] = useState("");
  const [searchGimmick, setSearchGimmick] = useState("");
  const [searchAttempts, setSearchAttempts] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  const gimmickMessages = [
    "Bro seriusan nyari? Kan udah dibilang ini gak fungsi 😭",
    "Hasil ditemukan: 0 (soalnya search bar ini cuma pajangan 💀)",
    "Masih nyoba juga? Scroll aja ke bawah bang, gak jauh kok 🙏",
    "Error 404: Niat bikin fitur search belum ketemu 🚧",
    "Udah dawg, nyerah aja. Klik Random, Ngaji, atau Show di bawah tuh 👇",
  ];

  const triggerShake = () => {
    setIsShaking(false);
    setTimeout(() => setIsShaking(true), 10);
    setTimeout(() => setIsShaking(false), 400);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchText(val);
    if (val.trim().length === 0) {
      setSearchGimmick("");
    } else if (val.trim().length === 1 && !searchGimmick) {
      setSearchGimmick("Eh beneran diketik... ini gak fungsi loh dawg 😭");
    } else if (val.trim().length >= 5 && searchAttempts === 0) {
      setSearchGimmick(`Nyari "${val.trim()}"? Percuma bro, ini cuma hiasan biar kayak Unsplash 💀`);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    triggerShake();
    if (!searchText.trim()) {
      setSearchGimmick("Kosong aja udah gak fungsi, apalagi diisi 😭");
      return;
    }
    const nextMsg = gimmickMessages[searchAttempts % gimmickMessages.length];
    setSearchGimmick(nextMsg);
    setSearchAttempts((prev) => prev + 1);
  };

  const openLightbox = (imgSrc) => {
    setLightbox({ isOpen: true, imgSrc });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imgSrc: "" });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-16");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    const hiddenElements = document.querySelectorAll(".reveal-element");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">

      <Navbar />

      <section className="relative w-full min-h-[380px] h-[55vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 py-10">
        <div className="absolute inset-0 bg-[url('/koleksi/foto1.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 w-full max-w-3xl text-center md:text-left reveal-element opacity-0 translate-y-16 transition-all duration-1000 ease-out">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Galeria</h2>
          
          <form
            onSubmit={handleSearchSubmit}
            className={`flex items-center bg-white rounded-lg overflow-hidden p-1 pl-3 sm:pl-4 shadow-lg w-full ${isShaking ? "animate-shake ring-2 ring-yellow-400" : ""}`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="This ain't working dawg"
              className="w-full py-2.5 sm:py-3 text-sm sm:text-base text-slate-800 outline-none placeholder-gray-500 bg-transparent"
            />
            {searchText && (
              <button
                type="button"
                aria-label="Hapus teks"
                onClick={() => {
                  setSearchText("");
                  setSearchGimmick("Nah gitu dong, hapus aja percuma soalnya 😌");
                }}
                className="text-gray-400 hover:text-gray-600 px-2 py-1 text-sm cursor-pointer"
              >
                &times;
              </button>
            )}
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 active:scale-95 text-white text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-md transition-all shrink-0 cursor-pointer"
            >
              Cari
            </button>
          </form>

          {/* PESAN GIMMICK SEARCH */}
          {searchGimmick && (
            <div className="mt-2.5 inline-flex items-center gap-2 bg-black/70 backdrop-blur-sm border border-white/15 text-yellow-300 text-xs sm:text-sm px-3.5 py-2 rounded-lg text-left max-w-full">
              <span>{searchGimmick}</span>
            </div>
          )}

          <p className="text-gray-300 text-xs sm:text-sm mt-3 md:text-left text-center">
            <Link href="/foto-random" className="text-white cursor-pointer hover:underline">Random</Link>,{" "}
            <Link href="/ngaji-bulanan" className="text-white cursor-pointer hover:underline">Ngaji</Link>,{" "}
            <Link href="/proyek-akhir" className="text-white cursor-pointer hover:underline">Show</Link>
          </p>
        </div>
      </section>

      <section id="koleksi" className="py-8 md:py-12 px-3 sm:px-6 md:px-10 max-w-[1600px] mx-auto">
        
        {/* TAMPILAN KHUSUS HP */}
        <div className="flex flex-col gap-4 md:hidden mb-4">
          <PhotoLinkCard href="/foto-random" imgSrc="/koleksi/IMG-20240505-WA0045.jpg" title="Foto Random" height="h-[200px] sm:h-[240px]" priority />
          <PhotoLinkCard href="/ngaji-bulanan" imgSrc="/koleksi/IMG_9807.JPG" title="Ngaji Bulanan" height="h-[200px] sm:h-[240px]" />
          <PhotoLinkCard href="/proyek-akhir" imgSrc="/koleksi/Screenshot 2026-08-12 092650.png" title="Proyek Akhir" height="h-[200px] sm:h-[240px]" />
        </div>

        {/* GRID MASONRY UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          <div className="flex flex-col gap-4 md:gap-6 h-auto md:h-[1500px]">
            <div className="hidden md:block w-full h-[280px]">
              <PhotoLinkCard href="/foto-random" imgSrc="/koleksi/IMG-20240505-WA0045.jpg" title="Foto Random" height="h-full" priority />
            </div>
            
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG-20240507-WA0739.jpg" height="h-[210px] md:h-[200px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG-20240507-WA0086.jpg" height="h-[220px] md:h-[240px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_9570.JPG" height="h-[220px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/20240505124615_IMG_8469.JPG" height="h-[220px] sm:h-[250px] md:h-auto md:flex-1" />
          </div>

          <div className="flex flex-col gap-4 md:gap-6 h-auto md:h-[1500px]">
            <div className="hidden md:block w-full h-[420px]">
              <PhotoLinkCard href="/ngaji-bulanan" imgSrc="/koleksi/IMG_9807.JPG" title="Ngaji Bulanan" height="h-full" priority />
            </div>

            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_7648 (1).JPG" height="h-[220px] sm:h-[250px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG-20240402-WA0027.jpg" height="h-[230px] sm:h-[260px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG-20240508-WA0138.jpg" height="h-[220px] sm:h-[250px] md:h-auto md:flex-1" />
          </div>

          <div className="flex flex-col gap-4 md:gap-6 h-auto md:h-[1500px]">
            <div className="hidden md:block w-full h-[240px]">
              <PhotoLinkCard href="/proyek-akhir" imgSrc="/koleksi/Screenshot 2026-08-12 092650.png" title="Proyek Akhir" height="h-full" priority />
            </div>

            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_9496.JPG" height="h-[250px] sm:h-[320px] md:h-[350px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_7670 (1).JPG" height="h-[220px] sm:h-[250px] md:h-auto md:flex-1" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG-20240507-WA0123.jpg" height="h-[220px] sm:h-[250px] md:h-auto md:flex-1" />
          </div>

        </div>
      </section>

      {/* POP-UP LIGHTBOX (Ramah layar Android & desktop) */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-3 sm:p-6 md:p-10 cursor-zoom-out"
          onClick={closeLightbox} 
        >
          {/* Tombol Tutup (X) selalu terjangkau di layar HP */}
          <button 
            aria-label="Tutup foto"
            className="fixed top-4 right-4 z-10 text-white hover:text-rose-400 transition-colors bg-white/15 hover:bg-white/25 backdrop-blur-sm p-2.5 rounded-full cursor-pointer"
            onClick={closeLightbox}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center">
            {/* Foto Utama Saja */}
            <Image 
              src={lightbox.imgSrc} 
              alt="Galeri Fullscreen" 
              width={1600}
              height={1200}
              sizes="95vw"
              className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}

      {/* TOMBOL INSTAGRAM */}
      <a href="https://www.instagram.com/nastepca.24" target="_blank" rel="noopener noreferrer" aria-label="Instagram Nastepca" className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 bg-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="text-slate-800 md:w-6 md:h-6" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>
      </a>

      <Footer />

    </main>
  );
}