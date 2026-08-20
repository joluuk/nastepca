export function Footer() { 
  return (
    <footer className="w-full bg-slate-900 text-white border-t border-slate-800 mt-20 reveal-element opacity-0 translate-y-16 transition-all duration-1000 ease-out">
        <div className="h-3 w-full" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000, #000 15px, #facc15 15px, #facc15 30px)' }}></div>
        <div className="py-8 px-6 md:px-10 flex flex-col sm:flex-row justify-center items-center gap-3 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="font-semibold tracking-wider text-sm uppercase text-gray-300">
            Site is <span className="text-yellow-400 font-bold">Under Construction</span>
          </p>
        </div>
      </footer>

  );
}