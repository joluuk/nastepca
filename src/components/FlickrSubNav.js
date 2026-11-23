"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Photostream" },
  { href: "/foto-random", label: "Foto Random" },
  { href: "/ngaji-bulanan", label: "Ngaji Bulanan" },
  { href: "/proyek-akhir", label: "Nihai Show" },
];

export function FlickrSubNav({ countLabel }) {
  const pathname = usePathname();

  return (
    <div className="sticky top-14 z-40 w-full bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 md:px-10 flex items-center justify-between gap-4">
        <nav
          aria-label="Navigasi koleksi"
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar"
        >
          {TABS.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`relative py-3.5 px-3 sm:px-4 text-[13px] sm:text-[14px] whitespace-nowrap transition-colors ${
                  active
                    ? "text-[#212124] font-semibold"
                    : "text-[#666] hover:text-[#212124] font-medium"
                }`}
              >
                {tab.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0063dc]" />
                )}
              </Link>
            );
          })}
        </nav>

        {countLabel && (
          <span className="hidden sm:inline-block text-xs font-medium text-[#767676] whitespace-nowrap shrink-0">
            {countLabel}
          </span>
        )}
      </div>
    </div>
  );
}
