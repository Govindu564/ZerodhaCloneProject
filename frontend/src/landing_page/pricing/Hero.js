import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5 mt-5 border-bottom'>
                <h1>Pricing</h1>
                <h4 className='text-muted fs-5 mt-2 mb-5'>Free equity investments and flat ₹20 intraday and F&O trades</h4>
            </div>
            <div className='row p-5  text-center border-bottom  mb-5'>
                <div className='col-4 p-5'>
                    <img style={{width:"80%"}} src='media/images/pricingEquity.svg' alt='onerupee' />
                    <h1 className='fs-3 text-muted'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img style={{width:"80%"}} src='media/images/intradayTrades.svg' alt='onerupee' />
                    <h1 className='fs-3 text-muted'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4  p-5'>
                    <img style={{width:"80%"}} src='media/images/pricingEquity.svg' alt='onerupee' />
                    <h1 className='fs-3 text-muted'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
