// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import {
//   Download,
//   FolderKanban,
//   Sun,
//   Moon,
//   Menu,
//   X,
//   Sparkles,
// } from "lucide-react";
// import { useTheme } from "@/context/ThemeContext";

// // Social Brand SVGs
// function GithubIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//       <path
//         fillRule="evenodd"
//         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }

// function LinkedinIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//       <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
//     </svg>
//   );
// }

// // Tech Stack Brand SVGs
// function ReactIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
//       <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
//       <g stroke="#61DAFB" strokeWidth="1" fill="none">
//         <ellipse rx="11" ry="4.2" />
//         <ellipse rx="11" ry="4.2" transform="rotate(60)" />
//         <ellipse rx="11" ry="4.2" transform="rotate(120)" />
//       </g>
//     </svg>
//   );
// }

// function NextjsIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.067l-6.074-8.082v8.082H10V6.933h1.848l6.074 8.082V6.933H19.5v10.134h-1.68z" />
//     </svg>
//   );
// }

// function NodejsIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#5FA04E">
//       <path d="M12 0a1.8 1.8 0 0 0-.9.24l-8.6 5A1.8 1.8 0 0 0 1.6 6.8v10.4a1.8 1.8 0 0 0 .9 1.56l8.6 5a1.8 1.8 0 0 0 1.8 0l8.6-5a1.8 1.8 0 0 0 .9-1.56V6.8a1.8 1.8 0 0 0-.9-1.56l-8.6-5A1.8 1.8 0 0 0 12 0zm-.9 2.5a.9.9 0 0 1 .9 0l7.8 4.5a.9.9 0 0 1 .45.78v9a.9.9 0 0 1-.45.78l-7.8 4.5a.9.9 0 0 1-.9 0l-7.8-4.5a.9.9 0 0 1-.45-.78v-9a.9.9 0 0 1 .45-.78z" />
//     </svg>
//   );
// }

// function ExpressIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 7h7l-7 10h8" />
//       <path d="M14 7l7 10" />
//       <path d="M21 7l-7 10" />
//     </svg>
//   );
// }

// function MongoIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#47A248">
//       <path d="M17.193 9.555c-1.264-5.38-4.225-7.39-4.805-7.794a.798.798 0 0 0-.776 0c-.58.404-3.54 2.413-4.805 7.794-1.42 6.035 1.542 10.74 4.887 12.37.194.095.412.143.63.143.218 0 .436-.048.63-.143 3.345-1.63 6.307-6.335 4.887-12.37zm-5.193 10.66v-7.854c0-.31-.25-.56-.56-.56s-.56.25-.56.56v7.854c-2.457-1.397-4.47-5.068-3.32-9.957.994-4.222 3.125-6.09 4.16-6.858v16.815z" />
//     </svg>
//   );
// }

// function TypeScriptIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <rect width="24" height="24" rx="4" fill="#3178C6" />
//       <path d="M6 9h6v2H9.8v7H8.2v-7H6V9zm8 2.5c0-.8.7-1.5 1.5-1.5h3v2h-2.7v1h1.5c1 0 1.7.7 1.7 1.6v1.8c0 .9-.7 1.6-1.7 1.6h-3.3v-2h2.8v-.8h-1.5c-1 0-1.7-.7-1.7-1.6v-2.1z" fill="#FFF" />
//     </svg>
//   );
// }

// function TailwindIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
//       <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
//     </svg>
//   );
// }

// function GitIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#F05032">
//       <path d="M23.546 10.93L13.067.452a1.505 1.505 0 0 0-2.128 0L8.845 2.548l3.023 3.023a1.782 1.782 0 0 1 2.247 2.261l3.418 3.418a1.78 1.78 0 1 1-1.06 1.033l-3.213-3.213v5.204a1.782 1.782 0 1 1-1.5 0V8.75a1.78 1.78 0 0 1-.96-1.564 1.776 1.776 0 0 1 .442-1.163L8.223 3.001.453 10.77a1.505 1.505 0 0 0 0 2.128L10.933 23.38a1.505 1.505 0 0 0 2.128 0l10.485-10.322a1.506 1.506 0 0 0 0-2.128z" />
//     </svg>
//   );
// }

// function VercelIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M24 22.525H0l12-21.05 12 21.05z" />
//     </svg>
//   );
// }

