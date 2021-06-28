import React from 'react'
import { StreamersContainer , Title , TitleH1 , Streamerss,
    StreamerCard,
    Card,
    ImgDiv,
    Bio,
    BioTitle,
    BioP,
    TwitchBtn} from './StylingStreamers';
    import streamer from '../../images/card1.jpeg'
const Streamers = () => {
    return (
        <StreamersContainer>
            <Title>
                <TitleH1>Streamers</TitleH1>
            </Title>
            <Streamerss>
                <StreamerCard>
                    <Card>
                        <ImgDiv>
                            <img src={streamer} style={{width: '100%', height: '150px'}} alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Khalil azaiez</BioTitle>
                            <BioP>a 20 years old tn streamer trying to have fun and zho why because slm</BioP>
                        </Bio>
                        <TwitchBtn>Twitch</TwitchBtn>
                    </Card>
                </StreamerCard>

                <StreamerCard>
                    <Card>
                        <ImgDiv>
                            <img src={streamer} style={{width: '100%', height: '150px'}} alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Khalil azaiez</BioTitle>
                            <BioP>a 20 years old tn streamer trying to have fun and zho why because slm</BioP>
                        </Bio>
                        <TwitchBtn>Twitch</TwitchBtn>
                    </Card>
                </StreamerCard>

                <StreamerCard>
                    <Card>
                        <ImgDiv>
                            <img src={streamer} style={{width: '100%', height: '150px'}} alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Khalil azaiez</BioTitle>
                            <BioP>a 20 years old tn streamer trying to have fun and zho why because slm</BioP>
                        </Bio>
                        <TwitchBtn>Twitch</TwitchBtn>
                    </Card>
                </StreamerCard>

                <StreamerCard>
                    <Card>
                        <ImgDiv>
                            <img src={streamer} style={{width: '100%', height: '150px'}}  alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Khalil azaiez</BioTitle>
                            <BioP>a 20 years old tn streamer trying to have fun and zho why because slm</BioP>
                        </Bio>
                        <TwitchBtn>Twitch</TwitchBtn>
                    </Card>
                </StreamerCard>

                <StreamerCard>
                    <Card>
                        <ImgDiv>
                            <img src={streamer} style={{width: '100%', height: '150px'}} alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Khalil azaiez</BioTitle>
                            <BioP>a 20 years old tn streamer trying to have fun and zho why because slm</BioP>
                        </Bio>
                        <TwitchBtn>Twitch</TwitchBtn>
                    </Card>
                </StreamerCard>

                <StreamerCard>
                    <Card>
                        <ImgDiv>
                            <img src={streamer} style={{width: '100%', height: '150px'}} alt='streamer pic'/>
                        </ImgDiv>
                        <Bio>
                            <BioTitle>Khalil azaiez</BioTitle>
                            <BioP>a 20 years old tn streamer trying to have fun and zho why because slm</BioP>
                        </Bio>
                        <TwitchBtn>Twitch</TwitchBtn>
                    </Card>
                </StreamerCard>
            </Streamerss>
        </StreamersContainer>
    )
}

export default Streamers
