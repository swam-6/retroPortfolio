"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import AboutTab from "@/components/tabs/AboutTab";
import ProjectsTab from "@/components/tabs/ProjectsTab";
import StackTab from "@/components/tabs/StackTab";
import BlogTab from "@/components/tabs/BlogTab";
import ContactTab from "@/components/tabs/ContactTab";
import StatusWidget from "@/components/StatusWidget";
import ProfileImage from "@/components/ProfileImage";
import WindowControls from "@/components/WindowControls";
import TabNavigation from "@/components/TabNavigation";

const tabs = [
  { id: "ABOUT.TXT", component: AboutTab },
  { id: "PROJECTS.DAT", component: ProjectsTab },
  { id: "STACK.LOG", component: StackTab },
  { id: "BLOG.NOTE", component: BlogTab },
  { id: "CONTACT.ME", component: ContactTab },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component || AboutTab;

  return (
    <main className="w-full max-w-6xl flex flex-col pt-4 md:pt-8">
      {/* Top Tabs */}
      <TabNavigation tabs={tabs.map(t => t.id)} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Window */}
      <div className="relative bg-retro-light pixel-border shadow-pixel flex flex-col md:flex-row min-h-[560px] md:min-h-[600px] overflow-hidden">
        
        {/* Window Header */}
        <div className="absolute top-0 left-0 right-0 h-10 border-b-[3px] border-retro-border flex items-center justify-between px-4 bg-retro-bg z-10">
          <WindowControls />
          <button className="p-1 hover:bg-black/5 transition-colors pixel-border border-transparent hover:border-retro-border">
            <Maximize2 size={16} strokeWidth={3} className="text-retro-border" />
          </button>
        </div>

        {/* Content Area - Left Side */}
        <div className={`flex-1 p-4 md:p-10 pt-16 md:pt-16 border-r-0 ${activeTab === "ABOUT.TXT" ? "md:border-r-[3px]" : ""} border-retro-border overflow-y-auto custom-scrollbar relative`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <ActiveComponent {...({ setActiveTab } as any)} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sidebar - Right Side */}
        {activeTab === "ABOUT.TXT" && (
          <div className="w-full md:w-80 bg-retro-bg p-4 md:p-6 pt-8 md:pt-16 flex flex-col items-center gap-6 md:gap-8 shrink-0 relative border-t-[3px] md:border-t-0 border-retro-border">
            <ProfileImage />
            <StatusWidget />
            
            {/* Subtle decorative pixels */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-retro-red/50 animate-pulse"></div>
          </div>
        )}

      </div>
    </main>
  );
}