// function GsapIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <rect width="24" height="24" rx="5" fill="#0AE448" />
//       <path d="M12 5.5a6.5 6.5 0 1 0 6.5 6.5H12V5.5z" fill="#0D0F12" />
//       <circle cx="15.5" cy="8.5" r="1.5" fill="#0D0F12" />
//     </svg>
//   );
// }

// function FramerMotionIcon({ className = "w-4 h-4" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
//     </svg>
//   );
// }

// // Framer Motion Animation Variants
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.1,
//     },
//   },
// };

// const fadeUpItem = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// const navAnimation = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function HeroSection() {
//   const { toggleTheme, isDark, mounted } = useTheme();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [imgSrc, setImgSrc] = useState("/profile.jpeg");

//   // GSAP Animation Refs
//   const avatarWrapperRef = useRef(null);
//   const glowRingRef = useRef(null);
//   const marqueeTrackRef = useRef(null);
//   const marqueeTweenRef = useRef(null);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Skills", href: "#skills" },
//     { name: "Education", href: "#education" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const techStack = [
//     { name: "React", icon: ReactIcon },
//     { name: "Next.js", icon: NextjsIcon },
//     { name: "Node.js", icon: NodejsIcon },
//     { name: "Express.js", icon: ExpressIcon },
//     { name: "MongoDB", icon: MongoIcon },
//     { name: "TypeScript", icon: TypeScriptIcon },
//     { name: "Tailwind CSS", icon: TailwindIcon },
//     { name: "Git", icon: GitIcon },
//     { name: "Vercel", icon: VercelIcon },
//     { name: "GSAP", icon: GsapIcon },
//     { name: "Framer Motion", icon: FramerMotionIcon },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Profile Photo Vertical Floating Loop
//       if (avatarWrapperRef.current) {
//         gsap.to(avatarWrapperRef.current, {
//           y: -10,
//           duration: 3,
//           repeat: -1,
//           yoyo: true,
//           ease: "power1.inOut",
//         });
//       }

//       // 2. Ambient Glow Pulse Loop
//       if (glowRingRef.current) {
//         gsap.to(glowRingRef.current, {
//           scale: 1.08,
//           opacity: 0.8,
//           duration: 2.5,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }

//       // 3. Infinite Tech Stack Marquee (Smooth, gentle pace)
//       if (marqueeTrackRef.current) {
//         marqueeTweenRef.current = gsap.to(marqueeTrackRef.current, {
//           xPercent: -50,
//           repeat: -1,
//           duration: 50,
//           ease: "none",
//         });
//       }
//     });

//     return () => ctx.revert();
//   }, []);

//   const handleMarqueeEnter = () => {
//     if (marqueeTweenRef.current) marqueeTweenRef.current.pause();
//   };

//   const handleMarqueeLeave = () => {
//     if (marqueeTweenRef.current) marqueeTweenRef.current.play();
//   };

//   return (
//     <div
//       id="home"
//       className="min-h-screen bg-[#f8fafc] text-gray-900 dark:bg-[#0d0f12] dark:text-white font-sans flex flex-col justify-between selection:bg-amber-500 selection:text-black relative overflow-hidden transition-colors duration-300"
//     >
//       {/* Background Decorative Ambient Glows */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/15 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
//       <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-600/10 dark:bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

//       {/* Navigation Bar */}
//       <motion.header
//         variants={navAnimation}
//         initial="hidden"
//         animate="visible"
//         className="w-full border-b border-gray-200/80 bg-[#f8fafc]/80 dark:border-gray-800/60 dark:bg-[#0d0f12]/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300"
//       >
//         <nav className="flex items-center justify-between px-6 sm:px-8 py-5 max-w-7xl mx-auto w-full">
//           <Link
//             href="#home"
//             className="text-xl font-bold tracking-wider text-amber-600 dark:text-amber-500 font-mono hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
//           >
//             &lt;MH /&gt;
//           </Link>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center gap-8 text-sm font-medium">
//             {navLinks.map((link, idx) => (
//               <motion.div
//                 key={link.name}
//                 whileHover={{ y: -2 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <Link
//                   href={link.href}
//                   className={`transition-colors ${idx === 0
//                     ? "text-amber-600 dark:text-amber-500 font-semibold"
//                     : "text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
//                     }`}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             {/* Theme Toggle Button */}
//             <motion.button
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.92 }}
//               onClick={toggleTheme}
//               aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
//               className="p-2.5 rounded-full border border-gray-300 bg-white/90 text-gray-700 hover:border-amber-500/50 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:text-white dark:hover:border-amber-500/50 dark:hover:bg-gray-800/50 transition-all shadow-sm cursor-pointer"
//             >
//               {mounted ? (
//                 isDark ? (
//                   <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0" />
//                 ) : (
//                   <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 rotate-0" />
//                 )
//               ) : (
//                 <Sun className="w-4 h-4 text-amber-400" />
//               )}
//             </motion.button>

