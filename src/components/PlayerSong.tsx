import { btnList } from "../data/data"

const PlayerSong = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      {btnList.map((btn) => (
        <div key={btn.name} className={`flex items-center justify-center border text-4xl text-white/50 cursor-pointer border-white/10 rounded-2xl bg-[#${btn.color}]`}><btn.icon /></div>
      ))}
    </div>
  )
}

export default PlayerSong