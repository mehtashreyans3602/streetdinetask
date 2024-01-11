import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import { useSelector } from 'react-redux'
import LaunchComp from '@/components/Launches/Launches'
import Footer from '@/components/Footer/Footer'
import LandingPageComponent from '@/components/LandingPage/LandingPageComponent'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const darkMode = useSelector((state)=>state.darkMode.darkMode)
  return (
    <div className={`${darkMode ? ('text-white bg-black '):('text-black bg-white border-black')} h-screen w-full overflow-auto`}>
    <Header/>
    {/* <LaunchComp/> */}
    <LandingPageComponent/>
    <Footer/>
    </div>
  )
}
