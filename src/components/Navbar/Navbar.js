import React from 'react'
import Aux from '../HOC/Aux';
import {FaBars} from 'react-icons/fa';
import Logo from '../../images/ts-1.png'
import { Nav,NavContainer ,
     NavLogo ,MobileIcon, 
      NavMenu, NavItem, 
      NavLink , NavBtn, NavBtnLink } from './navbarStyling';
      
      
const Navbar = (props) => {
    return (
        <Aux>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'> <img src={Logo} alt='logo' style={{width:'90px' , height: '100%'}}/> </NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='/rules'>Rules</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/Application'>Application</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/Category'>Category</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/streamers'>streamers</NavLink>
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
