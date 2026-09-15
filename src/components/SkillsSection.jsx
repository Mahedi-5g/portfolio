// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Monitor,
//   Server,
//   Wrench,
//   BookOpen,
//   Brain,
//   Sparkles,
//   Puzzle,
//   LineChart,
//   MessageSquare,
//   Users,
//   Zap,
//   RefreshCw,
// } from "lucide-react";

// // Official & Concept Vector Brand Icons
// function HtmlIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
//       <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 5.3H5.1l.4 4.5h12.8l-.5 5.5-5.8 1.9-5.8-1.9-.3-3.2h3.4l.2 1.5 2.5.8 2.5-.8.3-2.7H5.9l-.9-10h14.5l-.4 4.4z" />
//     </svg>
//   );
// }

// function CssIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
//       <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 5.3H5.1l.4 4.5h12.8l-.5 5.5-5.8 1.9-5.8-1.9-.3-3.2h3.4l.2 1.5 2.5.8 2.5-.8.3-2.7H5.9l-.9-10h14.5l-.4 4.4z" />
//     </svg>
//   );
// }

// function JsIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E">
//       <rect width="24" height="24" rx="3" fill="#F7DF1E" />
//       <path d="M6 8h3v8H7.5v-1.5H6V8zm6.5 0h3.5v2.5h-2v1.5h1.8v2H14v2h-1.5V8zm4 0h1.8v5.5c0 1.2-.8 2-2 2h-1.5V14h1.5v-6z" fill="#000" />
//     </svg>
//   );
// }

// function ReactIcon({ className = "w-3.5 h-3.5" }) {
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

// function NextjsIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.067l-6.074-8.082v8.082H10V6.933h1.848l6.074 8.082V6.933H19.5v10.134h-1.68z" />
//     </svg>
//   );
// }

// function TypeScriptIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <rect width="24" height="24" rx="4" fill="#3178C6" />
//       <path d="M6 9h6v2H9.8v7H8.2v-7H6V9zm8 2.5c0-.8.7-1.5 1.5-1.5h3v2h-2.7v1h1.5c1 0 1.7.7 1.7 1.6v1.8c0 .9-.7 1.6-1.7 1.6h-3.3v-2h2.8v-.8h-1.5c-1 0-1.7-.7-1.7-1.6v-2.1z" fill="#FFF" />
//     </svg>
//   );
// }

// function TailwindIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
//       <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
//     </svg>
//   );
// }

// function DaisyUiIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#1AD1A5">
//       <circle cx="12" cy="12" r="9" />
//       <circle cx="12" cy="12" r="3" fill="#FFF" />
//     </svg>
//   );
// }

// function HeroUiIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//     </svg>
//   );
// }

// function FramerMotionIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
//     </svg>
//   );
// }

// function NodejsIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#5FA04E">
//       <path d="M12 0a1.8 1.8 0 0 0-.9.24l-8.6 5A1.8 1.8 0 0 0 1.6 6.8v10.4a1.8 1.8 0 0 0 .9 1.56l8.6 5a1.8 1.8 0 0 0 1.8 0l8.6-5a1.8 1.8 0 0 0 .9-1.56V6.8a1.8 1.8 0 0 0-.9-1.56l-8.6-5A1.8 1.8 0 0 0 12 0zm-.9 2.5a.9.9 0 0 1 .9 0l7.8 4.5a.9.9 0 0 1 .45.78v9a.9.9 0 0 1-.45.78l-7.8 4.5a.9.9 0 0 1-.9 0l-7.8-4.5a.9.9 0 0 1-.45-.78v-9a.9.9 0 0 1 .45-.78z" />
//     </svg>
//   );
// }

// function ExpressIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 7h7l-7 10h8" />
//       <path d="M14 7l7 10" />
//       <path d="M21 7l-7 10" />
//     </svg>
//   );
// }

// function MongoIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#47A248">
//       <path d="M17.193 9.555c-1.264-5.38-4.225-7.39-4.805-7.794a.798.798 0 0 0-.776 0c-.58.404-3.54 2.413-4.805 7.794-1.42 6.035 1.542 10.74 4.887 12.37.194.095.412.143.63.143.218 0 .436-.048.63-.143 3.345-1.63 6.307-6.335 4.887-12.37zm-5.193 10.66v-7.854c0-.31-.25-.56-.56-.56s-.56.25-.56.56v7.854c-2.457-1.397-4.47-5.068-3.32-9.957.994-4.222 3.125-6.09 4.16-6.858v16.815z" />
//     </svg>
//   );
// }

