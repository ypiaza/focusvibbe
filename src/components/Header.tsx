interface focus {
  focus: boolean
}

const Header: React.FC<focus> = ({ focus }) => {
  return (
    <div className={`px-5 py-1 border border-white/10 transition-all duration-300 z-50 ${focus === true ? 'bg-[#ff4040]/70 shadow-2xl shadow-[#ff4040]/50' : 'bg-[#00D0FF]/70 shadow-2xl shadow-[#00D0FF]/50'}`}>
      <h1 className="font-bold text-white/80">focusvibe.</h1>
    </div>
  )
}

export default Header