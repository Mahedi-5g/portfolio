// "use client";

// import React from "react";
// import { Mail, ArrowUp } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Footer() {
//   const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } }),
//   };
//   return (
//     <footer className="bg-[#0d0f12] text-white border-t border-white/5 py-12 px-8">
//       <div className="max-w-7xl mx-auto flex flex-col gap-8">
//         <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-white/60">
//           {["Home", "About", "Services", "Skills", "Projects", "Contact"].map((item, i, arr) => (
//             <React.Fragment key={item}>
//               <a href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors duration-200">{item}</a>
//               {i < arr.length - 1 && <span className="text-white/20">•</span>}
//             </React.Fragment>
//           ))}
//         </div>
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div className="text-center sm:text-left space-y-1">
//             <p className="text-sm font-medium text-white/80">Designed &amp; built by <span className="text-amber-400 font-semibold">Mahedi Hasan</span></p>
//           </div>
//           <div className="flex items-center gap-2.5">
//             <a href="https://github.com/Mahedi-5g" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/10 text-white/60 hover:text-amber-400 transition-all duration-200">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/10 text-white/60 hover:text-amber-400 transition-all duration-200">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
//             </a>
//             <a href="mailto:mahedi5096@gmail.com" aria-label="Email" className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/10 text-white/60 hover:text-amber-400 transition-all duration-200"><Mail className="w-4 h-4" /></a>
//             <button onClick={scrollToTop} aria-label="Scroll to top" className="p-3 rounded-xl border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/10 text-white/60 hover:text-amber-400 transition-all duration-200"><ArrowUp className="w-4 h-4" /></button>
//           </div>
//         </div>
//         <motion.p
//           className="text-center text-white/20 text-xs border-t border-white/5 pt-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           custom={1}
//         >
//           {`© ${new Date().getFullYear()} Mahedi Hasan — All rights reserved`}
//         </motion.p>
//       </div>
//     </footer>
//   );
// }