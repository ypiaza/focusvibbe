import Header from "./components/Header"
import Notes from "./components/Notes"
import PlayerSong from "./components/PlayerSong"
import Pomodoro from "./components/Pomodoro"
import Sugestions from "./components/Sugestions"

const App = () => {
  const focus = false;
  return (
    <div className={`flex flex-col w-full h-screen bg-[#0F0F0F]`}>
      <Header focus={focus} />
      <main  className="grid grid-cols-3 h-full p-2 gap-2">
        <Pomodoro />
        <Notes />
        <div className="grid grid-rows-2 gap-2">
          <Sugestions />
          <PlayerSong focus={focus}/> 
        </div>
      </main >
    </div>
  )
}

export default App