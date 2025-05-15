'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'SQL', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git & GitHub', level: 80 }
  ];

  return (
    <section className="relative py-20 bg-transparent text-white">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-cyan-400">{skill.name}</span>
                <span className="text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <motion.div
                  className="bg-cyan-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}