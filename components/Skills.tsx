"use client";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["C++", "TypeScript", "JavaScript", "HTML5", "CSS3", "Python"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "JUCE", "Tailwind CSS", "Node.js", "Tone.js"]
    },
    {
      category: "Audio & Music",
      skills: ["Audio DSP", "VST3 Development", "Web Audio API", "MIDI", "Music Theory", "Sound Design"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Visual Studio", "VS Code", "Figma", "Projucer", "npm"]
    },
    {
      category: "Concepts",
      skills: ["Responsive Design", "API Integration", "Performance Optimization", "UI/UX Design", "Agile Development"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-blue-500/10 text-gray-300 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Always Learning
          </h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies.
            Currently exploring advanced audio processing techniques, machine learning for music generation,
            and modern web performance optimization strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