// function PostgresIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#4169E1">
//       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07A6.002 6.002 0 0 1 6 11h2a4 4 0 0 0 8 0h2a6.002 6.002 0 0 1-5 5.93z" />
//     </svg>
//   );
// }

// function MysqlIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#00758F">
//       <path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.86 0-7-1.12-7-2.5S8.14 4 12 4s7 1.12 7 2.5S15.86 9 12 9zm-9 3v2c0 2.21 4.03 4 9 4s9-1.79 9-4v-2c-2.07 1.45-5.32 2-9 2s-6.93-.55-9-2zm0 6v2c0 2.21 4.03 4 9 4s9-1.79 9-4v-2c-2.07 1.45-5.32 2-9 2s-6.93-.55-9-2z" />
//     </svg>
//   );
// }

// function ApiIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="10" />
//       <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//     </svg>
//   );
// }

// function AuthIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   );
// }

// function JwtIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#D63AFF">
//       <circle cx="12" cy="12" r="10" />
//       <path d="M9 8h2v5.5a1.5 1.5 0 0 1-3 0V12h1.5v1.5a.5.5 0 0 0 1 0V8zm4 0h1.5l1.2 4.5L17 8h1.5l-2 8h-1.5l-1.2-4.5L14.5 16H13l-2-8h1.5z" fill="#FFF" />
//     </svg>
//   );
// }

// function StripeIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#635BFF">
//       <rect width="24" height="24" rx="4" fill="#635BFF" />
//       <path d="M13.8 9.6c0-.9-.7-1.3-1.8-1.3-1.3 0-2.3.5-3 1.1l-.8-1.7c1-1 2.5-1.5 4-1.5 2.6 0 4.2 1.3 4.2 3.6 0 3.5-4.8 2.9-4.8 4.4 0 .9.8 1.3 1.9 1.3 1.4 0 2.7-.6 3.4-1.3l.8 1.7c-1.1 1-2.7 1.6-4.4 1.6-2.7 0-4.3-1.4-4.3-3.7 0-3.6 4.8-3 4.8-4.4z" fill="#FFF" />
//     </svg>
//   );
// }

// function GitIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#F05032">
//       <path d="M23.546 10.93L13.067.452a1.505 1.505 0 0 0-2.128 0L8.845 2.548l3.023 3.023a1.782 1.782 0 0 1 2.247 2.261l3.418 3.418a1.78 1.78 0 1 1-1.06 1.033l-3.213-3.213v5.204a1.782 1.782 0 1 1-1.5 0V8.75a1.78 1.78 0 0 1-.96-1.564 1.776 1.776 0 0 1 .442-1.163L8.223 3.001.453 10.77a1.505 1.505 0 0 0 0 2.128L10.933 23.38a1.505 1.505 0 0 0 2.128 0l10.485-10.322a1.506 1.506 0 0 0 0-2.128z" />
//     </svg>
//   );
// }

// function GithubIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//       <path
//         fillRule="evenodd"
//         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }

// function VsCodeIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#007ACC">
//       <path d="M17.5 1.2L6.8 9.3 1.8 5.7 0 6.8v10.4l1.8 1.1 5-3.6 10.7 8.1 4.7-2.3V3.5l-4.7-2.3zm-1.8 14.1l-6-4.5 6-4.5v9z" />
//     </svg>
//   );
// }

// function PostmanIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
//       <circle cx="12" cy="12" r="10" />
//       <path d="M7 12l4-4v3h6v2h-6v3l-4-4z" fill="#FFF" />
//     </svg>
//   );
// }

// function VercelIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M24 22.525H0l12-21.05 12 21.05z" />
//     </svg>
//   );
// }

// function NetlifyIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#00C7B7">
//       <path d="M16 2l6 6-6 6V2zM8 22l-6-6 6-6v12zM2 8l6-6v12L2 8zm20 8l-6 6V10l6 6z" />
//     </svg>
//   );
// }

// function RenderIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#46E3B7">
//       <rect width="24" height="24" rx="4" fill="#13161C" />
//       <path d="M6 18V6h6a6 6 0 0 1 0 12H6zm3-3h3a3 3 0 0 0 0-6H9v6z" fill="#46E3B7" />
//     </svg>
//   );
// }

// function FigmaIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none">
//       <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
//       <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
//       <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
//       <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
//       <path d="M8 12h4v4a2.5 2.5 0 0 1-4 2 2.5 2.5 0 0 1 0-6z" fill="#0ACF83" />
//     </svg>
//   );
// }

