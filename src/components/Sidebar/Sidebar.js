import React from 'react'
import { SideBarContainer, Icon , CloseIcon , SideBarWrapper , SideBarLink , SideBtn , SideBarRoute , SideBarMenu} from './sidebarStyling';
const Sidebar = (props) => {
    return (
        <SideBarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon/>
            </Icon >
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='/rules'> Rules </SideBarLink>
                    <SideBarLink to='/Application'> Application </SideBarLink>
                    <SideBarLink to='/Category'> Category</SideBarLink>
                    <SideBarLink to='/Shop'> Shop</SideBarLink>
                </SideBarMenu>
                <SideBtn>
                    <SideBarRoute to='/About'>
                        About
                    </SideBarRoute>
                </SideBtn>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar
