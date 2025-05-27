import { useEffect, useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import PlayerSong from "./components/PlayerSong";
import Pomodoro from "./components/Pomodoro";
import Sugestions from "./components/Sugestions";

const App = () => {
  const focusTime = 25 * 60;
  const breakTime = 5 * 60;

  const [time, setTime] = useState(focusTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const [cycle, setCycle] = useState(1);

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = window.setInterval(() => {
        setTime(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            if (isFocus) {
              setCycle(prevCycle => prevCycle + 1);
              setTime(breakTime);
              setIsFocus(false);
            } else {
              setTime(focusTime);
              setIsFocus(true);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isFocus]);

  return (
    <div className="flex flex-col w-full h-screen bg-[#1a1a1a]">
      <Header focus={isFocus} />
      <main className="grid grid-cols-2 h-full p-0.5 gap-0.5  overflow-hidden">
        <div className="flex flex-col gap-0.5 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <Pomodoro
              time={time}
              cycle={cycle}
              isRunning={isRunning}
              onToggle={toggleTimer}
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <Sugestions />
          </div>
        </div>
        <div className="flex flex-col gap-0.5  overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <PlayerSong />
          </div>
          <div className="flex-1 overflow-hidden">
            <Notes />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
