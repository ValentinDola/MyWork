import React from 'react';
import {Link} from 'react-router-dom';
import './cart.css';
import Logo from '../ship3.svg';
import {ButtonContainerClear} from '../ButtonStyle';

const CheckOut = ( { value} ) => {
    const {cartSubTotal, cartTax, cartTotal, clear, cartShipping } = value;
    return ( 
        <div>
            <Link to = '/' >
                <div className=" p-2 px-3 ml-5 ">
                    <ButtonContainerClear onClick = { () => { clear()
                     }}
                    className=" text-capitalize font-weight-light now ">
                        Clear Cart
                    </ButtonContainerClear>
                </div>
                
            </Link>
            
            <div className=" move row py-5 p-4 bg-white m-4 rounded shadow-sm ">
               
                

                <div className="col-lg-6">
                   
                    <div style = {{ fontSize : '1.3rem' }} className="bg-light rounded-pill px-4 py-3
                      text-capitalize font-weight-normal">
                        Order summary
                    </div>
                        <p className="font-italic m-4">
                    
                        Shipping and additional costs are calculated based on values you have entered.
                      
                        </p>
                        <ul className="list-unstyled mb-4">
                            <li className="d-flex justify-content-between py-3 border-bottom">
                                <strong style = {{ fontSize : '1.1rem' }} 
                                className="font-weight-normal"> Order Subtotal </strong>
                                <strong>$ {cartSubTotal} </strong>
                            </li>
                            <li className="d-flex justify-content-between py-3 border-bottom">
                                <strong style = {{ fontSize : '1.1rem' }} 
                                className=" font-weight-normal "> Delivery and Handling </strong>
                                <strong>$ {cartShipping} </strong>
                            </li>
                            <li className="d-flex justify-content-between py-3 border-bottom">
                                <strong style = {{ fontSize : '1.1rem' }} 
                                className="font-weight-normal"> Tax </strong>
                                <strong>$ {cartTax} </strong>
                            </li>
                            <li className="d-flex justify-content-between py-3 ">
                                <strong style = {{ fontSize : '1.1rem' }} 
                                className="font-weight-normal"> Total </strong>
                                <h5 className= 'font-weight-bold' >$ {cartTotal} </h5>
                            </li>

                        </ul><a onClick = { () => console.log('check out') } 
                            style = {{ fontSize : '1.2rem' }} href="" 
                            className = 'btn btn-dark rounded-pill py-2 btn-block' >
                                Proceed to CheckOut with
                                PayPal or Visa

                            </a>
                           
                </div>

                <div className="col-lg-6" >
                     <img src= {Logo} alt="" width = '500'className = 'ship' />
                </div>
            </div>
               
        </div>
     );
}
 
export default CheckOut;

