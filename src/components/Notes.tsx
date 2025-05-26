import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Notes = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
      setInputVisible(false);
    }
  };

  const handleRemoveNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="relative border bg-[#1a1a1a] border-white/10 rounded-2xl p-4 min-h-[200px]">
      {/* Botão para adicionar nova nota */}
      <button
        onClick={() => setInputVisible(true)}
        className="text-4xl text-white/50 border-2 border-white/10 rounded bg-white/10 absolute cursor-pointer hover:border-white/50 hover:text-white/70 duration-300 bottom-4 right-4"
      >
        <IoMdAdd />
      </button>

      {/* Campo para nova nota */}
      {inputVisible && (
        <div className="relative w-full bg-white/60 rounded-2xl p-4 mb-4">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="w-full p-2 rounded text-sm resize-none text-black placeholder:text-black/50 outline-none"
            placeholder="Digite sua nota..."
            rows={3}
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => setInputVisible(false)}
              className="text-black/50 cursor-pointer hover:text-black"
            >
              <IoClose size={24} />
            </button>
            <button
              onClick={handleAddNote}
              className="text-sm px-3 py-1 rounded bg-black cursor-pointer
              
              text-white hover:bg-zinc-800 transition"
            >
              Salvar
            </button>
          </div>
        </div>
      )}

      {/* Lista de notas */}
      <div className="grid gap-3">
        {notes.map((note, index) => (
          <div
            key={index}
            className="relative bg-white/50 rounded-xl p-3 shadow-md font-bold  text-black/80 text-sm"
          >
            <p>{note}</p>
            <button
              onClick={() => handleRemoveNote(index)}
              className="absolute cursor-pointer top-2 right-2 text-xl text-black/50 hover:text-black"
            >
              <IoClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
