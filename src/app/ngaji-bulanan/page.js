"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; 
import { Footer } from "../../components/Footer";
import { SubNavbar } from "../../components/SubNavbar";
import { PhotoSimpleCard } from "../../components/PhotoSimpleCard"; 

export default function NgajiBulananPage() {
  
  // 1. STATE UNTUK LIGHTBOX
  const [lightbox, setLightbox] = useState({ isOpen: false, imgSrc: "" });

  const openLightbox = (imgSrc) => {
    setLightbox({ isOpen: true, imgSrc });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imgSrc: "" });
  };

  // 2. EFEK ANIMASI MUNCUL
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
      
      {/* NAVBAR */}
      <SubNavbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex flex-col justify-center items-center px-6">
        <div className="absolute inset-0 bg-[url('/koleksi/IMG_9807.JPG')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/60"></div> 
        
        <div className="relative z-10 w-full max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ngaji Bulanan
          </h2>
          <p className="text-lg text-gray-200 font-medium max-w-xl mx-auto">
            Dokumentasi momen kajian, kebersamaan, dan pembelajaran rutin kami.
          </p>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section id="koleksi" className="py-12 px-4 md:px-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ================= JALUR KIRI ================= */}
          <div className="flex flex-col gap-6 h-auto md:h-[800px]">
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_9736.JPG" height="h-[280px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_0210.jpg" height="h-[280px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_9756.JPG" height="h-[250px] md:h-auto md:flex-1" />
          </div>

          {/* ================= JALUR TENGAH ================= */}
          <div className="flex flex-col gap-6 h-auto md:h-[830px]">
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_9765.JPG" height="h-[420px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_0422.jpg" height="h-[420px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_9772.JPG" height="h-[250px] md:h-auto md:flex-1" />
          </div>

          {/* ================= JALUR KANAN ================= */}
          <div className="flex flex-col gap-6 h-auto md:h-[800px]">
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_9780.JPG" height="h-[220px]" />
            <PhotoSimpleCard onClick={openLightbox} imgSrc="/koleksi/IMG_9741.JPG" height="h-[250px] md:h-auto md:flex-1" />
          </div>

        </div>
      </section>

      {/* POP-UP LIGHTBOX */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200 cursor-zoom-out"
          onClick={closeLightbox} 
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-rose-500 transition-colors bg-black/50 p-2 rounded-full cursor-pointer"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img 
              src={lightbox.imgSrc} 
              alt="Galeri Fullscreen" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}  

      {/* TOMBOL INSTAGRAM */}
      <a href="https://www.instagram.com/nastepca.24" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-slate-800" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>
      </a>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}