//             {/* Mobile Menu Toggle Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Toggle navigation menu"
//               className="md:hidden p-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-800 dark:bg-transparent dark:text-gray-400 dark:hover:text-white"
//             >
//               {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </motion.button>
//           </div>
//         </nav>

//         {/* Mobile Dropdown Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.25 }}
//               className="md:hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-[#0d0f12] px-6 py-4 space-y-3 overflow-hidden transition-colors"
//             >
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="block text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 py-1.5 text-sm font-medium"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>

//       {/* Main Hero Container */}
//       <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 lg:py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto z-10">
//         {/* Left Column: Staggered Hero Content */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="lg:col-span-7 space-y-6"
//         >
//           {/* Availability Badge */}
//           <motion.div
//             variants={fadeUpItem}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-600/30 bg-amber-500/15 text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400 text-xs font-medium backdrop-blur-sm shadow-sm"
//           >
//             <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
//             Available for work
//           </motion.div>

//           {/* Heading & Subtitle */}
//           <motion.div variants={fadeUpItem} className="space-y-3">
//             <h2 className="text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase">
//               HI, I&apos;M
//             </h2>
//             <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
//               <span className="text-amber-600 dark:text-amber-500">Mahedi</span>{" "}
//               <span className="text-gray-900 dark:text-white">Hasan</span>
//             </h1>
//             <div className="flex items-center gap-3 pt-1">
//               <span className="w-8 h-[2px] bg-amber-600 dark:bg-amber-500"></span>
//               <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold">
//                 Full Stack Developer (MERN)
//               </p>
//             </div>
//           </motion.div>

//           {/* Bio Description */}
//           <motion.p
//             variants={fadeUpItem}
//             className="text-gray-600 dark:text-gray-400 max-w-xl text-base leading-relaxed"
//           >
//             Motivated MERN Stack Developer skilled in building responsive, scalable
//             full-stack applications with React, Next.js, Node.js, and MongoDB.
//           </motion.p>

//           {/* Action Buttons */}
//           <motion.div
//             variants={fadeUpItem}
//             className="flex flex-wrap items-center gap-4 pt-4"
//           >
//             <motion.a
//               href="/Mahedi%20Hasan%20developer%20resume.pdf"
//               download="Mahedi_Hasan_Developer_Resume.pdf"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold flex items-center gap-2 transition-shadow shadow-lg shadow-amber-500/20 cursor-pointer"
//             >
//               <Download className="w-4 h-4" /> Download CV
//             </motion.a>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 href="#projects"
//                 className="px-6 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 hover:border-gray-400 dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-700 font-semibold flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
//               >
//                 <FolderKanban className="w-4 h-4 text-gray-500 dark:text-gray-400" /> View Projects
//               </Link>
//             </motion.div>
//           </motion.div>

//         {/* Social Links */}
//         <motion.div
//           variants={fadeUpItem}
//           className="flex items-center gap-4 pt-6 text-gray-500 dark:text-gray-400"
//         >
//           <span className="text-xs uppercase tracking-wider font-medium">
//             Find me on
//           </span>
//           <motion.a
//             href="https://github.com/Mahedi-5g"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="GitHub profile"
//             whileHover={{ scale: 1.15, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="p-2.5 rounded-lg border border-gray-300 bg-white hover:text-amber-600 hover:border-amber-500/50 text-gray-700 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:text-amber-500 dark:hover:border-amber-500/40 transition-colors shadow-sm"
//           >
//             <GithubIcon className="w-4 h-4" />
//           </motion.a>