// function DockerIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
//       <path d="M13 3h3v3h-3V3zm-4 4h3V4H9v3zm0 4h3V8H9v3zm-4 0h3V8H5v3zm-4 0h3V8H1v3zm12 0h3V8h-3v3zm4-4h3V4h-3v3zm-4 0h3V4h-3v3zm8 7.3c-.5-.3-1.6-.4-2.5-.2-.3-.6-.8-1.2-1.4-1.6l-.6-.4-.4.6c-.6 1-.7 2.3-.3 3.3-1.2.7-2.6 1-4.8 1H4.2C2 15 1.1 13.9 1 13.8l-.8.5C.4 14.5 1.5 16 4.2 16h8.8c2.4 0 4.1-.5 5.5-1.5 1.4-.9 2-2.1 2.3-3.2l.2-.5-.5-.2z" />
//     </svg>
//   );
// }

// function AwsIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
//       <path d="M18.7 14.8c-2.3 1.7-5.5 2.6-8.4 2.6-4.1 0-7.8-1.5-10.6-4-.2-.2 0-.5.2-.4 3 1.7 6.7 2.7 10.4 2.7 2.6 0 5.4-.6 8-1.8.4-.2.7.4.4.9zm1.4-1.2c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.2-.9 3.2-.6 3.4-.4.3.3-.1 2.3-1.2 3.3-.2.1-.3 0-.3-.2.2-.7.9-1.9.8-2.3z" />
//     </svg>
//   );
// }

// function SqlIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="#E48E00">
//       <ellipse cx="12" cy="6" rx="9" ry="3" />
//       <path d="M21 6v6c0 1.66-4.03 3-9 3s-9-1.34-9-3V6" fill="none" stroke="#E48E00" strokeWidth="2" />
//       <path d="M21 12v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" fill="none" stroke="#E48E00" strokeWidth="2" />
//     </svg>
//   );
// }

// function ArchIcon({ className = "w-3.5 h-3.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00C7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="2" y="2" width="8" height="8" rx="2" />
//       <rect x="14" y="2" width="8" height="8" rx="2" />
//       <rect x="8" y="14" width="8" height="8" rx="2" />
//       <path d="M6 10v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
//     </svg>
//   );
// }

// export default function SkillsSection() {
//   const frontendSkills = [
//     { name: "HTML5", icon: HtmlIcon },
//     { name: "CSS3", icon: CssIcon },
//     { name: "JavaScript", icon: JsIcon },
//     { name: "React.js", icon: ReactIcon },
//     { name: "Next.js", icon: NextjsIcon },
//     { name: "TypeScript", icon: TypeScriptIcon },
//     { name: "Tailwind CSS", icon: TailwindIcon },
//     { name: "DaisyUI", icon: DaisyUiIcon },
//     { name: "HeroUI", icon: HeroUiIcon },
//     { name: "Framer Motion", icon: FramerMotionIcon },
//   ];

//   const backendSkills = [
//     { name: "Node.js", icon: NodejsIcon },
//     { name: "Express.js", icon: ExpressIcon },
//     { name: "MongoDB", icon: MongoIcon },
//     { name: "PostgreSQL", icon: PostgresIcon },
//     { name: "MySQL", icon: MysqlIcon },
//     { name: "REST APIs", icon: ApiIcon },
//     { name: "Better Auth", icon: AuthIcon },
//     { name: "JWT", icon: JwtIcon },
//     { name: "Stripe", icon: StripeIcon },
//   ];

//   const toolsSkills = [
//     { name: "Git", icon: GitIcon },
//     { name: "GitHub", icon: GithubIcon },
//     { name: "VS Code", icon: VsCodeIcon },
//     { name: "Postman", icon: PostmanIcon },
//     { name: "Vercel", icon: VercelIcon },
//     { name: "Netlify", icon: NetlifyIcon },
//     { name: "Render", icon: RenderIcon },
//     { name: "Figma", icon: FigmaIcon },
//   ];

//   const currentlyLearning = [
//     { name: "TypeScript", icon: TypeScriptIcon },
//     { name: "SQL", icon: SqlIcon },
//     { name: "Docker", icon: DockerIcon },
//     { name: "AWS", icon: AwsIcon },
//     { name: "Advanced React", icon: ReactIcon },
//     { name: "Scalable Architecture", icon: ArchIcon },
//   ];

//   const softSkills = [
//     { name: "Problem Solving", icon: Puzzle },
//     { name: "Analytical Thinking", icon: LineChart },
//     { name: "Communication", icon: MessageSquare },
//     { name: "Team Collaboration", icon: Users },
//     { name: "Quick Learning", icon: Zap },
//     { name: "Adaptability", icon: RefreshCw },
//   ];

