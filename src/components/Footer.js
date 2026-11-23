import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#212124] text-white/75 border-t border-white/10 mt-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-6">
        {/* Baris atas: Navigasi */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 text-[13px]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <Link href="/foto-random" className="hover:text-white transition-colors">
              Foto Random
            </Link>
            <Link href="/ngaji-bulanan" className="hover:text-white transition-colors">
              Ngaji Bulanan
            </Link>
            <Link href="/proyek-akhir" className="hover:text-white transition-colors">
              Nihai Show
            </Link>
            <a
              href="https://www.instagram.com/nastepca.24"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/80"
              aria-hidden="true"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            <span className="font-semibold text-white/90">Galeria</span>
            <span>&bull; Nastepca &apos;24</span>
          </div>
        </div>

        {/* Baris bawah: Status Under Construction */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
            <span className="uppercase tracking-wider font-medium text-white/70">
              Site is <span className="text-amber-400 font-semibold">Under Construction</span>
            </span>
          </div>
          <p>Arsip dokumentasi kebersamaan Nastepca &apos;24.</p>
        </div>
      </div>
    </footer>
  );
}