import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import Logo from './FAVICONfloating.png';
import { animateScroll as scroll } from 'react-scroll';



const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  };

  const toggleLocation = () => {
    scroll.scrollTo(4350, 500)
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          <img src={Logo} alt="logo" height="90" width="90"/>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              About
            </NavLinks>
          </NavItem>
        <NavItem>
            <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="safety" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Safety
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="sanitation" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Sanitation
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="location" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Location
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={toggleLocation} to="/" smooth={true} duration={500} spy={true} exact='true' >Contact Us</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
