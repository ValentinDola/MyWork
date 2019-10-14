import React, { Component } from 'react';
import '../App.css';
import Product from './Product';
import NavBar from './Navbar';
import Title from './Title';
import {ProductConsumer} from './Context';


class ProductList extends Component {
   
    render() { 
        
        return ( 
            <React.Fragment>
                 <div className = ' m-2 py-3' >
                    <div className="container">
                        <Title  name = 'Our' title = ' Products'  />
                        <div className="row">
        
                                
                              <ProductConsumer>
                                    {value => {
                                        return value.products.map( product => {
                                            return <Product key = {product.id} product = {product}/>
                                              
                                        } )
                                        
                                        
                                    }}
                                </ProductConsumer>
                            
                          
                        </div>
                    </div>
                 </div>
            </React.Fragment>
        //   
         );
    }
}
 
export default ProductList;