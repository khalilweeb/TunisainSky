import React from 'react';

import { ApplicationContainer , Title , TitleH1 , CardImg,
    AppCard,
    Card,
    ImgDiv,
    Bio,
    BioTitle,
    BioP,
    AppBtn, App, Image , AppImgContainer} from  './ApplicationStyling'
    import Img from '../../images/wall.jpg';
    import Logo from '../../images/ts-1.png';
    import Police from '../../images/police.png';
    import Gang from '../../images/gang.jpg';
    import Stream from '../../images/stream.jpg';
const Category = (props) => {
    return (
        <>
             <ApplicationContainer>
             <AppImgContainer>
                    <Image src={Img} alt='about img' />
              
                </AppImgContainer>
                <Title>
                <TitleH1>APPLICATIONS</TitleH1>
            </Title>
            <App>
        
                <AppCard>
                    <Card>
                        <ImgDiv>
                            <CardImg src={Logo}  alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Whitelist Application</BioTitle>
                            <BioP>Apply for the whitelist application to become one of our community</BioP>
                        </Bio>
                        <AppBtn onClick={props.links}>Whitelist Application</AppBtn>
                    </Card>
                </AppCard>
              
               
                <AppCard>
                    <Card>
                        <ImgDiv>
                            <CardImg src={Police} style={{width: '100%', height: '150px'}} alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Police Application</BioTitle>
                            <BioP>Want to fight crime? here's the police application</BioP>
                        </Bio>
                        <AppBtn>Police Application</AppBtn>
                    </Card>
                </AppCard>
               
               
                <AppCard>
                    <Card>
                        <ImgDiv>
                            <CardImg src={Gang} style={{width: '100%', height: '150px'}} alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Gang Application</BioTitle>
                            <BioP>Willing to make your gang and fight the system illegaly? fill out our gang application!</BioP>
                        </Bio>
                        <AppBtn onClick={props.ganglink}>Gang Application</AppBtn>
                    </Card>
                </AppCard>
               
                
                <AppCard>
                    <Card>
                        <ImgDiv>
                            <CardImg src={Stream} style={{width: '100%', height: '150px'}} alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Streamer Application</BioTitle>
                            <BioP>Looking to stream on our server? here's the streamer application</BioP>
                        </Bio>
                        <AppBtn>Streamer Application</AppBtn>
                    </Card>
                </AppCard>
               
                </App>
        </ApplicationContainer>
        </>
    )
}

export default Category
