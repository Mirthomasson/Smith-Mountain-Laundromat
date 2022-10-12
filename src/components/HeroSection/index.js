import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroLogo, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, Img } from './HeroElements';
import { Button } from '../ButtonElement';
import  Logo  from '../../images/logo-shadow.png';

const HeroSection = (src, alt) => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroLogo>
          <Img src={Logo} alt="Logo"  />
        </HeroLogo>
        <HeroP>
         The best place at Smith Mountain Lake to wash your dirty laundry.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Contact Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
