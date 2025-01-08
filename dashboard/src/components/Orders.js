import React from 'react';
function Orders() {
    return ( 
        <div className='orders'>
            <div className='no-orders'>
                <p>you haven't placed any orders today</p>
                <link to={"/"} className='btn'>
                </link>
            </div>
        </div>
    );
};

export default Orders;