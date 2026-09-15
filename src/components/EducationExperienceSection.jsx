"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  CheckCircle2,
  Sparkles,
  Calendar,
  Building2,
} from "lucide-react";

export default function EducationExperienceSection() {
  return (
    <section
      id="education"
      className="bg-[#f8fafc] text-gray-900 dark:bg-[#0d0f12] dark:text-white py-24 px-6 sm:px-8 selection:bg-amber-500 selection:text-black relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Sparkles className="w-3 h-3" />
            <span>04. EDUCATION &amp; EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            My Journey &amp; <span className="text-amber-600 dark:text-amber-500">Milestones</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg">
            Academic background, independent development experience, and verified technical training.
          </p>
        </motion.div>

        {/* 2-Column Grid: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 space-y-8 pl-6">
              {/* Education Item 1 */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-amber-500 border-4 border-[#f8fafc] dark:border-[#0d0f12] shadow-sm transition-transform group-hover:scale-125"></span>

                <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-gray-800/80 dark:bg-gray-900/40 hover:border-amber-500/50 hover:shadow-amber-500/5 dark:hover:border-amber-500/40 transition-all duration-300 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Bachelor of Social Science
                    </h4>
                    <span className="px-3 py-1 rounded-full border border-amber-600/30 bg-amber-500/15 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400 font-mono text-xs font-semibold">
                      Expected 2027
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
                    <span>Dhaka Central University, Bangladesh</span>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-1">
                    Combining foundational social analysis with software engineering logic,
                    strengthening problem-solving and user-centric system thinking.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 space-y-8 pl-6">
              {/* Open to Opportunities Green Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-4 border-[#f8fafc] dark:border-[#0d0f12] shadow-sm"></span>

                <div className="p-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 shadow-md space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <h4 className="text-base font-bold text-emerald-700 dark:text-emerald-400">
                      Open to Opportunities
                    </h4>
                  </div>
                  <p className="text-xs text-emerald-900 dark:text-emerald-200/80 leading-relaxed">
                    Seeking full-time or remote MERN Stack / Frontend Developer roles. Ready to
                    build scalable UIs, own features end-to-end, and deliver production-grade
                    web applications.
                  </p>
                </div>
              </motion.div>

              {/* Experience Item */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group"
              >
                <span className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-amber-500 border-4 border-[#f8fafc] dark:border-[#0d0f12] shadow-sm transition-transform group-hover:scale-125"></span>

                <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-gray-800/80 dark:bg-gray-900/40 hover:border-amber-500/50 hover:shadow-amber-500/5 dark:hover:border-amber-500/40 transition-all duration-300 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Full Stack Developer (Independent)
                    </h4>
                    <span className="px-3 py-1 rounded-full border border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 font-mono text-xs font-semibold">
                      2024 - Present
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                      <span>
                        Architected full-stack platforms using Next.js 15, React, Node.js,
                        Express, and MongoDB.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                      <span>
                        Integrated robust authentication (BetterAuth, JWT), Stripe payment
                        processing, and role-based UI access controls.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                      <span>
                        Engineered accessible, high-performance designs with Tailwind CSS,
                        DaisyUI, HeroUI, Framer Motion, and GSAP.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Certifications & Courses Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 pt-8 border-t border-gray-200 dark:border-gray-900"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Certifications &amp; Training
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cert 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 sm:p-7 rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-800/80 dark:bg-gray-900/40 hover:border-amber-500/50 hover:shadow-amber-500/5 dark:hover:border-amber-500/40 transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Complete Web Development Course
                </h4>
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Progress
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Building2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
                <span>Programming Hero — Batch 13</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-1">
                Rigorous full-stack curriculum covering JavaScript, React, Next.js, Node.js,
                MongoDB, authentication, and real-world project deployments.
              </p>
            </motion.div>

            {/* Cert 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 sm:p-7 rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-800/80 dark:bg-gray-900/40 hover:border-amber-500/50 hover:shadow-amber-500/5 dark:hover:border-amber-500/40 transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Next Level Foundation Program
                </h4>
                <span className="px-3 py-1 rounded-full border border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 font-mono text-xs font-semibold">
                  Level 2
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Building2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
                <span>Job Placement Bootcamp — Programming Hero</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-1">
                Advanced industry-aligned training focused on scalable architecture, clean code
                standards, interview preparation, and production readiness.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
