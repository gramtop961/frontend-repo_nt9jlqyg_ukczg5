import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'Full‑stack chat with websockets, auth, and responsive UI.',
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    live: '#',
    repo: '#',
  },
  {
    title: 'E‑commerce Starter',
    description: 'Product catalog, cart, and checkout with clean API layer.',
    tags: ['Vite', 'FastAPI', 'Stripe', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Portfolio CMS',
    description: 'Lightweight CMS to manage projects and blog posts.',
    tags: ['React', 'Express', 'MongoDB', 'JWT'],
    live: '#',
    repo: '#',
  },
];

function ProjectCard({ title, description, tags, live, repo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <div className="flex items-center gap-2">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-50"
            aria-label="Live demo"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-50"
            aria-label="GitHub repository"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-3 text-gray-700">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Selected Projects</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A small collection of work highlighting problem solving, clean code, and user‑first design.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
