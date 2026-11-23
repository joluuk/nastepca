"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Arrow = ({ dir }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
  </svg>
);

export function Lightbox({ images, index, onClose, onChange }) {
  const touchStart = useRef(null);
  const total = images.length;
  const isOpen = index !== null && index >= 0;

  const go = (step) => onChange((index + step + total) % total);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index]);

  if (!isOpen) return null;

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(diff) > 50) go(diff < 0 ? 1 : -1);
  };

  const btn = "fixed z-10 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tampilan foto"
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-3 sm:p-6 md:p-10 cursor-zoom-out"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button aria-label="Tutup foto" className={`${btn} top-4 right-4 p-2.5`} onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {total > 1 && (
        <>
          <button aria-label="Foto sebelumnya" className={`${btn} left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 hidden sm:block`} onClick={(e) => { e.stopPropagation(); go(-1); }}><Arrow dir="left" /></button>
          <button aria-label="Foto berikutnya" className={`${btn} right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 hidden sm:block`} onClick={(e) => { e.stopPropagation(); go(1); }}><Arrow dir="right" /></button>
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-xs bg-black/50 px-3 py-1 rounded-full">
            {index + 1} / {total}
          </div>
        </>
      )}

      <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <Image
          key={images[index]}
          src={images[index]}
          alt={`Foto ${index + 1} dari ${total}`}
          width={1600}
          height={1200}
          sizes="95vw"
          className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-lg shadow-2xl cursor-default"
        />
      </div>
    </div>
  );
}
