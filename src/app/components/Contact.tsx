'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('@react-three/fiber').then((mod) => mod.Canvas), { ssr: false });
const OrbitControls = dynamic(() => import('@react-three/drei').then((mod) => mod.OrbitControls), { ssr: false });
const Stars = dynamic(() => import('@react-three/drei').then((mod) => mod.Stars), { ssr: false });

export default function Contact() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#1a103d] to-[#1a237e]">
      {/* 3D Space Scene */}
      <div className="absolute inset-0">
        <Canvas>
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <i className="fas fa-map-marker-alt w-8 text-cyan-400"></i>
                <span>Berhampur, Odisha, India</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="fas fa-envelope w-8 text-cyan-400"></i>
                <a href="mailto:mdehsan2737@gmail.com" className="hover:text-cyan-400 transition">
                  mdehsan2737@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="fas fa-phone w-8 text-cyan-400"></i>
                <span>+91 7978730677</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mdehsan1611/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition text-2xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/itsEhsan16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition text-2xl"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://leetcode.com/mdehsan2737/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition text-2xl"
                >
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}