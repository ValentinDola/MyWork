import React from 'react';
import Trash from '../Trashnew.svg';


const CartItem = ( {item, value} ) => {
    const {id, title, count, price, total, img} = item;
    const {increment, decrement , remove} = value;
    return ( 
        <div className = 'container-fluid' >
           <table className="table">
            <tbody >
                    <tr  >
                        <th scope = 'row' className="border-0">
                            <div className="p-2">
                                <img src={img} alt="product" width = '70' 
                                className = 'rounded ' />
                                <div  className="ml-3 d-inline-block align-middle  Pr ">
                                    <h5 className="mb-0 text-center "> 
                                   {title}
                                    </h5>
                                </div>
                            </div>
                        </th>
                        <td className="border-0 align-middle text-center Pr "> <h5> {price} </h5> </td>
                        <td className="border-0 align-middle text-center ">
                            <button onClick = { () => {
                                decrement(id)
                            } } 
                            className="btn bg-dark m-3 "> <span>-</span> </button>
                            
                                    <strong >
                                    
                                    {count}
                                    
                                    </strong>
                                
                            <button onClick = { () => {
                                increment(id)
                                
                            } } 
                            className="btn bg-dark m-3 "> <span>+</span> </button>
                        </td>
                        <td className="border-0 align-middle text-center Pr "> <h5>$0</h5> </td>
                        <td className="border-0 align-middle text-center Pr "> <a href = '#' > 
                        <img onClick = { () => {
                            console.log('remove')
                        } } src= {Trash}  alt="Remove" 
                        width = '25' /> </a>  </td>
                        <td className="border-0 align-middle text-center Pr "> <h5> {total} </h5> </td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default CartItem;