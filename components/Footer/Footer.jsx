import Link from "next/link"
import { useSelector } from "react-redux"
const Footer = () => {
    const darkMode = useSelector(((state)=>state.darkMode.darkMode))
  return (
    <div className={`py-4 ${darkMode ? ('text-white bg-black '):('text-black bg-white border-black')}`}>
        <p className="flex flex-row justify-center items-center gap-4">
            <span>SpaceX © 2023</span>
            <Link href="/media/privacy_policy_spacex.pdf" aria-label="SpaceX's Privacy Policy" target="_blank" class="social">PRIVACY POLICY</Link>
            <Link href="/" aria-label="SpaceX's Dashboard" target="_self" class="social">HOME</Link>
            <Link href="/Dashboard" aria-label="SpaceX's Dashboard" target="_blank" class="social">DASHBOARD</Link>
            </p>
    </div>
  )
}

export default Footer