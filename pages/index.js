import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import { useSelector } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const darkMode = useSelector((state)=>state.darkMode.darkMode)
  return (
    <div className={`${darkMode ? ('text-white bg-black'):('text-black bg-white')} h-screen`}>
    <Header/>
    </div>
  )
}
