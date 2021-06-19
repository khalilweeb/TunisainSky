import React from 'react'
import Aux from '../HOC/Aux';
import {FaBars} from 'react-icons/fa';
import { Nav,NavContainer , NavLogo , MobileIcon, NavMenu, NavItem, NavLink , NavBtn, NavBtnLink } from './navbarStyling';


const Navbar = () => {
    return (
        <Aux>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>TS</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='rules'>Rules</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='Application'>Application</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='Category'>Category</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='Shop'>Shop</NavLink>
                        </NavItem>


                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='about'>About</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </Aux>
    )
}

export default Navbar