import React from 'react'
import AboutImg from '../../images/AboutImg.jpg';
import AboutImg2 from '../../images/ts-1.png';
import {AboutImgContainer, AboutContainer, Image , AboutContent ,
    AboutImgContent,
    ImageContent1,
    Content,
    ContentText,
    ContentTitle,
    ContentP,
    Icons,
Span} from './aboutStyling'
const About = () => {
    return (
        <>
            <AboutContainer>
                <AboutImgContainer>
                    <Image src={AboutImg} alt='about img' />
                </AboutImgContainer>
                <AboutContent>
                <AboutImgContent>
                        <ImageContent1 src={AboutImg2} alt='about img' />
                    </AboutImgContent>
                <Content>

                    <ContentText>
                    
                        <ContentTitle>
                            About us
                        </ContentTitle>
                        <ContentP>
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. <br></br>
                        Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla <br></br>
                        ensemble des morceaux de texte pour réaliser un livre 
                        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique.
                        </ContentP>
                        <Icons>
                            <Span><i class="fab fa-discord"></i></Span>
                            <Span><i class="fab fa-facebook"></i></Span>
                            <Span><i class="fab fa-instagram"></i></Span>
                            <Span><i class="fab fa-youtube"></i></Span>
                        </Icons>
                    </ContentText>
                </Content>
                    
                </AboutContent>
            </AboutContainer>
        </>
    )
}

export default About
