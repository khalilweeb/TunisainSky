import styled from "styled-components";


export const RulesContainer = styled.section`
     

         background: #000;
        width: 100%;
        height: 100%;

` 

export const RulesH1 = styled.h1`
    padding: 40px 0;
    color: #fff;
    
    font-size: 48px;
    text-align: center;
    font-weight: bold;
    font-family: 'Cinzel', serif;
font-family: 'Jost', sans-serif;

    @media screen and (max-width:768px) {
        font-size: 40px;
    }
    @media screen and (max-width:480px) {
        font-size: 32px;
    }
        
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: auto ;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 100px;
    
    

`

 export const  Card = styled.div`
    
    padding: 20px;
    width: 500px;
    background: #01bf71 ;
    border-radius: 15px;
    transition: 0.8s all ease;
    
    &:hover {
        
        box-shadow: rgba(127, 255, 0, 0.5) 0px 7px 29px 0px;
       
    } 
    @media screen and (max-width:930px) {
        width: 90%;
        margin-left: 1.5rem;
        }
 
 `

export const  CardH1 = styled.h1`
    color: #fff;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    font-family: 'Cinzel', serif;
font-family: 'Jost', sans-serif;
font-family: 'Staatliches', cursive;


`

export const CardContent = styled.div`
    transition: 0.9s ease-in-out;
        display: ${({ issOpen }) => (issOpen ? 'block': 'none')}; 
        top:  ${({ issOpen }) => (issOpen ? '0': '-100%')};
    padding: 10px;

`
 export const CardP = styled.p`
    font-family: 'Cinzel', serif;
font-family: 'Jost', sans-serif;
    margin-bottom: 10px;
    font-weight: bold;
 `


