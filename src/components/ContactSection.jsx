// "use client";

// import React, { useState } from "react";
// import { Mail, Phone, MessageSquare, MapPin, Copy, Check, Send } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ContactSection() {
//     const [copied, setCopied] = useState(false);
//     const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//     const emailAddress = "mahedi5096@gmail.com";

//     const handleCopyEmail = () => {
//         navigator.clipboard.writeText(emailAddress);
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const url = `mailto:${emailAddress}?subject=${encodeURIComponent("Portfolio Contact from " + formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
//         window.location.href = url;
//     };

//     const fadeUp = {
//         hidden: { opacity: 0, y: 30 },
//         visible: (i = 0) => ({
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
//         }),
//     };

//     return (
//         <section id="contact" className="bg-[#0d0f12] text-white py-20 px-8 selection:bg-amber-500 selection:text-black">
//             <div className="max-w-5xl mx-auto space-y-12">

//                 <motion.div
//                     className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-500"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeUp}
//                 >
//                     <span>06.</span>
//                     <span>Get In Touch</span>
//                 </motion.div>

//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
//                     <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
//                         Lets Work <span className="text-amber-400">Together</span>
//                     </h2>
//                     <p className="mt-3 text-white/50 max-w-xl">Have a project in mind or just want to say hi? My inbox is always open.</p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//                     <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>

//                         <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-start gap-4">
//                             <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
//                                 <Mail className="w-5 h-5" />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                                 <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
//                                 <p className="text-white/80 text-sm truncate">{emailAddress}</p>
//                             </div>
//                             <button onClick={handleCopyEmail} aria-label="Copy email"
//                                 className="ml-2 p-2 rounded-lg border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/10 text-white/50 hover:text-amber-400 transition-all duration-200 shrink-0">
//                                 {copied ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
//                             </button>
//                         </div>

//                         <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-start gap-4">
//                             <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
//                                 <Phone className="w-5 h-5" />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                                 <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Phone</p>
//                                 <p className="text-white/80 text-sm">+880 13084 80504</p>
//                             </div>
//                         </div>

//                         <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-start gap-4">
//                             <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
//                                 <MapPin className="w-5 h-5" />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                                 <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Location</p>
//                                 <p className="text-white/80 text-sm">Dhaka, Bangladesh</p>
//                             </div>
//                         </div>

//                         <div className="flex gap-3 pt-2">
//                             {/* GitHub Link with Inline SVG */}
//                             <a href="https://github.com/Mahedi-5g" target="_blank" rel="noreferrer"
//                                 className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/10 text-white/60 hover:text-amber-400 transition-all duration-200 text-sm font-medium">
//                                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                                     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
//                                 </svg>
//                                 GitHub
//                             </a>
//                             {/* LinkedIn Link with Inline SVG */}
//                             <a href="https://linkedin.com" target="_blank" rel="noreferrer"
//                                 className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/10 text-white/60 hover:text-amber-400 transition-all duration-200 text-sm font-medium">
//                                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                                 </svg>
//                                 LinkedIn
//                             </a>
//                         </div>
//                     </motion.div>

//                     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
//                         <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-5">
//                             <div className="flex items-center gap-2 mb-2">
//                                 <MessageSquare className="w-4 h-4 text-amber-400" />
//                                 <span className="text-sm font-medium text-white/70">Send a message</span>
//                             </div>
//                             <div className="space-y-1.5">
//                                 <label htmlFor="contact-name" className="text-xs text-white/40 uppercase tracking-widest">Name</label>
//                                 <input id="contact-name" type="text" required placeholder="Your full name" value={formData.name}
//                                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all duration-200" />
//                             </div>
//                             <div className="space-y-1.5">
//                                 <label htmlFor="contact-email" className="text-xs text-white/40 uppercase tracking-widest">Email</label>
//                                 <input id="contact-email" type="email" required placeholder="your@email.com" value={formData.email}
//                                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all duration-200" />
//                             </div>
//                             <div className="space-y-1.5">
//                                 <label htmlFor="contact-message" className="text-xs text-white/40 uppercase tracking-widest">Message</label>
//                                 <textarea id="contact-message" required rows={4} placeholder="Tell me about your project..." value={formData.message}
//                                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all duration-200 resize-none" />
//                             </div>
//                             <button type="submit" id="contact-submit"
//                                 className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-sm">
//                                 <Send className="w-4 h-4" />Send Message
//                             </button>
//                         </form>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }