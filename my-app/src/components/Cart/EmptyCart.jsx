import React from 'react';
import './cart.css'

const EmptyCart = () => {
    return ( 
        <div className = 'container mt-5' >
            <div className="row">
                <div className="col-10 mx-auto text-center text-title  ">
                    <h1 className = 'font-weight-light' >Your cart is currently empty <br/>
                     Please add one of Our Products </h1>
                </div>
            </div>
        </div>
     );
}
 
export default EmptyCart;