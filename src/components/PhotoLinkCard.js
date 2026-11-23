import Link from "next/link";
import Image from "next/image";

export function PhotoLinkCard({ href, imgSrc, title, height, priority = false }) {
  return (
    <Link href={href} className={`reveal-element opacity-0 translate-y-16 transition-all duration-500 ease-out group relative block ${height} rounded-md overflow-hidden cursor-zoom-in bg-gray-200`}>
      <Image
        src={imgSrc}
        alt={title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent md:bg-none md:bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
        <h4 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">{title}</h4>
        <p className="text-gray-200 text-xs sm:text-sm">Lihat Koleksi &rarr;</p>
      </div>
    </Link>
  );
}