import React , {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import { Route } from 'react-router-dom';
import Rules from '../components/Ruules/Rules';
import streamers from '../components/Streamers/Streamers'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hover, sethover] = useState(false);


    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const onHover = () => {
        sethover(!hover);
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

            

        </>
    )
}

export default Home
