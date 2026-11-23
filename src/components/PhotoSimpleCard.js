import Image from "next/image";

export function PhotoSimpleCard({ imgSrc, height, caption, onClick, priority = false }) {
  return (
    <div 
      // Tambahan perintah agar bisa diklik dan mengirim data foto
      onClick={() => onClick && onClick(imgSrc, caption)}
      // Tambahan 'cursor-zoom-in' agar kursor berubah saat diarahkan ke foto
      className={`reveal-element opacity-0 translate-y-16 transition-all duration-700 ease-out relative ${height} rounded-md overflow-hidden group cursor-zoom-in bg-gray-200`}
    >
      <Image 
        src={imgSrc} 
        alt={caption || "Foto"} 
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 33vw"
        // Gaya visual 100% kembali ke aslimu
        className="object-cover hover:opacity-90 transition-opacity" 
      />
    </div>
  );
}