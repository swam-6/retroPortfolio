import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-48 h-48 md:w-56 md:h-56"
    >
      <div className="absolute inset-0 bg-retro-border rounded-full translate-x-2 translate-y-2"></div>
      <div className="absolute inset-0 bg-[#e0dcd3] border-[4px] border-retro-border rounded-full overflow-hidden flex items-center justify-center">
        <img 
          src="/avatar.png" 
          alt="Profile Avatar" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if avatar.png is missing
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="text-retro-border opacity-30 font-heading text-xs text-center hidden">
          AVATAR.PNG<br/>MISSING
        </div>
      </div>
    </motion.div>
  );
}
