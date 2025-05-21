import { useState } from "react"
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const Notes = () => {
  const [addNote, setAddNote] = useState<boolean | null>(false)

  return (
    <div className="relative border bg-[#1a1a1a] border-white/10 rounded-2xl p-2">
      <button onClick={() => setAddNote(true)} className="text-4xl text-white/50 border-2 border-white/10 rounded bg-white/10 absolute  cursor-pointer hover:border-white/50 hover:text-white/70 duration-300 bottom-4 right-4"><IoMdAdd /></button>

      {/* Toda vez que o botãp de adicionar for clicado aparecerá um bloco para adicionar o lembrete, como a função de um post it */}

      {addNote === true ? (
        <div className="relative w-full h-30 bg-white/60 rounded-2xl shadow-2xl shadow-white/30 border border-white/20">
          <button className="absolute right-3 top-3 text-2xl text-black/50 cursor-pointer"><IoClose /></button>
        </div>
      ) : addNote === false}
    </div>
  )
}

export default Notes