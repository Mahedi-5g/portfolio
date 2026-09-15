// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Layout,
//   Database,
//   Zap,
//   Rocket,
//   Check,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesSection() {
//   const [activeTab, setActiveTab] = useState(0);

//   const services = [
//     {
//       id: 0,
//       icon: <Layout className="w-5 h-5 text-amber-600 dark:text-amber-500" />,
//       title: "Frontend UI Development",
//       shortDesc: "Modern, responsive interfaces with React & Next.js",
//       badge: "User Interface",
//       deliverables: [
//         "Pixel-conscious layouts with Tailwind CSS, DaisyUI, & HeroUI",
//         "Modern Next.js 15 (App Router) structure with TypeScript",
//         "Responsive, accessible, and SEO-friendly web design patterns",
//         "Dynamic client state management & Form handling (React Hook Form)",
//       ],
//     },
//     {
//       id: 1,
//       icon: <Database className="w-5 h-5 text-amber-600 dark:text-amber-500" />,
//       title: "Full-stack Web Apps",
//       shortDesc: "Auth, APIs, dynamic data, & database design",
//       badge: "Full Stack",
//       deliverables: [
//         "MERN Stack architecture (MongoDB, Express.js, React, Node.js)",
//         "Secure authentication (BetterAuth, JWT) & Protected Routes",
//         "RESTful API design, database schemas (Mongoose, PostgreSQL)",
//         "Role-based UI dashboards, payment integrations (Stripe), & search filtering",
//       ],
//     },
//     {
//       id: 2,
//       icon: <Zap className="w-5 h-5 text-amber-600 dark:text-amber-500" />,
//       title: "Motion & Polish",
//       shortDesc: "Subtle animations that elevate user experience",
//       badge: "Interactive UI",
//       deliverables: [
//         "Smooth page transitions & micro-interactions with Framer Motion",
//         "Interactive animations using GSAP & Lenis smooth scrolling",
//         "Engaging 3D visuals using React Three Fiber basics",
//         "Recharts integration for interactive data visualizations",
//       ],
//     },
//     {
//       id: 3,
//       icon: <Rocket className="w-5 h-5 text-amber-600 dark:text-amber-500" />,
//       title: "Ship & Maintain",
//       shortDesc: "Clean repos, Vercel deploys, & structured code",
//       badge: "Deployment & Git",
//       deliverables: [
//         "Deployment and production setup via Vercel, Netlify, & Render",
//         "Clean, maintainable codebases managed via Git & GitHub workflows",
//         "Figma-to-code conversions with strict design fidelity",
//         "AI-assisted debugging, optimization, & thorough project documentation",
//       ],
//     },
//   ];

//   const current = services[activeTab];

//   return (
//     <section
//       id="services"
//       className="bg-[#f8fafc] text-gray-900 dark:bg-[#0d0f12] dark:text-white py-24 px-6 sm:px-8 selection:bg-amber-500 selection:text-black relative overflow-hidden transition-colors duration-300"
//     >
//       {/* Background Ambient Glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
//       <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

//       <div className="max-w-7xl mx-auto space-y-12 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center space-y-3"
//         >
//           <div className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
//             <Sparkles className="w-3 h-3" />
//             <span>02. SERVICES</span>
//           </div>
//           <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
//             How I can <span className="text-amber-600 dark:text-amber-500">help</span>
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
//             Select a service to see what I typically deliver. Click around — it&apos;s interactive.
//           </p>
//         </motion.div>

//         {/* Interactive Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
//           {/* Left Side: Navigation Tabs */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-5 flex flex-col gap-3.5 justify-center"
//           >
//             {services.map((item, idx) => {
//               const isActive = activeTab === idx;
//               return (
//                 <motion.button
//                   key={item.id}
//                   whileHover={{ x: 4 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setActiveTab(idx)}
//                   className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden ${
//                     isActive
//                       ? "border-amber-500/60 bg-white dark:bg-amber-500/10 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30"
//                       : "border-gray-200 bg-white/70 hover:border-gray-300 hover:bg-white dark:border-gray-800/80 dark:bg-gray-900/30 dark:hover:border-gray-700 dark:hover:bg-gray-900/60"
//                   }`}
//                 >
//                   {/* Left active indicator bar */}
//                   {isActive && (
//                     <motion.div
//                       layoutId="activeTabIndicator"
//                       className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-r"
//                     />
//                   )}

//                   <div
//                     className={`p-2.5 rounded-xl border transition-colors shrink-0 ${
//                       isActive
//                         ? "border-amber-500/40 bg-amber-500/15"
//                         : "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
//                     }`}
//                   >
//                     {item.icon}
//                   </div>

//                   <div className="space-y-1">
//                     <h3
//                       className={`font-semibold text-base transition-colors ${
//                         isActive
//                           ? "text-amber-600 dark:text-amber-400"
//                           : "text-gray-900 dark:text-white"
//                       }`}
//                     >
//                       {item.title}
//                     </h3>
//                     <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
//                       {item.shortDesc}
//                     </p>
//                   </div>
//                 </motion.button>
//               );
//             })}
//           </motion.div>

//           {/* Right Side: Animated Detail Display Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-7 p-6 sm:p-9 rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-800/80 dark:bg-gray-900/40 flex flex-col justify-between min-h-[420px] backdrop-blur-sm relative overflow-hidden"
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={current.id}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -15 }}
//                 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
//                 className="space-y-6 flex-1 flex flex-col justify-between"
//               >
//                 <div className="space-y-6">
//                   {/* Service Header */}
//                   <div className="flex flex-wrap items-center justify-between gap-4">
//                     <div className="flex items-center gap-4">
//                       <div className="p-3.5 rounded-2xl border border-amber-500/30 bg-amber-500/10 shadow-sm">
//                         {current.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                           {current.title}
//                         </h3>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           {current.shortDesc}
//                         </p>
//                       </div>
//                     </div>

//                     <span className="text-xs font-mono px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 font-medium">
//                       {current.badge}
//                     </span>
//                   </div>

//                   <div className="h-[1px] bg-gray-200 dark:bg-gray-800/80 w-full"></div>

//                   {/* Deliverable Bullet Points */}
//                   <div className="space-y-3.5">
//                     <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 block">
//                       What I Deliver:
//                     </span>
//                     {current.deliverables.map((item, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: index * 0.08 }}
//                         className="flex items-start gap-3.5 group/item"
//                       >
//                         <div className="p-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-black transition-colors">
//                           <Check className="w-3.5 h-3.5" />
//                         </div>
//                         <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
//                           {item}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <div className="pt-8 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap items-center justify-between gap-4">
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Ready to build your next product?
//                   </span>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Link
//                       href="#contact"
//                       className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95"
//                     >
//                       Let&apos;s work together
//                       <ArrowRight className="w-4 h-4" />
//                     </Link>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
