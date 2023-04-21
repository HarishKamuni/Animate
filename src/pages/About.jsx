import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useCustomContext } from '../Context'

const About = () => {
  const {updateAboutPage} = useCustomContext();

  useEffect(()=>{
    updateAboutPage();
  },[])
  return (
    <HeroSection />
  )
}

export default About