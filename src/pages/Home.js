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


    const toggle = () => {
        setIsOpen(!isOpen);
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
    const policelink = () => {
        window.location = "https://docs.google.com/forms/d/1pwwQGcCgEB_YWChh1XAo_kD4dKoiFmQqWeYmXt4kYuQ/edit"
    }
    const stremerlink = () => {
        window.location = "https://docs.google.com/forms/d/1pwwQGcCgEB_YWChh1XAo_kD4dKoiFmQqWeYmXt4kYuQ/edit"
    }


    return (
        <>
     
        <Sidebar isOpen={isOpen} toggle={toggle}/ >
         <Navbar toggle={toggle}/>
         <Route path='/' exact>
            <HeroSection hover={hover} onHover={onHover} />
         </Route>  
         <Route path='/rules' exact component={Rules}/>
         <Route path='/streamers' exact component={streamers}/>   
         <Route path='/about' exact component={About}/>  
          
         <Route path='/Application' exact >
            <Application  links={links} ganglink={ganglink}/>
         </Route>  

        </>
    )
}

export default Home
