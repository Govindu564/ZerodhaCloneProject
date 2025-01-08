// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';

// function Menu() {
//     const [selecteMemu,setSelecteMemu] = useState(0);
//     const [isprofileDropdownOpen,setIsprofileDropdownOpen] = useState(false);
    
//     const handleProfileClick = (index)=>{
//         setIsprofileDropdownOpen(!isprofileDropdownOpen);
//     };
//     const handleMenuClick = (index)=>{
//         setSelecteMemu(index);
//     };
    
//     const menuClass = "menu";
//     const activeMenuClass = "munu selected";

//     return ( 
//         <div className='menu-container'>
//             <img className='kite-logo' src='media/images/kite-logo.svg' alt='kite-logo'/>
//             <div className='menus'>
//                 <ul>
//                     <li>
//                         <Link style={{textDecoration:"none"}} to="/" >
//                            <p>Dashboard</p>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link style={{textDecoration:"none"}} to="/orders" >
//                            <p>Orders</p>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link style={{textDecoration:"none"}} to="/holdings" >
//                            <p>Holdings</p>
//                         </Link>
                    
//                     </li>
//                     <li>
//                         <Link style={{textDecoration:"none"}} to="/positions" >
//                            <p>Positions</p>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link style={{textDecoration:"none"}} to="/funds" >
//                            <p>Funds</p>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link style={{textDecoration:"none"}} to="/apps" >
//                            <p>Apps</p>
//                         </Link>
//                     </li>
//                 </ul>
//                 <hr/>
//                 <div className='profile'>
//                     <div className='avatar'>UI </div>
//                     <p className='username'>USEERID</p>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Menu;


import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
       <img className='kite-logo' src='media/images/kite-logo.svg' alt='kite-logo'/>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;