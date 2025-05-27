import { useState } from "react";
import { btnList } from "../data/btnList";

const PlayerSong = () => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 gap-0.5 h-full">
      {btnList.map((btn) => {
        const Icon = btn.icon;
        const isActive = activeBtn === btn.name;

        const handleClick = (name: string) => {
          setActiveBtn((prev) => (prev === name) ? null : name)
        }
        return (
          <div
            key={btn.name}
            onClick={() => handleClick(btn.name)}
            style={isActive ? {backgroundColor: `rgba(255, 255, 255, 0.3)`} : {}}
            className={`flex items-center justify-center border text-4xl cursor-pointer border-white/10 bg-[#1a1a1a] transition-colors duration-300
              ${isActive ? `text-white scale-95` : "text-white/50"}
            `}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerSong;
