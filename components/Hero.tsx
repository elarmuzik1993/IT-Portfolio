"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Boris Mishchenko
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting innovative solutions across audio engineering, web development, and music technology.
          Specializing in C++, React, and professional audio software development.
        </p>

        <div className="flex gap-6 justify-center mb-16">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Get In Touch
          </a>
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 border border-gray-700 hover:border-blue-500 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/elarmuzik1993"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/10"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/10"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
}
