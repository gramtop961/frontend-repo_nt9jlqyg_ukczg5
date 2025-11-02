import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Let’s build something great</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            I’m currently seeking full‑time roles (SDE/Full‑Stack). Open to internships and freelance collaborations as well. Drop a message and I’ll get back soon.
          </p>
          <div className="mt-8">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-base transition-colors hover:bg-gray-900"
            >
              <Mail className="h-5 w-5" />
              you@example.com
            </a>
          </div>
        </motion.div>
        <p className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
