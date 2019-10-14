import React, { Component } from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ButtonContainerIn,ModalContainer } from './ButtonStyle';
import {ProductConsumer} from './Context';
import logo from '../cart.svg';



class Modal extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                { (value) => {
                    const {openModal, closeModal} = value;
                    const {img, title, price, id, inCart} = value.modalProduct;

                    if (!openModal) {
                        return null;
                    } else {
                       return( <ModalContainer>
                           <div  className = 'col-9  col-md-6 col-3   ' >
                                <div className = 'row ' >
                                    <ul className = 'list-group shadow' >
                                        <li className = 'list-group-item' >
                                            <div className = 'media align-items-lg-center p-3 d-flex' >
                                                <div className = 'media-body order-2 order-lg-1' >
                                                    <h5 className = 'mt-0 font-weight-bold mb-2 text-center' >
                                                            Iphone 11 pro
                                                    </h5><br/>

                                                    <div className = 'd-flex align-items-center justify-content-between mt-1' > 
                                                        <div className = 'container' >
                                                                <img className = 'rounded' src= 'Assets/1.jpg' alt=""/>
                                                        </div>
                                                                                                 
                                                    </div><br/>

                                                    <h5 className="font-weight-normal text-center "> 
                                                            <span className="">
                                                                    $
                                                            </span>
                                                            {12400} 
                                                    </h5><br/> 
                                                   

                                                    <div className = 'container' >
                                                       <Link to = '/' >
                                                        <ButtonContainerIn>
                                                            <span>Goto Product</span>
                                                        </ButtonContainerIn>
                                                       </Link>
                                                    </div>

                                                    {/* <div className = 'container d-flex ' >
                                                        <ButtonContainerIn  disabled = { inCart ? true : false } 
                                                               onClick = { () =>  value.addToCart(id) 
                                                                 
                                                                  
                                                                }>
                                                                  
                                                                  { inCart ? (<p className="text-capitalize mb-0" disabled >
                                                                      {''}
                                                                  in cart
                                                                  </p>) : ( <Link to = '/' ><img src={logo} alt=""  /><span>Add</span></Link>)}
                                                                      
                                                        </ButtonContainerIn>
                                                    </div> */}

                                                </div>

                                            </div>

                                        </li>

                                    </ul>
                                </div>
                           </div>
                        </ModalContainer>)
                    }
                } }
            </ProductConsumer>
         );
    }
}


 
export default Modal;