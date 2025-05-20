interface btnSounds {
    name: string,
    icon: React.ElementType,
    color: string
}

import { FaCloudRain, FaFire } from "react-icons/fa";
import { MdForest } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";


export const btnList: btnSounds[] = [
    {
        name: 'rain',
        icon: FaCloudRain,
        color: '#00D0FF'
    },
    {
        name: 'forest',
        icon: MdForest,
        color: '#55F64D'
    },
    {
        name: 'fire',
        icon: FaFire,
        color: '#D32E2E'
    },
    {
        name: 'lofi',
        icon: IoMdMusicalNote,
        color: '#FF8000'
    }
]