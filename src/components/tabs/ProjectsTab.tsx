import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "IoT Smart Irrigation System",
    description: "Automated plant watering powered by an ESP32. Soil-moisture sensing and relay-driven pumps keep crops watered on need, not on a timer — cutting water waste, all monitored live from a Blynk dashboard (SDG 6).",
    tags: ["ESP32", "IoT", "Blynk", "C++"],
    github: "https://github.com/swam-6/SDG.git"
  },
  {
    title: "Emotional Wellness Dashboard",
    description: "A dashboard for tracking how you feel. An interactive mood slider with real-time emoji feedback, four emotion-tag categories, and a daily reflection journal — built mobile-first in React 19.",
    tags: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/swam-6/emotional-wellness.git"
  },
  {
    title: "E-Commerce Product API",
    description: "A secure REST backend for managing an online store's product catalog. Built in Spring Boot with JWT authentication and a layered architecture across 40+ endpoints, fully documented with Swagger/OpenAPI.",
    tags: ["Java", "Spring Boot", "SQL", "Swagger"],
    github: "https://github.com/swam-6/e-commerce-product-api.git"
  },
  {
    title: "Expense Tracker",
    description: "Keep tabs on where your money goes. A web-based expense manager that logs spending and groups it month-wise by category with automatic monthly totals — built in core Java (JSP, Servlets, JDBC) on an MVC architecture.",
    tags: ["JSP", "Servlet", "JDBC", "MySQL"],
    github: "https://github.com/swam-6/ExpenseTracker.git"
  }
];

export default function ProjectsTab() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-lg md:text-xl mb-2 flex items-center gap-3">
        <FolderGit2 size={22} />
        PROJECTS.DAT
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-retro-border p-4 md:p-5 hover:-translate-y-1 hover:shadow-pixel transition-all group flex flex-col"
          >
            <h3 className="font-heading text-sm mb-3 group-hover:text-retro-blue transition-colors">
              {project.title}
            </h3>
            <p className="font-retro text-base md:text-lg text-retro-border/80 mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3 mb-5">
              {project.tags.map(tag => (
                <span key={tag} className="text-sm font-retro bg-retro-bg border-[2px] border-retro-border px-3 md:px-4 py-2">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              <a href={project.github} className="text-xs font-heading border-b-[2px] border-transparent hover:text-retro-green hover:border-retro-green pb-1 transition-colors">
                [SOURCE]
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
