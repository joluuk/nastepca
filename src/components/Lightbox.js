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

  const current = images[index];
  const src = typeof current === "string" ? current : current.src;
  const title = typeof current === "string" ? `Foto ${index + 1}` : current.title || `Foto ${index + 1}`;
  const width = typeof current === "string" ? 1600 : current.width || 1600;
  const height = typeof current === "string" ? 1200 : current.height || 1200;

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(diff) > 50) go(diff < 0 ? 1 : -1);
  };

  const btn =
    "fixed z-10 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-xs rounded-full cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tampilan foto"
      className="fixed inset-0 z-[100] bg-[#141416]/96 flex flex-col items-center justify-center p-3 sm:p-6 md:p-10 cursor-zoom-out"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top close button */}
      <button aria-label="Tutup foto" className={`${btn} top-4 right-4 p-2.5`} onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {total > 1 && (
        <>
          <button
            aria-label="Foto sebelumnya"
            className={`${btn} left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 hidden sm:block`}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            <Arrow dir="left" />
          </button>
          <button
            aria-label="Foto berikutnya"
            className={`${btn} right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 hidden sm:block`}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            <Arrow dir="right" />
          </button>
        </>
      )}

      <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <Image
          key={src}
          src={src}
          alt={title}
          width={width}
          height={height}
          sizes="95vw"
          className="max-w-full max-h-[78vh] w-auto h-auto object-contain rounded-[2px] shadow-2xl cursor-default"
        />

        {/* Flickr Theater Info Bar */}
        <div className="mt-4 w-full max-w-2xl flex items-center justify-between gap-4 px-2 text-white/90">
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">{title}</p>
            <p className="text-xs text-white/60">oleh Nastepca &apos;24</p>
          </div>
          {total > 1 && (
            <span className="text-xs font-medium text-white/75 bg-white/10 px-2.5 py-1 rounded-[2px] shrink-0">
              {index + 1} / {total}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
