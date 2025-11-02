import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[88vh] min-h-[560px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient + vignette for text legibility (doesn't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.0),_rgba(255,255,255,0.6))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="text-sm md:text-base tracking-wide uppercase text-gray-600 mb-3">Full‑Stack Developer</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
              Building clean, fast, and delightful web experiences
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-700">
              I craft modern, accessible interfaces and robust backends using React, TypeScript, Node.js, and Python. Open to full‑time roles and exciting internships.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-sm md:text-base transition-colors hover:bg-gray-900"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm md:text-base text-gray-900 transition-colors hover:bg-gray-50"
              >
                View projects
              </a>
              <div className="ml-2 flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 transition-colors hover:bg-gray-50"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 transition-colors hover:bg-gray-50"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:you@example.com"
                  aria-label="Email"
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 transition-colors hover:bg-gray-50"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
