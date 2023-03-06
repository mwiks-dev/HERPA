import React from 'react';

import { heroSlider } from '../../assets/data/Data'
import CausesSection from '../../Components/sections/CausesSection';
import FeatureSection from '../../Components/sections/FeatureSection';
import HeroSection from '../../Components/sections/HeroSection'

const Home = () => {
  return (
    <>
        <HeroSection slider={heroSlider}/>
        {/* <FeatureSection /> */}
        {/* <CausesSection /> */}
    </>
  )
}


export default Home
