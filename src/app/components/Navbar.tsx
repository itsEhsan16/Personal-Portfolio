"use client";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center justify-between px-6 py-6 absolute top-0 left-0 z-30">
      <a href="/" className="flex items-center">
        <img src="/images/MEK.png" alt="Home Logo" className="w-10 h-10 object-contain" />
      </a>
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 bg-white/10 rounded-full px-8 py-2 backdrop-blur-md border border-white/10 shadow-lg" style={{ minWidth: '420px' }}>
        <a href="/" className="relative text-white font-medium hover:text-purple-400 transition px-2">
          <span className="relative z-10">Home</span>
          {pathname === '/' && (
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-8 h-2 bg-white rounded-full blur-sm opacity-80 animate-pulse" style={{boxShadow: '0 0 16px 4px #a78bfa, 0 0 32px 8px #fff2'}}></span>
          )}
        </a>
        <a href="/projects" className="relative text-white font-medium hover:text-purple-400 transition px-2">
          <span className="relative z-10">Projects</span>
          {pathname === '/projects' && (
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-8 h-2 bg-white rounded-full blur-sm opacity-80 animate-pulse" style={{boxShadow: '0 0 16px 4px #a78bfa, 0 0 32px 8px #fff2'}}></span>
          )}
        </a>
        <a href="/about" className="relative text-white font-medium hover:text-purple-400 transition px-2">
          <span className="relative z-10">About</span>
          {pathname === '/about' && (
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-8 h-2 bg-white rounded-full blur-sm opacity-80 animate-pulse" style={{boxShadow: '0 0 16px 4px #a78bfa, 0 0 32px 8px #fff2'}}></span>
          )}
        </a>
        <a href="/contact" className="relative text-white font-medium hover:text-purple-400 transition px-2">
          <span className="relative z-10">Contact</span>
          {pathname === '/contact' && (
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-8 h-2 bg-white rounded-full blur-sm opacity-80 animate-pulse" style={{boxShadow: '0 0 16px 4px #a78bfa, 0 0 32px 8px #fff2'}}></span>
          )}
        </a>
      </div>
      <button className="md:hidden text-white text-3xl focus:outline-none">
        <span className="material-icons">menu</span>
      </button>
    </nav>
  );
} 