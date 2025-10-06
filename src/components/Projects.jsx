import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Nebula Visualizer',
    description: 'GPU-accelerated particle fields with post-processing bloom and noise distortion.',
    stack: ['WebGL', 'Three.js', 'PostFX'],
    link: '#',
    repo: '#',
    accent: 'from-fuchsia-600 to-indigo-500',
  },
  {
    title: 'Hologram UI Kit',
    description: 'A set of cyberpunk-inspired UI primitives for rapid prototyping.',
    stack: ['React', 'Tailwind', 'Radix'],
    link: '#',
    repo: '#',
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'Procedural Terrains',
    description: 'Real-time terrain generation with marching cubes and SDF operations.',
    stack: ['Three.js', 'GLSL', 'Vite'],
    link: '#',
    repo: '#',
    accent: 'from-emerald-400 to-teal-600',
  },
];

export default function Projects() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_10%_10%,rgba(217,70,239,0.06),transparent_60%),radial-gradient(40%_30%_at_90%_10%,rgba(99,102,241,0.06),transparent_60%)]" />

      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          A selection of experiments and products exploring the edges of web graphics and interaction.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-10 transition-opacity duration-500 group-hover:opacity-20`} />
              <div className="relative p-6">
                <div className="h-10 w-10 rounded-lg bg-white/10" />
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/20 transition"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/20 transition"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
