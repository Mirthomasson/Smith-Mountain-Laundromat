import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import { animateScroll as scroll } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
  const toggleLocation = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      scroll.scrollTo(5000, 500);
    } else {
      scroll.scrollTo(5200, 500);
    }
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='about' onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to='services' onClick={toggle}>
                Services
            </SidebarLink>
            <SidebarLink to='safety' onClick={toggle}>
                Safety
            </SidebarLink>
            <SidebarLink to='sanitation' onClick={toggle}>
                Sanitation
            </SidebarLink>
            <SidebarLink to='location' onClick={toggle} offset={-120}>
                Location
            </SidebarLink>

        <SideBtnWrap>
             <SidebarRoute onClick={toggleLocation} to='location'>Message Us</SidebarRoute> 
        </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
