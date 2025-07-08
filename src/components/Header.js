import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 z-10 fade-in">
      <div className="flex items-center gap-3">
        <Image 
          src="/logo.png" 
          alt="Auto Pro Logo" 
          width={50} 
          height={50} 
          className="bg-yellow-400 p-1 rounded logo-container"
        />
        <h1 className="text-xl md:text-2xl font-bold leading-tight tracking-wide">
          AUTO PRO<br />
          <span className="text-lg md:text-xl">TOWING & RECOVERY</span>
        </h1>
      </div>
      <a
        href="tel:+13522177658"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg glow-blink"
      >
        CALL NOW
      </a>
    </header>
  );
}