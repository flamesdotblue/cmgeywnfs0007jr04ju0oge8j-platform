import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 to-indigo-500 text-white shadow-md">
                <Rocket size={18} />
              </span>
              <span className="font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors">NovaPort</span>
            </a>
            <div className="hidden gap-6 md:flex">
              <a href="#home" className="text-sm text-white/70 hover:text-white transition-colors">Home</a>
              <a href="#projects" className="text-sm text-white/70 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <a href="#contact" className="text-sm rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors">Get in touch</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
