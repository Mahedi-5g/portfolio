import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahedi Hasan | Full Stack Developer (MERN)",
  description:
    "Motivated MERN Stack Developer skilled in building responsive, scalable full-stack applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Mahedi Hasan",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mahedi Hasan" }],
  openGraph: {
    title: "Mahedi Hasan | Full Stack Developer (MERN)",
    description:
      "Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full bg-[#f8fafc] text-gray-900 dark:bg-[#0d0f12] dark:text-white flex flex-col transition-colors duration-300 selection:bg-amber-500 selection:text-black">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
