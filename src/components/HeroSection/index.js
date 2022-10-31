import React, {useState} from 'react';
import Video from '../../videos/washywashy.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroLogo, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, Img } from './HeroElements';
import { Button } from '../ButtonElement';
import  Logo  from '../../images/logo-shadow.png';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroLogo>
          <Img src={Logo} alt="Logo"  />
        </HeroLogo>
        <HeroP>
         The best place at Smith Mountain Lake to wash your dirty laundry. Come see us!
        </HeroP>
        <HeroBtnWrapper>
          <Button id="message" to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Message Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};


export default HeroSection;
