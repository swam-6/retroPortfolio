import { Terminal, Coffee, MapPin, Code2 } from "lucide-react";

export default function StatusWidget() {
  return (
    <div className="w-full bg-white border-[3px] border-retro-border p-4 shadow-pixel font-retro text-base flex flex-col gap-3">
      <div className="flex items-center gap-2 border-b-2 border-dotted border-retro-border/30 pb-2">
        <Terminal size={18} />
        <span className="opacity-70">STATUS:</span>
        <span className="text-retro-green animate-pulse">ONLINE</span>
      </div>

      <div className="flex items-center gap-2 border-b-2 border-dotted border-retro-border/30 pb-2">
        <Code2 size={18} />
        <span className="opacity-70">MODE:</span>
        <span>DEVELOPER</span>
      </div>

      <div className="flex items-center gap-2 border-b-2 border-dotted border-retro-border/30 pb-2">
        <Coffee size={18} />
        <span className="opacity-70">CAFFEINE:</span>
        <div className="flex-1 h-3 border-[2px] border-retro-border bg-gray-200">
          <div className="h-full bg-retro-yellow w-[80%] border-r-[2px] border-retro-border"></div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <MapPin size={18} />
        <span className="opacity-70">LOC:</span>
        <span>EARTH_C137</span>
      </div>
    </div>
  );
}
