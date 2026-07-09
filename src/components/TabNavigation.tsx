interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabNavigation({ tabs, activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <div className="flex overflow-x-auto items-end pl-2 pr-2 md:pl-10 md:pr-0 z-20 -mb-[3px] snap-x">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative shrink-0 snap-start px-4 md:px-6 font-retro text-lg md:text-2xl border-[3px] border-retro-border rounded-t-lg transition-colors overflow-hidden whitespace-nowrap flex items-center justify-center
              ${isActive ? "bg-retro-light border-b-transparent h-[52px] md:h-[56px] z-10" : "bg-retro-bg border-b-retro-border hover:bg-black/5 h-[44px] md:h-[48px] opacity-80"}`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
