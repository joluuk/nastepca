export function PhotoSimpleCard({ imgSrc, height }) {
  return (
    <div className={`reveal-element opacity-0 translate-y-16 transition-all duration-700 ease-out relative ${height} rounded-md overflow-hidden group`}>
      <img src={imgSrc} alt="Foto" className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
    </div>
  );
}