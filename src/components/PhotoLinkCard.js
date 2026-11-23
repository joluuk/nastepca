import Link from "next/link";
import Image from "next/image";

export function PhotoLinkCard({
  href,
  imgSrc,
  title,
  width = 1600,
  height = 1200,
  countLabel = "Lihat Koleksi",
  tag = "ALBUM",
  priority = false,
}) {
  return (
    <div className="reveal-element opacity-0 translate-y-16 transition-all duration-500 ease-out break-inside-avoid mb-2.5 sm:mb-3 pt-2">
      {/* EFEK TUMPUKAN ALBUM KHAS FLICKR */}
      <div className="mx-3 h-[3px] bg-[#c7ccd1] rounded-t-[1px]" aria-hidden="true" />
      <div className="mx-1.5 h-[3px] bg-[#aeb5bc] rounded-t-[1px]" aria-hidden="true" />

      <Link
        href={href}
        className="group relative block rounded-[2px] overflow-hidden bg-[#212124] shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
      >
        <Image
          src={imgSrc}
          alt={title}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 group-hover:from-black/90 transition-colors duration-300 flex flex-col justify-between p-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-[#212124]/80 backdrop-blur-xs px-2 py-0.5 rounded-[2px] border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0063dc]" />
              {tag}
            </span>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-[#78b7ff] transition-colors">
              {title}
            </h4>
            <div className="flex items-center justify-between mt-1 text-xs text-white/80">
              <span>{countLabel}</span>
              <span className="font-medium group-hover:translate-x-0.5 transition-transform">
                Buka &rarr;
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}