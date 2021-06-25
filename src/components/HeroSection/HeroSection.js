import React from 'react'
import { HeroBg , HeroContainer, VideoBg, HeroContent , HeroH1, HeroP , ArrowForward , ArrowRight, HeroBtn } from './HeroSectionStyling';
import Video from '../../videos/video.mp4';
import {Button} from '../Elements/Button'

const HeroSection = (props) => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcom to our server</HeroH1>
                <HeroP> 
                    e Lorem Ipsum est simplement du faux texte employé dans la 
                    composition et la mise en page avant impression. 
                    Le Lorem Ipsum est le faux .
                     </HeroP>
                <HeroBtn>
                    <Button to='about' 
                    onMouseEnter={props.onHover} 
                    onMouseLeave={props.onHover} 
                    primary='true'
                    dark='true'>About us {props.hover ? <ArrowForward/> : <ArrowRight/> }</Button>
                </HeroBtn>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
 