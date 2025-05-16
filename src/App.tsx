import Header from "./components/Header"
import Notes from "./components/Notes"
import PlayerSong from "./components/PlayerSong"
import Pomodoro from "./components/Pomodoro"
import Sugestions from "./components/Sugestions"

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-[#1a1a1a]">
      <Header />
      <div className="grid grid-cols-3 h-full">
        <Pomodoro />
        <div className="grid grid-rows-2">
          <PlayerSong />
          <Sugestions />
        </div>
        <Notes />
      </div>
    </div>
  )
}

export default App