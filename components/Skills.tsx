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
      category: "Design",
      skills: ["UI/UX Design", "Figma", "Responsive Design", "Typography", "Color Theory", "Prototyping", "Wireframing"]
    },
    {
      category: "Development Tools",
      skills: ["Git", "GitHub", "Visual Studio", "VS Code", "Projucer", "npm"]
    },
    {
      category: "AI & Modern Workflow",
      skills: ["Claude AI", "ChatGPT", "GitHub Copilot", "AI-Assisted Development", "Prompt Engineering", "AI Code Review"]
    },
    {
      category: "Concepts & Practices",
      skills: ["API Integration", "Performance Optimization", "Agile Development", "Version Control", "Testing", "Debugging"]
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

        <div className="mt-16 space-y-8">
          {/* AI-Enhanced Workflow Section */}
          <div className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">
              AI-Enhanced Development Workflow
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-200 flex items-center gap-2">
                  <span className="text-purple-400">→</span> Code Generation & Optimization
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leveraging Claude AI and GitHub Copilot for rapid prototyping, code suggestions,
                  and intelligent refactoring to accelerate development cycles.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-200 flex items-center gap-2">
                  <span className="text-purple-400">→</span> AI-Assisted Problem Solving
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Using AI tools for debugging, architecture design, and exploring best practices
                  across audio DSP, web development, and music technology.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-200 flex items-center gap-2">
                  <span className="text-purple-400">→</span> Documentation & Learning
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI-powered research for staying current with JUCE, React ecosystem updates,
                  and emerging audio processing techniques.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-200 flex items-center gap-2">
                  <span className="text-purple-400">→</span> Version Control Excellence
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  GitHub-centric workflow with AI-generated commit messages, PR reviews,
                  and automated code quality checks.
                </p>
              </div>
            </div>
          </div>

          {/* Always Learning Section */}
          <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Always Learning
            </h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies.
              Currently exploring advanced audio processing techniques, machine learning for music generation,
              modern web performance optimization strategies, and the evolving landscape of AI-assisted development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
