import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#212124] text-white/75 border-t border-white/10 mt-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-6">
        {/* Baris atas: Navigasi ala Flickr */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 text-[13px]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-white transition-colors">
              Explore
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
            <span className="inline-flex items-center gap-1" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-[#0063dc]" />
              <span className="w-2 h-2 rounded-full bg-[#ff0084]" />
            </span>
            <span className="font-semibold text-white/90 lowercase">galeria</span>
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