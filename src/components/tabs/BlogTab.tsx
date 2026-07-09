import { FileText } from "lucide-react";

const posts = [
  {
    title: "Building a Smart Irrigation System with ESP32: From Soil Sensor to Cloud Dashboard",
    date: "2024-03-15",
    excerpt: "Wiring a soil-moisture sensor, relay, and pump to an ESP32 to water plants only when they need it — plus the calibration and non-blocking-loop tricks that make it reliable."
  },
  {
    title: "Devops:lifecycle",
    date: "2024-02-28",
    excerpt: "Walking through the DevOps lifecycle — plan, build, test, release, deploy, monitor — and how continuous integration and feedback loops tie the whole pipeline together."
  },
  {
    title: "which career path should I take?",
    date: "2024-01-10",
    excerpt: "Weighing frontend, backend, and full-stack against DevOps and cloud — how I'm thinking through the trade-offs, my strengths, and where the work actually excites me."
  }
];

export default function BlogTab() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-lg md:text-xl mb-2">BLOG.NOTE</h2>
      
      <div className="space-y-4">
        {posts.map((post, i) => (
          <article 
            key={i}
            className="bg-white border-[3px] border-retro-border p-4 md:p-5 hover:-translate-y-1 hover:shadow-pixel transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-2 text-retro-border/60 font-retro">
              <FileText size={16} />
              <span>{post.date}</span>
            </div>
            <h3 className="font-heading text-sm md:text-base mb-3 group-hover:text-retro-red transition-colors leading-relaxed">
              {post.title}
            </h3>
            <p className="font-retro text-base md:text-lg text-retro-border/80">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
      
      <button className="self-start font-heading text-xs border-b-[2px] border-retro-border pb-1 mt-4 hover:text-retro-blue hover:border-retro-blue transition-colors">
        LOAD_MORE.EXE
      </button>
    </div>
  );
}
