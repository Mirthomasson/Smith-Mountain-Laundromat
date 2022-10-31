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

  function message(e) {
    e.preventDefault();
    
    if (navigator.userAgent.match(/(Android)/i|/(iPhone)/i)) {
       window.open('sms://5405216141');
    }
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
         <p>The best place at</p>
         <p>Smith Mountain Lake</p>
         <p>to wash your dirty laundry.</p>
         <p>Come see us!</p>
        </HeroP>
        <HeroBtnWrapper>
          <Button onClick={message} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Message Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};


export default HeroSection;
