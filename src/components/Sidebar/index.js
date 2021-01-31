import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
        SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElement'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="/catalogue">
                        Catalogue
                    </SidebarLink>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;