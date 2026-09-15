"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Heart,
  Smartphone,
  Users,
  Coffee,
  MapPin,
  Layers,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  const highlightCards = [
    {
      icon: <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-500" />,
      title: "Clean Code",
      description:
        "Readable structure, maintainable components, and standard REST API integrations with robust error handling.",
    },
    {
      icon: <Heart className="w-5 h-5 text-amber-600 dark:text-amber-500" />,
      title: "UI That Feels Right",
      description:
        "Responsive layouts, Framer Motion animations, and accessibility-first interfaces crafted with precision.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-amber-600 dark:text-amber-500" />,
      title: "Always Learning",
      description:
        "Sharpening skills through production-ready projects, modern AI workflows, and bleeding-edge full-stack tech.",
    },
    {
      icon: <Users className="w-5 h-5 text-amber-600 dark:text-amber-500" />,
      title: "Team Player",
      description:
        "Effective communication, agile adaptability, and collaborative problem-solving across cross-functional teams.",
    },
  ];

  const infoItems = [
    {
      icon: <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />,
      label: "BASED IN",
      value: "Dhaka, Bangladesh",
    },
    {
      icon: <Layers className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />,
      label: "FOCUS",
      value: "MERN Stack • React • Next.js",
    },
    {
      icon: <GraduationCap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />,
      label: "BACKGROUND",
      value: "BSS Candidate + Web Dev",
    },
    {
      icon: <Briefcase className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />,
      label: "OPEN TO",
      value: "Full-time • Remote • Freelance",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#f8fafc] text-gray-900 dark:bg-[#0d0f12] dark:text-white py-24 px-6 sm:px-8 selection:bg-amber-500 selection:text-black relative overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background blur elements */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Tag & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Sparkles className="w-3 h-3" />
            <span>01. ABOUT ME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            A bit about <span className="text-amber-600 dark:text-amber-500">myself</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Story & Info Badges */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-gray-600 dark:text-gray-400 text-base leading-relaxed"
          >
            <p>
              I&apos;m{" "}
              <strong className="text-gray-900 dark:text-white font-semibold">
                Mahedi Hasan
              </strong>{" "}
              — a motivated MERN Stack Developer based in Dhaka, Bangladesh, who turns ideas
              into responsive, accessible, and dynamic full-stack web applications.
            </p>

            <p>
              Pursuing my Bachelor of Social Science at Dhaka Central University combined with
              practical web development training has taught me to solve complex problems
              logically. Building for the web gives that skill a practical outlet: full-stack
              applications with dynamic search, role-based dashboards, and secure authentication.
            </p>

            <p>
              My toolkit includes{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                React, Next.js 15, Node.js, Express.js, MongoDB, TypeScript, and Tailwind CSS
              </span>
              . I actively keep projects public on GitHub and deploy them via Vercel — because
              shipping real applications is how I grow fastest.
            </p>

            <p>
              I&apos;m open to software development roles and collaborations where I can
              contribute to full-stack products, solve real-world problems, and continuously
              level up my tech stack.
            </p>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {infoItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800/80 dark:bg-gray-900/40 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {item.icon}
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-gray-900 dark:text-white font-semibold text-sm">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer Tagline */}
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-gray-500 dark:text-gray-400">
              <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-500" />
              <span>Fueled by code &amp; continuous learning</span>
            </div>
          </motion.div>

          {/* Right Column: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlightCards.map((card, index) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-800/80 dark:bg-gray-900/40 hover:border-amber-500/50 hover:shadow-amber-500/5 dark:hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 w-fit group-hover:scale-110 group-hover:border-amber-500/30 transition-all duration-300 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
