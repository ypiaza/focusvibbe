import { useEffect, useState } from "react"
import { focusTips } from "../data/motivation"

const Sugestions = () => {
  const [motivation, setMotivation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMotivation((id) => (id + 1) % focusTips.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border bg-[#1da5c4] shadow-2xl shadow-[#00D0FF]/50 border-white/10 rounded-2xl flex items-center justify-center p-10 transition-all duration-300">
        <p className="font-bold text-2xl text-white/80 text-center">
          {focusTips[motivation].text}
        </p>
    </div>
  )
}

export default Sugestions