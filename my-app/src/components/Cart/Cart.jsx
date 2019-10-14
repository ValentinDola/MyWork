import React, { Component } from 'react';
import './cart.css';
import Title from '../Title';
import {SmallButton} from '../ButtonStyle';
import {ProductConsumer} from '../Context';
import CartHead from './CartHead';
import CartIndik from './CartIndik';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import CheckOut from './cartCheckOut';


class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <ProductConsumer>
                    { value => {
                        const {cart} = value;
                        if (cart.length > 0  ) {
                            return (
                                <React.Fragment>
                                        <Title  name = 'Your' title = ' Cart '/>
                                       
                                        <CartList value = {value} />
                                        <CheckOut value = {value} />
                                </React.Fragment>
                            );
                        }else{
                            return <EmptyCart/>;
                        }
                    } }
                     
                        
                </ProductConsumer>
               
            </section>
         );
    }
}
 
export default Cart;