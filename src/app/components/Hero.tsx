'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const Canvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), { ssr: false });
const OrbitControls = dynamic(() => import('@react-three/drei').then((mod) => mod.OrbitControls), { ssr: false });
const Stars = dynamic(() => import('@react-three/drei').then((mod) => mod.Stars), { ssr: false });

export default function Hero() {
  const pathname = usePathname();

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-0 bg-gradient-to-b from-[#1a103d] to-[#1a237e]">
      {/* Navbar */}
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

      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-600"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      {/* 3D Space Scene */}
      <div className="absolute inset-0">
        <Canvas>
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen pt-32 pb-12 px-4 text-center">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="bg-[#2d1457] text-purple-300 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md">
            <span className="bg-purple-600 text-white rounded-full px-2 py-0.5 text-xs mr-2">New</span>
            Project Launched
            <span className="ml-2 text-lg">→</span>
          </span>
        </div>
        {/* Headline */}
        <motion.h1
          className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Turning thoughts into <br />
          <span className="text-purple-300">beautiful <span className="italic text-gray-300">web stories</span></span>
        </motion.h1>
        {/* Subheadline */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white text-lg">Hello, I'm</span>
          <span className="bg-purple-600 text-white px-3 py-1 rounded-lg font-semibold text-lg">Mohammad Ehsan</span>
        </motion.div>
        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A passionate full-stack developer crafting beautiful and functional web experiences. 
          Specializing in modern web technologies and creative solutions.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-purple-500/25"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition backdrop-blur-sm border border-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/90 to-transparent rounded-t-[50%] z-30" />
    </section>
  );
}