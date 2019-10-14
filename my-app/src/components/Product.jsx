import React, { Component } from 'react';
import Styled from 'styled-components';
import '../App.css'
import {Link} from 'react-router-dom';
import logo from '../cart.svg';
import {ButtonContainerIn} from './ButtonStyle';
import {ProductConsumer} from './Context';



class Product extends Component {
   
    render() { 
        const {id, title, img, price,  info, inCart} = this.props.product;
        return ( 
           <div className = 'col-9 mx-auto col-md-6 col-3 m-3  ' >
               
                         
               <div className="row m-2">
                 <ul className="list-group shadow">
                     
                           <li className="list-group-item">
                               <div className="media align-items-lg-center p-3 d-flex ">
                                   <div className="media-body order-2 order-lg-1">
                                       <h5 className="mt-0 font-weight-bold mb-2">
                                            
                                            {title}  
                                        </h5>
                                       <p className="font-light text-muted mb-0 small">
                                            {info}
                                       </p>
                                <ProductConsumer>
                                    {(value) => (
                                                 <div className="d-flex align-items-center justify-content-between 
                                                    mt-1">
                                                 <h5 className="font-weight-normal "> 
                                                        <span className = 'money' >$</span> 
                                                        {price} </h5>
                                                 
                                                  
                                                 
                                                  <div className=" card-img-top img-container p-5"  >
                                                 
                                                              
                                                    <ButtonContainerIn  disabled = { inCart ? true : false } 
                                                        onClick = { () =>  value.addToCart(id) }>
                                                                  { inCart ? (<p className="text-capitalize mb-0" disabled >
                                                                      {''}
                                                                  in cart
                                                                  </p>) : ( <Link to = '/' ><img src={logo} alt="" className = 'img-fluid'  /></Link>)}
                                                    </ButtonContainerIn>              
                                                                
                                                </div>                
                                                                 
                                                <div>
                                                      <Link to = '/' >
                                                        <img 
                                                         src= {img} 
                                                        alt="Generic placeholder image"  width = '150'
                                                        className = 'ml-lg-5 order-1 order-lg-2 rounded ' />
                                                      </Link>
                                                      
                                                  </div>                        
                                                    
                                                                 
                                                                   
                                                  
                                                  
                                              </div>
                                    )}
                                      
                                        </ProductConsumer>
                                   </div>
                               </div>
                           </li>
                       </ul>
                 </div>


               
               
                
           </div>
         );
    }
}
 
export default Product;