//   const categories = [
//     {
//       title: "Frontend",
//       icon: <Monitor className="w-5 h-5" />,
//       skills: frontendSkills,
//       count: "10 Skills",
//     },
//     {
//       title: "Backend & Database",
//       icon: <Server className="w-5 h-5" />,
//       skills: backendSkills,
//       count: "9 Skills",
//     },
//     {
//       title: "Tools & Workflow",
//       icon: <Wrench className="w-5 h-5" />,
//       skills: toolsSkills,
//       count: "8 Skills",
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="bg-[#f8fafc] text-gray-900 dark:bg-[#0d0f12] dark:text-white py-24 px-6 sm:px-8 selection:bg-amber-500 selection:text-black relative overflow-hidden transition-colors duration-300"
//     >
//       {/* Background Ambient Glows */}
//       <div className="absolute top-1/3 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
//       <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

//       <div className="max-w-7xl mx-auto space-y-12 relative z-10">
//         {/* Section Tag & Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center space-y-3"
//         >
//           <div className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
//             <Sparkles className="w-3 h-3" />
//             <span>03. SKILLS</span>
//           </div>

//           <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
//             My Tech <span className="text-amber-600 dark:text-amber-500">Stack</span>
//           </h2>

//           <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
//             Technologies I use to build modern, responsive, and scalable web applications.
//           </p>
//         </motion.div>

//         {/* 3 Main Category Cards Grid with Icon Badges */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {categories.map((cat, idx) => (
//             <motion.div
//               key={cat.title}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
//               whileHover={{ y: -6 }}
//               className="p-6 sm:p-7 rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-gray-800/80 dark:bg-gray-900/40 hover:border-amber-500/50 hover:shadow-amber-500/5 dark:hover:border-amber-500/40 transition-all duration-300 space-y-6 group"
//             >
//               <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800/80 pb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform shadow-sm">
//                     {cat.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
//                     {cat.title}
//                   </h3>
//                 </div>
//                 <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/60 px-2.5 py-1 rounded-full border border-gray-200/60 dark:border-gray-700/60">
//                   {cat.count}
//                 </span>
//               </div>

//               {/* 2-Column Responsive Skill Grid with Visual Icons */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
//                 {cat.skills.map((skill, sIdx) => {
//                   const IconComponent = skill.icon;
//                   return (
//                     <div
//                       key={sIdx}
//                       className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50/80 dark:bg-gray-800/40 border border-gray-200/70 dark:border-gray-800/60 hover:border-amber-500/50 hover:bg-amber-50/40 dark:hover:bg-gray-800/80 transition-all duration-200 group/item cursor-default"
//                     >
//                       <div className="w-6 h-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-110 transition-transform">
//                         <IconComponent className="w-3.5 h-3.5" />
//                       </div>
//                       <span className="font-medium text-xs text-gray-800 dark:text-gray-200 truncate group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400 transition-colors">
//                         {skill.name}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Currently Learning Pills Banner with Icons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="p-6 sm:p-7 rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-800/80 dark:bg-gray-900/40 space-y-4 transition-colors"
//         >
//           <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-300">
//             <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-500" />
//             <span>Currently Leveling Up</span>
//           </div>

//           <div className="flex flex-wrap gap-2.5">
//             {currentlyLearning.map((item, idx) => {
//               const IconComponent = item.icon;
//               return (
//                 <motion.span
//                   key={idx}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-600/30 bg-amber-500/15 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300 text-xs font-medium tracking-wide hover:bg-amber-500/25 dark:hover:bg-amber-500/20 transition-all cursor-default shadow-sm group/pill"
//                 >
//                   <span className="w-4 h-4 flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform">
//                     <IconComponent className="w-3.5 h-3.5" />
//                   </span>
//                   <span>{item.name}</span>
//                 </motion.span>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Soft Skills Pills Banner with Icons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.5, delay: 0.25 }}
//           className="p-6 sm:p-7 rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-800/80 dark:bg-gray-900/40 space-y-4 transition-colors"
//         >
//           <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-300">
//             <Brain className="w-4 h-4 text-amber-600 dark:text-amber-500" />
//             <span>Soft Skills &amp; Strengths</span>
//           </div>

//           <div className="flex flex-wrap gap-2.5">
//             {softSkills.map((skill, idx) => {
//               const IconComponent = skill.icon;
//               return (
//                 <motion.span
//                   key={idx}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:border-amber-500/40 hover:text-amber-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-200 text-xs font-medium transition-all cursor-default shadow-sm group/pill"
//                 >
//                   <span className="w-4 h-4 flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform text-amber-600 dark:text-amber-500">
//                     <IconComponent className="w-3.5 h-3.5" />
//                   </span>
//                   <span>{skill.name}</span>
//                 </motion.span>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
