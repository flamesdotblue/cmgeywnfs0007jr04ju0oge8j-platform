import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Navbar />
      <main>
        <section id="home" className="relative">
          <Hero />
        </section>
        <section id="projects" className="relative">
          <Projects />
        </section>
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>
    </div>
  );
}