//           <motion.a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn profile"
//             whileHover={{ scale: 1.15, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="p-2.5 rounded-lg border border-gray-300 bg-white hover:text-amber-600 hover:border-amber-500/50 text-gray-700 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:text-amber-500 dark:hover:border-amber-500/40 transition-colors shadow-sm"
//           >
//             <LinkedinIcon className="w-4 h-4" />
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       {/* Right Column: Profile Image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.88 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
//         className="lg:col-span-5 flex flex-col items-center justify-center"
//       >
//         {/* Floating Avatar Wrapper controlled by GSAP */}
//         <div ref={avatarWrapperRef} className="relative group">
//           {/* Ambient Glow Ring */}
//           <div
//             ref={glowRingRef}
//             className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500/25 to-amber-500/5 dark:from-amber-500/30 dark:to-amber-500/10 blur-xl group-hover:opacity-100 transition duration-1000"
//           ></div>

//           {/* Avatar Frame */}
//           <motion.div
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900/90 p-3 flex items-center justify-center cursor-pointer transition-colors duration-300"
//           >
//             <div className="w-full h-full rounded-full overflow-hidden border border-amber-500/40 dark:border-amber-500/30 relative bg-gray-100 dark:bg-[#13161c]">
//               <Image
//                 src={imgSrc}
//                 alt="Mahedi Hasan - Full Stack Developer"
//                 fill
//                 sizes="(max-width: 640px) 280px, 320px"
//                 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                 priority
//                 onError={() => setImgSrc("/avatar.svg")}
//               />
//             </div>

//             {/* Tag Badge */}
//             <motion.div
//               whileHover={{ scale: 1.06 }}
//               className="absolute bottom-4 bg-amber-500 text-black text-xs font-bold px-3.5 py-1 rounded-full shadow-lg shadow-amber-500/30 flex items-center gap-1.5"
//             >
//               <Sparkles className="w-3 h-3 fill-black" />
//               <span>React • Next.js • MERN</span>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Quick Metrics */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="flex items-center gap-6 sm:gap-8 mt-8 text-center bg-white/80 border border-gray-200 text-gray-800 dark:bg-gray-900/40 dark:border-gray-800/80 dark:text-gray-100 px-6 py-3 rounded-2xl backdrop-blur-sm shadow-xl transition-colors duration-300"
//         >
//           <div>
//             <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-500">3+</h3>
//             <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Shipped apps</p>
//           </div>
//           <div className="w-[1px] h-8 bg-gray-200 dark:bg-gray-800"></div>
//           <div>
//             <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-500">3</h3>
//             <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Live demos</p>
//           </div>
//           <div className="w-[1px] h-8 bg-gray-200 dark:bg-gray-800"></div>
//           <div>
//             <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-500">12+</h3>
//             <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Technologies</p>
//           </div>
//         </motion.div>
//       </motion.div>
//     </main>

//       {/* Bottom Tech Marquee with Brand Icons (GSAP Infinite Loop) */}
//       <footer
//         className="w-full border-t border-gray-200 bg-gray-100/90 dark:border-gray-900 dark:bg-[#0a0b0e] py-4 z-10 overflow-hidden transition-colors duration-300"
//         onMouseEnter={handleMarqueeEnter}
//         onMouseLeave={handleMarqueeLeave}
//       >
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center gap-6">
//           <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider whitespace-nowrap shrink-0 hidden sm:inline">
//             Tech Stack:
//           </span>

//           <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//             <div
//               ref={marqueeTrackRef}
//               className="flex items-center gap-4 sm:gap-6 whitespace-nowrap w-max"
//             >
//               {[...techStack, ...techStack, ...techStack].map((tech, index) => {
//                 const IconComponent = tech.icon;
//                 return (
//                   <span
//                     key={`${tech.name}-${index}`}
//                     className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-amber-500/50 hover:text-amber-600 hover:bg-amber-50/50 dark:bg-gray-900/70 dark:border-gray-800/60 dark:text-gray-300 dark:hover:border-amber-500/40 dark:hover:text-amber-400 dark:hover:bg-gray-800/60 transition-all text-xs font-medium cursor-default shadow-sm group/pill"
//                   >
//                     <span className="w-4 h-4 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/pill:scale-110">
//                       <IconComponent className="w-4 h-4" />
//                     </span>
//                     <span>{tech.name}</span>
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
