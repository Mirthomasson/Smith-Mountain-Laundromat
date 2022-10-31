import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  function message(e) {
    e.preventDefault();
    
    if (navigator.userAgent.match(/(Android)/i|/(iPhone)/i)) {
       window.open('sms://5405216141');
    }
  }

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
             <SidebarRoute onClick={message} to='location'>Message Us</SidebarRoute> 
        </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
