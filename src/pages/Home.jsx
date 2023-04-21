import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useCustomContext } from '../Context'
import Service from "./Service";
import Contact from "./Contact"

const Home = () => {
  const {updateHomePage} = useCustomContext();
  useEffect(()=>{
    updateHomePage();
  },[])
  return (
    <>
     <HeroSection />
     <Service/>
     <Contact/>
    </>
  )
}

export default Home