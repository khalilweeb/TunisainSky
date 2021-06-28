import Styled from "styled-components";


export const StreamersContainer = Styled.div`
     
        background: #141414;
        height:auto;
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        align-items: center;


` 

export const Title = Styled.div`
        color: #fff;
`
export const TitleH1 = Styled.h1`
        text-align: center;
        padding: 2rem;
`

export const Streamerss = Styled.div`
        display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2rem;
    grid-gap: 2rem;
    @media screen and (max-width: 1200px) {
    
    
        display: grid;
        grid-tempLate-columns: repeat(2, 1fr);
        
          
    }
    @media screen and (max-width: 900px) {
    .
        display: grid;
        grid-tempLate-columns: auto;
         
    
}

`
export const StreamerCard = Styled.div`
    position: relative;
    width:320px;
    height: 330px;
    color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    transition: all .8s ease;
    cursor: pointer;
        &:hover {
                transform: translateY(-1rem);
                transition: all .8s ease;       
        }
`
export const Card = Styled.div`

`
export const ImgDiv = Styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    opacity: 0.7;
    &:hover {
        opacity: 1;       
        }
`


export const Bio = Styled.div`
    padding: 0 1rem;
    height: 100%;
    position: relative;
    margin-top: 20px;
`
export const BioTitle = Styled.h3`
        color: #fff;
        padding-bottom:  10px;
        font-family: 'Prompt', sans-serif;

`
export const BioP = Styled.p`
        color: #fff;
        margin-top: 10px;
       
`

export const TwitchBtn = Styled.button`
        width: 100%;
    outline: none;
    border: none;
    position: absolute;
    bottom: 0;
    opacity: 0.7;
    cursor: pointer;
    background: #01bf71;
    text-align: center;
    padding: .3rem .5rem;
    transition: all .5s ease;
    &:hover {
        opacity: 1;       
        }
        
`