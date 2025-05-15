"use client";

import { FaLaptopCode } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Expertise() {
  return (
    <section className="relative py-20 bg-transparent text-white">
      <h2 className="text-5xl font-extrabold text-center mb-16 relative z-10">My Expertise</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-white/60 rounded-none overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/30 relative z-10">
        {/* Software Development */}
        <div className="flex flex-col items-center p-8 border-none">
          <div className="w-full flex flex-col items-center mb-2">
            <div className="w-16 h-2 mb-2 bg-pink-500" />
            <FaLaptopCode className="text-5xl mb-4" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">
            Software<br />Development
          </h3>
          <pre className="bg-transparent text-left text-gray-200 text-base mt-2 whitespace-pre-wrap font-mono border-l-2 border-gray-400 pl-4">
Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
          </pre>
        </div>
        {/* Frontend Dev */}
        <div className="flex flex-col items-center p-8 border-none">
          <div className="w-full flex flex-col items-center mb-2">
            <div className="w-16 h-2 mb-2 bg-blue-500" />
            <FaReact className="text-5xl mb-4" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">
            Frontend Dev<br />React, NextJS
          </h3>
          <pre className="bg-transparent text-left text-gray-200 text-base mt-2 whitespace-pre-wrap font-mono border-l-2 border-gray-400 pl-4">
Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
          </pre>
        </div>
        {/* Figma Designer */}
        <div className="flex flex-col items-center p-8 border-none">
          <div className="w-full flex flex-col items-center mb-2">
            <div className="w-16 h-2 mb-2 bg-orange-500" />
            <SiFigma className="text-5xl mb-4" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">
            Figma Designer<br />UI/UX & Prototyping
          </h3>
          <pre className="bg-transparent text-left text-gray-200 text-base mt-2 whitespace-pre-wrap font-mono border-l-2 border-gray-400 pl-4">
Skilled in designing modern, user-centric interfaces and interactive prototypes using Figma for web and mobile apps.
          </pre>
        </div>
      </div>
    </section>
  );
} 