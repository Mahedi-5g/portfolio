"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, FolderGit2 } from "lucide-react";

// Zero-dependency Brand Github SVG
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "BloodConnect",
      type: "Full Stack",
      subtitle: "Blood Donation Platform",
      description:
        "Full-stack donation platform featuring authentication, role-based dashboards, and real-time donor matching by blood group, district, and upazila.",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Better Auth",
        "Node.js",
        "MongoDB",
        "Stripe",
      ],
      liveLink: "https://blood-donation-client-bice.vercel.app/",
      githubClient: "https://github.com/Mahedi-5g/blood-connect-client",
      githubServer: "https://github.com/Mahedi-5g/blood-connect-backup-server",
      image:
        "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "MediQueue",
      type: "Full Stack",
      subtitle: "Tutors Booking Platform",
      description:
        "Platform enabling users to browse tutors and manage bookings with real-time dynamic search, filtering, status updates, and cancellation workflows.",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "HeroUI",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
      liveLink: "https://mediqueue-client-alpha.vercel.app/",
      githubClient: "https://github.com/Mahedi-5g/mediQueue-client",
      githubServer: "https://github.com/Mahedi-5g/mediQueue-server",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "QurbaniHat",
      type: "Full Stack",
      subtitle: "Livestock Booking Platform",
      description:
        "Livestock marketplace for browsing and booking animals for Qurbani, built with dynamic data management and responsive, interactive UI components.",
      tags: ["Next.js", "React", "Tailwind CSS", "HeroUI", "Better Auth", "MongoDB"],
      liveLink: "https://qurbani-hat-f25h.vercel.app/",
      githubClient: "https://github.com/Mahedi-5g/qurbani-hat",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#f8fafc] text-gray-900 dark:bg-[#0d0f12] dark:text-white py-24 px-6 sm:px-8 selection:bg-amber-500 selection:text-black relative overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Sparkles className="w-3 h-3" />
            <span>05. PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-amber-600 dark:text-amber-500">Creations</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
            Full-stack applications with live demos, scalable architectures, and public repositories.
          </p>
        </motion.div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-gray-800/80 dark:bg-gray-900/40 overflow-hidden hover:border-amber-500/50 hover:shadow-amber-500/5 dark:hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Overlay Actions */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-200/80 dark:border-gray-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white text-gray-900 hover:text-amber-600 dark:bg-gray-900/90 dark:text-white dark:hover:text-amber-400 border border-gray-200 dark:border-gray-700 transition-colors shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white text-gray-900 hover:text-amber-600 dark:bg-gray-900/90 dark:text-white dark:hover:text-amber-400 border border-gray-200 dark:border-gray-700 transition-colors shadow-lg"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full border border-amber-600/30 bg-amber-500/15 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400 font-mono text-[10px] font-semibold uppercase">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 text-[11px] font-mono font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-[11px] font-mono font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800/60 mt-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors pt-3"
                >
                  View Live Project
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
