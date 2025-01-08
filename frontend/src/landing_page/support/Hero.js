import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-5' id="supportRow">
                   <h3 className='fs-4' style={{color:"#FFFFFF"}}>Support Portal</h3>
                   <a href='' style={{color:"#FFFFFF"}} >Track tickets</a>
            </div>
            <div className='row p-4' id="supportRow">
                <div className='col-6 '>
                    <h1 className='fs-4 mt-4 p-2 mb-4' >Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-3' style={{width:"580px" ,height:"60px"}} placeholder='Eg:how do i activate F&Q ,why is my order getting rejected .... ' /><br></br>
                    <a  href=''>Track account opening </a>
                    <a  href=''>  Track segment activation</a>
                    <a  href=''>Intraday margins</a>
                    <a  href=''> Kite user manual</a>
                </div>
                <div className='col-6  mb-5'>
                    <h1 className='fs-4'>Featured</h1>
                    <p >Today is a settlement holiday on account of Eid-e-Milad, your account balance will not include the following credits on Sept 18, 2024:</p>
                    <ul>
                        <li>Intraday profits made in the Equity segment on Sept 17, 2024.</li>
                        <li>Credits from trades made in NFO, Currency, and Commodity derivatives on Sept 17, 2024. This will include options premium credits, futures M2M profits, etc. <a href=''>Read more.</a></li>
                    </ul>
                </div>
            </div>
        </section>
     );
}

export default Hero;