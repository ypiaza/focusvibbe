import { useEffect, useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import PlayerSong from "./components/PlayerSong";
import Pomodoro from "./components/Pomodoro";
import Sugestions from "./components/Sugestions";

const App = () => {
  const focusTime = 25 ;
  const breakTime = 5;

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
    <div className="flex flex-col w-full h-screen bg-[#0F0F0F]">
      <Header focus={isFocus} />
      <main className="grid grid-cols-3 h-full p-2 gap-2">
        <Pomodoro
          time={time}
          cycle={cycle}
          isRunning={isRunning}
          onToggle={toggleTimer}
        />
        <Notes />
        <div className="grid grid-rows-2 gap-2">
          <Sugestions />
          <PlayerSong />
        </div>
      </main>
    </div>
  );
};

export default App;
