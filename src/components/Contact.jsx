import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(147,51,234,0.08),transparent_60%)]" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-8 sm:p-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Let’s collaborate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          Open for freelance, collaborations, and full-time opportunities. Reach out and let’s build something remarkable.
        </motion.p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <a
            href="mailto:hello@yourdomain.dev"
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 hover:bg-white/10 transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Mail size={18} />
            </span>
            <div>
              <div className="text-sm font-semibold">Email</div>
              <div className="text-xs text-white/60">hello@yourdomain.dev</div>
            </div>
          </a>

          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 hover:bg-white/10 transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Github size={18} />
            </span>
            <div>
              <div className="text-sm font-semibold">GitHub</div>
              <div className="text-xs text-white/60">@yourhandle</div>
            </div>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white/90">Status</div>
            <div className="mt-1 text-xs text-emerald-300">• Available for new projects</div>
            <div className="mt-2 text-xs text-white/60">Based in Earth // Remote-friendly</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} NovaPort. Built with React, Spline, and Tailwind.</p>
          <a href="#home" className="text-xs text-white/60 hover:text-white transition">Back to top ↑</a>
        </div>
      </div>
    </div>
  );
}
