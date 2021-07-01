import styled from "styled-components";



export const AboutContainer = styled.section`
    width: 100%;
    height: 100%;
    background: #141414;
    display: grid;
    grid-template-columns: auto;
    @media screen and (max-width: 1020px) {
    
    height: 180vh;
   
     

}
`

export const AboutImgContainer = styled.section`
    width: 100%;
    height: 100%; 
`

export const Image = styled.img`
    width: 100%;
    height: 300px;
    --o-object-fit: cover;
    object-fit: cover;
    
    
`

export const AboutContent = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    @media screen and (max-width: 1020px) {
    
    display: block; 
    width  :100% ;
    position: relative;
    top: -10%;
}


`
export const AboutImgContent = styled.div`
    width: 50%;
    height: 600px;
    padding: 2rem;
    @media screen and (max-width: 1020px) {
    
        display: block; 
        width  :100% ;
}
`
export const ImageContent1 = styled.img`
    width: 100%;
    height: 100%; 
    --o-object-fit: cover;
    object-fit: cover;
`

export const Content = styled.div`

`
export const ContentText = styled.div`

    color: #fff;


`
export const ContentTitle = styled.h1`
        font-family: 'Roboto', sans-serif;
        margin-left: 20px;
        position: relative;  
        font-size     : 25px;
         &::before {
            position: absolute;
            content: '';
            bottom: -5px;
            left: 0;
            width: 200px;
            height: 3px;
            background: #01bf71;
        }
    
`
export const ContentP = styled.p`
    margin: 0 20px;
    color: #fff;
   padding:  2rem 0;
   width: 80%;
`
export const Icons = styled.div`
    padding: 1rem ;
    color: #fff;

    
`
export const Span = styled.span`
    margin: 0 10px;
    cursor: pointer;
    font-size: 20px;
    &:hover{
        color: #01bf71;
    }  
`