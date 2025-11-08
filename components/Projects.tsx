"use client";

import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Distortion Audio Plugin",
      tagline: "Professional VST3 Audio Processing",
      description: "A professional JUCE audio plugin featuring multi-stage distortion, LA2A-style optical compression, and advanced signal processing. Includes 4x oversampling, band-split processing, and real-time oscilloscope visualization.",
      tags: ["C++", "JUCE", "VST3", "Audio DSP", "Visual Studio"],
      category: "Audio Engineering",
      image: "/distortion-plugin.png",
    },
    {
      title: "Melody Generator",
      tagline: "AI-Powered Music Composition Tool",
      description: "Sophisticated web-based music generation tool with multi-track composition, genre-specific styles, and Roland TR-8S style step sequencer. Features 40+ instruments, real-time playback, and MIDI export functionality.",
      tags: ["React", "TypeScript", "Tone.js", "Tailwind CSS", "Web Audio API"],
      liveUrl: "https://elarmuzik1993.github.io/Replit-Melody-Generator/",
      githubUrl: "https://github.com/elarmuzik1993/Replit-Melody-Generator",
      category: "Music Technology",
    },
    {
      title: "Monolit Beatz Portfolio",
      tagline: "Modern Music Artist Website",
      description: "A futuristic music portfolio website featuring integrated YouTube music player with custom album art, playlist management, and neon aesthetic design. Includes 24-hour API caching system and responsive scroll animations.",
      tags: ["HTML5", "CSS3", "JavaScript", "YouTube API", "Responsive Design"],
      liveUrl: "https://elarmuzik1993.github.io/",
      githubUrl: "https://github.com/elarmuzik1993/Official-Website",
      category: "Web Development",
    },
    {
      title: "Aurora Fine Art Services",
      tagline: "Luxury Business Landing Page",
      description: "Professional landing page for London's premier fine art logistics company. Features multi-language support (5 languages), elegant animations, and working contact form. Built with React and Tailwind CSS for optimal performance.",
      tags: ["React", "Tailwind CSS", "Multi-language", "Responsive", "i18n"],
      liveUrl: "https://elarmuzik1993.github.io/Aurora-Fine-Art/",
      githubUrl: "https://github.com/elarmuzik1993/Aurora-Fine-Art",
      category: "Web Development",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--background)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {project.image && (
                <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60"></div>
                </div>
              )}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-sm text-blue-500 font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 italic">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="px-6 py-3 border border-gray-800 rounded-lg font-medium text-gray-500 cursor-not-allowed">
                      Private Project
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
