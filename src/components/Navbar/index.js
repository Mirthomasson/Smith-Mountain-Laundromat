import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import Logo from './FAVICONfloating.png';



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

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={Logo} alt="logo" height="90" width="90"/>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
            <NavLinks to="about">
              About
            </NavLinks>
          </NavItem>
        <NavItem>
            <NavLinks to="services">
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="safety">
              Safety
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="sanitation">
              Sanitation
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="location">
              Location
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact">Contact Us</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
