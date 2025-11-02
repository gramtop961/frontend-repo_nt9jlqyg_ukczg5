import { motion } from 'framer-motion';
import { Code2, Database, Layers, Terminal } from 'lucide-react';

const skills = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
  },
  {
    title: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'MongoDB'],
  },
  {
    title: 'Systems & Tools',
    icon: Terminal,
    items: ['Git & GitHub', 'Docker', 'CI/CD', 'Linux', 'Testing (Jest, Pytest)'],
  },
  {
    title: 'Architecture',
    icon: Layers,
    items: ['Design Systems', 'Component-Driven UI', 'Microservices (basics)', 'Cloud (AWS/GCP basics)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Skills & Tools</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A focused toolkit for delivering reliable, high‑performance web apps end‑to‑end.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, icon: Icon, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {items.map((s) => (
                  <li key={s} className="text-sm">{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
