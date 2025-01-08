import React from "react";
function Universe() {
  return (
    <div className="container ">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-3 mt-5">
            <img className="mb-3" style={{width:"45%"}} src="media/images/zerodhaFundhouse.png" alt=""/>
            <p className="text-small text-muted"  style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3  mt-5">
            <img className="mb-3" style={{width:"65%"}} src="media/images/sensibullLogo.svg" alt=""/>
            <p className="text-small text-muted"  style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4  p-3 mt-5">
            <img className="mb-3" style={{width:"32%"}} src="media/images/tijori.svg" alt=""/>
            <p className="text-small text-muted"  style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img className="mb-3" style={{width:"40%"}} src="media/images/streakLogo.png" alt=""/>
            <p className="text-small text-muted"  style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img className="mb-3" src="media/images/smallcaselogo.png" alt=""/>
            <p className="text-small text-muted"  style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
            <img className="mb-3" style={{width:"35%"}} src="media/images/dittoLogo.png" alt=""/>
            <p className="text-small text-muted"  style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <button class="btn btn-primary mt-5 mb-5 fs-5" style={{width:"18%",margin:" auto"}} type='button'>Sign up for free</button>
      </div>
    </div>
  );
}
export default Universe;