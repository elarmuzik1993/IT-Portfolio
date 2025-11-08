"use client";

import { Code, Music, Cpu, Sparkles } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Building modern web applications with React, TypeScript, and Next.js"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Audio Engineering",
      description: "Professional VST plugin development with JUCE framework"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Music Technology",
      description: "Creating innovative music generation and production tools"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Solutions",
      description: "Combining technical expertise with creative problem-solving"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-slide-up">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer who bridges the gap between traditional software engineering
              and creative audio technology. With expertise spanning from low-level C++ audio processing
              to modern web applications, I bring a unique perspective to every project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey has taken me through professional audio plugin development, interactive music
              generation systems, and elegant web solutions. I thrive on tackling complex technical
              challenges while maintaining a focus on user experience and performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new music production techniques,
              contributing to open-source projects, or diving deep into audio DSP research.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-blue-500 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-200">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
