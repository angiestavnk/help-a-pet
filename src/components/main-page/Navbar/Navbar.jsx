import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logotype} from './NavbarStyle';
import Logo from '../../../assets/img/logo2.png'
export const Navbar = ({ toggle }) => {
    
    return (
       <>
        <Nav>
            <NavLink to="/">
               <img src={Logo} style={{width: '60px', height: '60px', position: 'relative'}}/>
            </NavLink>
            <Bars onClick={toggle}/>
        <NavMenu>
            <NavLink to="/catalogue" activeStyle>
                Catalogue
            </NavLink>
            <NavLink to="/help" activeStyle>
                How to help us?
            </NavLink>
            <NavLink to="/info" activeStyle>
                Useful information
            </NavLink>
            <NavLink to="/contact" activeStyle>
                Contact us
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
                Sign up
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        </Nav>
        </>
       
    )
}
