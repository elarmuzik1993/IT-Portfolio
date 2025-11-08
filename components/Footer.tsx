"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} Boris. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/elarmuzik1993"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
