import Link from "next/link";
import Image from "next/image";

export function PhotoLinkCard({ href, imgSrc, title, height, priority = false }) {
  return (
    <Link href={href} className={`reveal-element opacity-0 translate-y-16 transition-all duration-700 ease-out group relative block ${height} rounded-md overflow-hidden cursor-zoom-in bg-gray-200`}>
      <Image
        src={imgSrc}
        alt={title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h4 className="text-2xl font-bold text-white mb-1">{title}</h4>
        <p className="text-gray-200 text-sm">Lihat Koleksi &rarr;</p>
      </div>
    </Link>
  );
}