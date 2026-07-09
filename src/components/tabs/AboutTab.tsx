import { Github, Linkedin } from "lucide-react";

interface AboutTabProps {
  setActiveTab?: (tab: string) => void;
}

export default function AboutTab({ setActiveTab }: AboutTabProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 font-sans w-full">
      <div>
        <h1 className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 leading-tight">
          Hi, I am
          <br />
          <span className="relative inline-block group select-none mt-1 sm:mt-2">
            {/* Cyan/Blue Glitch Clone (Passive soft offset, violent glitch on hover) */}
            <span className="absolute top-0 left-0 text-retro-blue opacity-30 group-hover:opacity-90 group-hover:animate-glitch-1 z-0 pointer-events-none transition-opacity duration-300">
              Swaminadhan G
            </span>
            
            {/* Red/Peach Glitch Clone (Passive soft offset, violent glitch on hover) */}
            <span className="absolute top-0 left-0 text-retro-red opacity-30 group-hover:opacity-90 group-hover:animate-glitch-2 z-0 pointer-events-none transition-opacity duration-300">
              Swaminadhan G
            </span>

            {/* Main Text (Base layer, flickers on hover) */}
            <span className="relative z-10 text-retro-green group-hover:animate-crt-flicker">
              Swaminadhan G
            </span>
          </span>
          <span className="animate-pulse text-retro-border ml-1">_</span>
        </h1>
        <div className="w-12 sm:w-16 h-[3px] sm:h-[4px] bg-retro-border mb-4 sm:mb-6"></div>
      </div>

      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-retro-border/90 leading-relaxed font-retro w-full max-w-2xl">
        <p>
          I'm a full-stack developer obsessed with pixel-perfect designs and building robust web applications.
        </p>
        <p>
          Currently bridging the gap between retro aesthetics and modern performance. When I'm not writing code, I'm probably tweaking my dotfiles or drinking way too much coffee.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-4">
        <SocialButton icon={<Github size={16} />} label="GITHUB" href="https://github.com/swam-6" />
        <SocialButton icon={<Linkedin size={16} />} label="LINKEDIN" href="https://www.linkedin.com/in/swami666/" />
      </div>

      <div className="mt-4 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
        <a
          href="/resume.pdf"
          download="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-retro-border text-retro-light font-heading text-[10px] sm:text-xs px-4 sm:px-6 py-2 sm:py-3 border-[2px] sm:border-[3px] border-retro-border hover:-translate-y-1 hover:shadow-pixel transition-all inline-block"
        >
          RESUME.PDF
        </a>
        <button
          onClick={() => setActiveTab && setActiveTab("CONTACT.ME")}
          className="bg-retro-green text-retro-border font-heading text-[10px] sm:text-xs px-4 sm:px-6 py-2 sm:py-3 border-[2px] sm:border-[3px] border-retro-border hover:-translate-y-1 hover:shadow-pixel transition-all"
        >
          HIRE_ME.EXE
        </button>
      </div>
    </div>
  );
}

function SocialButton({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 sm:gap-2 bg-white border-[2px] sm:border-[3px] border-retro-border px-3 sm:px-4 py-1.5 sm:py-2 font-retro text-xs sm:text-sm hover:-translate-y-1 hover:shadow-pixel transition-all group"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
