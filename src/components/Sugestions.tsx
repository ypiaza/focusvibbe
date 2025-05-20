import { useEffect, useState } from "react"
import { focusTips } from "../data/motivation"

const Sugestions = () => {
  const [motivation, setMotivation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMotivation((id) => (id + 1) % focusTips.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border bg-[#1a1a1a] border-white/10 rounded-2xl flex items-center justify-center">
      <div className={`bg-white/50 rounded-2xl flex items-center justify-center w-[50%] p-5 ${focusTips[motivation] ? 'bg-red-600' : ''}`}>
        <p>
          {focusTips[motivation].text}
        </p>
      </div>
    </div>
  )
}

export default Sugestions