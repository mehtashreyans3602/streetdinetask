import React from 'react'
import { useSelector } from 'react-redux';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import LaunchComp from '@/components/Launches/Launches';
const Dashboard = () => {
    const darkMode = useSelector((state)=>state.darkMode.darkMode)
    return (
      <div className={`${darkMode ? ('text-white bg-black '):('text-black bg-white border-black')} h-screen w-full overflow-auto`}>
      <Header/>
      <LaunchComp/>
      <Footer/>
      </div>
    )
}

export default Dashboard