import Styled from "styled-components";

export const AppContainer = Styled.section`
    width: 100%;
    height: 100%;
  
    display: grid;
    grid-template-columns: auto;
    
    @media screen and (max-width: 1020px) {
    
    height: 180vh;
   
     

}

`  

export const AppImgContainer = Styled.section`
    width: 100%;
    height: 100%; 
    position: absolute;
    
`
export const Image = Styled.img`
    width: 100%;
    height:100%;
    --o-object-fit: cover;
    object-fit: cover;
    
    
`

export const ApplicationContainer = Styled.div`
        
        background: #141414;
        height:auto;
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        align-items: center;


` 

export const Title = Styled.div`
        color: #fff;
        z-index: 2;
        
        
`
export const TitleH1 = Styled.h1`
        text-align: center;
        padding: 2rem;
        font-size: 60px;
        color:  #fff;
        font-family: 'Roboto', sans-serif;
      
`

export const App = Styled.div`
        display: grid;
    grid-template-columns: repeat(4, 1fr);
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
export const AppCard = Styled.div`
    position: relative;
    background: rgba(20,20,20,1);
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
        text-align: center;
        

`
export const BioP = Styled.p`
        color: #fff;
        margin-top: 10px;
        text-align: center;
       
`

export const CardImg = Styled.img`
           width: 100%;
    height: 170px;
    --o-object-fit: cover;
    object-fit: cover;
`

export const AppBtn = Styled.button`
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