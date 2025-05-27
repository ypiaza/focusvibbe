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
    <div className="border h-full bg-[#1da5c4]/50 border-white/10 flex items-center justify-center p-10 transition-all duration-300">
        <p className="font-bold text-2xl text-white/80 text-center">
          {focusTips[motivation].text}
        </p>
    </div>
  )
}

export default Sugestions