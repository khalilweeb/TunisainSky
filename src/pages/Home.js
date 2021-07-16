import React , {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import { Route } from 'react-router-dom';
import Rules from '../components/Ruules/Rules';
import streamers from '../components/Streamers/Streamers';
import About from '../components/About/About';
import Application from '../components/Application/Application';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hover, sethover] = useState(false);
    const [issOpen, setIssOpen] = useState(false);

    const toggle = () => {
       
        setIsOpen(!isOpen);
    }
    const toggleRules = () => {
       
        setIssOpen(!issOpen);
    }

    const onHover = () => {
        sethover(!hover);
    }

    const links = () => {
        window.location = "https://docs.google.com/forms/d/1pwwQGcCgEB_YWChh1XAo_kD4dKoiFmQqWeYmXt4kYuQ/edit"
    }
    const ganglink = () => {
        window.location = "https://docs.google.com/forms/u/2/d/1Z2eETyPdKrO9Yj2XgXEpfuTbXfjFXawm-sJvAozMj10/edit?usp=forms_home&ths=true"
    }
    const policeLink = () => {
        window.location = "https://docs.google.com/forms/d/1pwwQGcCgEB_YWChh1XAo_kD4dKoiFmQqWeYmXt4kYuQ/edit"
    }
    const stremerLink = () => {
        window.location = "https://docs.google.com/forms/d/1pwwQGcCgEB_YWChh1XAo_kD4dKoiFmQqWeYmXt4kYuQ/edit"
    }
    const [issOpen1, setIssOpen1] = useState(false);

  
    const toggleRules1 = () => {
       
        setIssOpen1(!issOpen1);
    }
    const [issOpen2, setIssOpen2] = useState(false);

  
    const toggleRules2 = () => {
       
        setIssOpen2(!issOpen2);
    }

    const [issOpen3, setIssOpen3] = useState(false);

  
    const toggleRules3 = () => {
       
        setIssOpen3(!issOpen3);
    }
    const [issOpen4, setIssOpen4] = useState(false);

  
    const toggleRules4 = () => {
       
        setIssOpen4(!issOpen4);
    }


    const [issOpen5, setIssOpen5] = useState(false);

  
    const toggleRules5 = () => {
       
        setIssOpen5(!issOpen5);
    }
    return (
        <>
     
        <Sidebar isOpen={isOpen} toggle={toggle}/ >
         <Navbar toggle={toggle}/>
         <Route path='/' exact>
            <HeroSection hover={hover} onHover={onHover} />
         </Route>  
         {/* <Route path='/rules' exact component={Rules}/> */}
         <Route path='/rules' exact >
            <Rules  issOpen={issOpen} toggleRules={toggleRules}
             issOpen1={issOpen1} toggleRules1={toggleRules1}
             issOpen2={issOpen2} toggleRules2={toggleRules2}
             issOpen3={issOpen3} toggleRules3={toggleRules3}
             issOpen4={issOpen4} toggleRules4={toggleRules4}
             issOpen5={issOpen5} toggleRules5={toggleRules5}/>
         </Route>  

         <Route path='/streamers' exact component={streamers}/>   
         <Route path='/about' exact component={About}/>  
          
         <Route path='/Application' exact >
            <Application  links={links} ganglink={ganglink}
            policeLink={policeLink}
            stremerLink={stremerLink}/>
         </Route>  

        </>
    )
}

export default Home
