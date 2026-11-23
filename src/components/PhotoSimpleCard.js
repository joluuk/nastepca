"use client";

import Image from "next/image";
import { useState } from "react";

export function PhotoSimpleCard({
  imgSrc,
  width = 1600,
  height = 1200,
  title,
  caption,
  onClick,
  priority = false,
}) {
  const [faved, setFaved] = useState(false);
  const label = title || caption || "Foto Nastepca '24";

  return (
    <figure
      onClick={() => onClick && onClick(imgSrc, label)}
      className="reveal-element opacity-0 translate-y-16 transition-all duration-500 ease-out break-inside-avoid mb-2.5 sm:mb-3 relative rounded-[2px] overflow-hidden group cursor-zoom-in bg-[#dfe3e6] shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
    >
      <Image
        src={imgSrc}
        alt={label}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />

      {/* FLICKR HOVER SCRIM & METADATA */}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 pt-14 pb-2.5 px-3 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-white truncate leading-snug">
            {label}
          </p>
          <p className="text-[11px] text-white/75 truncate">
            oleh Nastepca &apos;24
          </p>
        </div>

        <button
          type="button"
          aria-label={faved ? "Hapus dari favorit" : "Tambahkan ke favorit"}
          onClick={(e) => {
            e.stopPropagation();
            setFaved((prev) => !prev);
          }}
          className={`pointer-events-auto p-1.5 rounded-full transition-colors cursor-pointer shrink-0 ${
            faved
              ? "text-[#ff0084] bg-white/15"
              : "text-white/85 hover:text-white hover:bg-white/15"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={faved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      </figcaption>
    </figure>
  );
}