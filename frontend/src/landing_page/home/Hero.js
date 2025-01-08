
import React from 'react';
function Hero() {
    return ( 
        <div className='container m-5 p-5' >
            <div className='row text-center'>
                <img src="media/images/homeHero.png" alt='image' className='mb-5 col-8' style={{margin:" auto"}}></img>
                <h1 className='mt-3 '>Invest in everything</h1>
                <p className="mt-2">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button class="btn btn-primary mt-5 mb-5 fs-5" style={{width:"18%",margin:" auto"}} type='button'>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;

