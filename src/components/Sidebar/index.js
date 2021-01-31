import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
        SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElement'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarRoute to="/catalogue">
                        Catalogue
                    </SidebarRoute>
                    <SidebarRoute to="/help">
                        Help
                    </SidebarRoute>
                    <SidebarRoute to="/info">
                        Information
                    </SidebarRoute>
                    <SidebarRoute to="/contact">
                        Contact us
                    </SidebarRoute>
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