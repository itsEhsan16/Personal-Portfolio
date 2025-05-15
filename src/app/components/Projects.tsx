'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Hindi Character Recognition Tool',
    description: 'A machine learning model that recognizes handwritten Hindi characters with high accuracy. Built using TensorFlow and Python.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
    image: '/images/hindi-char.png',
    link: 'https://github.com/yourusername/hindi-char-recognition'
  },
  {
    title: 'Lazzez Food Book',
    description: 'A full-stack food delivery application with real-time order tracking and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    image: '/images/lazzez.png',
    link: 'https://github.com/yourusername/lazzez-food'
  },
  {
    title: 'Task Management Application',
    description: 'A modern task management tool with drag-and-drop functionality and team collaboration features.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    image: '/images/task-app.png',
    link: 'https://github.com/yourusername/task-manager'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition"
                >
                  View Project
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}