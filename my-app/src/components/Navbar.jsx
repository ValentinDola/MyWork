import React, { Component } from 'react';
import '../App.css'
import {Link} from 'react-router-dom';
import logo from '../logod.svg';
import cartlogo from '../cart.svg';
import {ButtonContainer} from './ButtonStyle';
import { StoreProducts  } from '../data';
import {ProductConsumer} from './Context';



class NavBar extends Component {
    
    render() { 
    //   const {id} = this.props.product;
        return ( 
            <ProductConsumer>
                { (value) => (
                    // const {cart} = value;

                    <div  >
                    <nav className="navbar navbar-expand-sm 
                        bg-dark rounded m-2 navbar-dark px-sm-5">
                        <Link to = '/' >
                            <img src={logo} alt="Logo" 
                            className = 'navbar-brand' />
                            
                        </Link>
                        <ul className="navbar-nav align-item-center">
                            <li className="nav-item ml-5">
                                <Link to = '/' className = 'nav-link font-weight-light'  >
                                    Products
                                </Link>
                                
                            </li>
                            
                        </ul>

                        
                        
                                    <Link to = '/cart' className = 'ml-auto' >
                                    
                                        <ButtonContainer onClick = { () => console.log( 'Access the cart' ) } >
                                            <span className="mr-2">
                                                <img src={cartlogo} alt=""/>
                                            </span>
                                            <span className = 'font-weight-light' > 
                                                my cart
                                            </span>
                                            
                                        </ButtonContainer>
                                        
                                            <span className="badge">
                                                {/* { () => {value.cart}  } */}
                                            </span>
                                
                                    </Link>
                    </nav>

                    </div>

                 ) }
            
            </ProductConsumer>
                    
                  
                                 
                                  
                             
                             
                              
                                 
                              
                       
            
         );
    }
}


 
export default NavBar;