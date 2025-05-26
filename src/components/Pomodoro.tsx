import type React from "react";

interface PomodoroTimer {
  time: number;
  cycle: number;
  isRunning: boolean;
  onToggle: () => void;
}

const Pomodoro: React.FC<PomodoroTimer> = ({ time, cycle, isRunning, onToggle }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="grid grid-rows-2 h-full w-full border bg-[#1a1a1a] border-white/10 rounded-2xl">
      <div className="flex flex-col items-center justify-center gap-3 p-8">
        <div className="border-4 border-white/70 rounded-2xl h-16 w-[70%] overflow-hidden">
          <div className="h-full bg-[#51E41B]/70 rounded transition-all duration-500"
            style={{ width: `${cycle}%` }}>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white/70 font-bold text-4xl">
            {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
          </h2>
          <p className="text-white/70 font-bold text-2xl">Ciclo de foco {cycle}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={onToggle}
          className={`border border-white/10 p-10 rounded-2xl cursor-pointer ${isRunning ? 'shadow shadow-black/50' : 'bg-[#ff4040]/70 shadow-2xl shadow-[#ff4040]/30'}`}
        >
          <h3 className="text-2xl font-bold text-white/70">
            {isRunning ? 'Pausar' : 'Focar'}
          </h3>
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
