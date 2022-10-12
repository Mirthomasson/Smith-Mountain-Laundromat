import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/AboutSection/Data';


const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...homeObjOne} />
      <AboutSection {...homeObjTwo} />
      <AboutSection {...homeObjThree} />
      <AboutSection {...homeObjFour} />
    </>
  )
}

export default Home;
