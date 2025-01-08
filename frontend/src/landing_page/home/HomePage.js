import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <div>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </div>
     );
}

export default HomePage;