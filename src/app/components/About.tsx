"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const experiences = [
  {
    date: 'Aug 2023 – Present',
    title: 'Full-Stack Developer',
    org: 'Freelance & Personal Projects',
    orgType: 'Freelance',
    location: 'Remote',
    color: 'bg-fuchsia-500',
    description: 'Building modern web apps and portfolios for clients and personal growth.'
  },
  {
    date: 'Jun 2024 – Present',
    title: 'Problem Solver - DSA Enthusiast',
    org: 'GeeksforGeeks',
    orgType: 'Community',
    location: 'Remote',
    color: 'bg-blue-500',
    description: 'Solving DSA problems and contributing to the coding community.'
  },
  {
    date: 'Jul 2024',
    title: 'Computer Vision & Machine Learning Intern',
    org: 'NIST University, Berhampur',
    orgType: 'Internship',
    location: 'Berhampur, Odisha, India',
    color: 'bg-cyan-500',
    description: 'Worked on AI/ML projects and research in computer vision.'
  },
];

export default function About() {
  return (
    <div className="w-full min-h-screen">
      {/* About Intro Section */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-center px-4 py-16 min-h-[75vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-600"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10">
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/2">
            <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-300 via-pink-400 to-orange-400 shadow-xl w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
              <Image
                src="/images/image1.png"
                alt="Mohammad Ehsan"
                width={260}
                height={260}
                className="object-cover rounded-full w-52 h-52 md:w-68 md:h-68"
                priority
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Hi there! I&apos;m <span className="text-fuchsia-500">Ehsan</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              I&apos;m Mohammad Ehsan, a passionate web developer dedicated to building impactful and user-friendly websites. I specialize in React, Next.js, and modern frontend technologies, and I&apos;m constantly exploring new tools and techniques to integrate into web solutions.<br /><br />
              When I&apos;m not coding, I&apos;m brainstorming new ideas, learning emerging tech, or helping others grow. I believe in consistency, curiosity, and leveling up every day.<br /><br />
              I wake up each day excited to build something meaningful and work towards becoming a top developer!
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a href="https://www.linkedin.com/in/mdehsan1611/" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition text-2xl"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/itsEhsan16" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition text-2xl"><i className="fab fa-github"></i></a>
              <a href="mailto:mdehsan2737@gmail.com" className="hover:text-fuchsia-400 transition text-2xl"><i className="fas fa-envelope"></i></a>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <span className="px-6 py-2 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition">I Lift</span>
              <span className="px-6 py-2 rounded-full border-2 border-fuchsia-500 text-fuchsia-300 font-semibold text-lg hover:bg-fuchsia-500 hover:text-white transition">I Code</span>
              <span className="px-6 py-2 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-black transition">I Vibin&apos;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative w-full py-20 px-4 bg-black flex flex-col items-center">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold mb-2 text-white">
          <span className="text-gray-200 font-light text-lg block mb-1 tracking-widest">THE EXPERIENCE</span>
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Experiences</span>
        </h3>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-9 gap-y-12 mt-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`md:col-span-4 md:col-start-${idx % 2 === 0 ? 1 : 6} flex flex-col items-${idx % 2 === 0 ? 'end' : 'start'} md:items-${idx % 2 === 0 ? 'end' : 'start'} relative`}> 
              <div className="w-full md:w-[90%] bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-4 h-4 rounded-full ${exp.color} shadow-lg border-2 border-white`}></span>
                  <span className="text-xs text-gray-400">{exp.date}</span>
                </div>
                <div className="text-xl font-bold text-white mb-1">{exp.title}</div>
                <span className={`inline-block px-3 py-1 text-xs rounded-full font-semibold mb-1 ${exp.color} text-white`}>{exp.orgType}</span>
                <span className="ml-2 text-gray-300 text-xs">{exp.org}</span>
                <span className="ml-2 text-gray-400 text-xs">{exp.location}</span>
                <div className="text-gray-200 mt-2 text-sm">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 