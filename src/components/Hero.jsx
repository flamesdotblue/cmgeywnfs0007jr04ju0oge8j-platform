import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(60%_40%_at_80%_20%,rgba(217,70,239,0.12),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Futuristic 3D Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 max-w-2xl text-balance text-white/70 sm:text-lg"
        >
          Explore interactive experiences blending art, code, and motion. Built with React, Spline 3D, and modern web tech.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/20 hover:brightness-110 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent" />
    </div>
  );
}
