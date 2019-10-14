import React from 'react';
import  CartItem from './CartItem'
import CartHead from './CartHead';


const CartList = ({value}) => {
    
    const {cart } = value;
   
    return ( 
        <div>
           {cart.map( item => {
              return <CartHead key = {item.id} item = {item} value = {value}/>
           } ) }
           
        </div>
     );
}
 
export default CartList;