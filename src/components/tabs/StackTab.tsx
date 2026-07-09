import { Coffee, Braces, Atom, Leaf, Wind, Database, GitBranch, Container } from "lucide-react";

export default function StackTab() {
  const skills = [
    { name: "Java", level: 90, Icon: Coffee },
    { name: "Spring Boot", level: 85, Icon: Leaf },
    { name: "JavaScript", level: 80, Icon: Braces },
    { name: "React.js", level: 85, Icon: Atom },
    { name: "Tailwind CSS", level: 90, Icon: Wind },
    { name: "MySQL", level: 80, Icon: Database },
    { name: "Git", level: 85, Icon: GitBranch },
    { name: "Docker", level: 70, Icon: Container },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-lg md:text-xl mb-2 text-center">STACK.LOG</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-items-center">
        {skills.map((skill) => {
          const Icon = skill.Icon;
          return (
            <div key={skill.name} className="flex flex-col items-center">
              {/* Icon */}
              <Icon size={44} className="mb-2 text-retro-green" />
              {/* Name */}
              <span className="font-heading text-xs md:text-sm mb-1 text-center">{skill.name}</span>
              {/* Percentage bar */}
              <div className="w-28 md:w-32 bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-retro-green"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm mt-2 text-retro-border/70 font-bold">{skill.level}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
