import React from 'react';
import Trash from '../Trashnew.svg';


const CartHead = ({item, value}) => {
    const {id, img, count, price, total, title, } = item;
    const {increment, decrement, remove} = value;
    return ( 
        <div className = 'container-fluid' >
        <table className="table">
            <thead >
                <tr>
                    <th scope = 'col' className="  rounded border-0 bg-light ">
                        <div className="p-1 px-3 font-weight-light text-center">
                            Product
                        </div>
                    </th>
                    <th scope = 'col' className=" rounded border-0 bg-light">
                        <div className="p-2 px-3 font-weight-light text-center">
                            Price
                        </div>
                    </th>
                    <th scope = 'col' className=" rounded border-0 bg-light">
                        <div className="p-2 px-3 font-weight-light text-center">
                            Quantity
                        </div>
                    </th>
                   
                    <th scope = 'col' className="  rounded border-0 bg-light">
                        <div className="p-2 px-3 font-weight-light text-center">
                            Remove
                        </div>
                    </th>
                    <th scope = 'col' className="  rounded border-0 bg-light">
                        <div className="p-2 px-3 font-weight-light text-center">
                            Total Price
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody >
                    <tr  >
                        <th scope = 'row' className="border-0">
                            <div className="p-2">
                                <img src= {img} alt="product" width = '70' 
                                className = 'rounded ' />
                                <div  className="ml-3 d-inline-block align-middle  Pr ">
                                    <h5 className="mb-0 text-center "> 
                                      {title}
                                    </h5>
                                </div>
                            </div>
                        </th>
                        <td className="border-0 align-middle text-center Pr "> <h5>
                         ${price}
                        </h5> </td>
                        <td className="border-0 align-middle text-center ">
                            <button onClick = { () =>  decrement(id) } 
                                
                            
                            className="btn bg-dark m-3 "> <span>-</span> </button>
                            
                                    <strong >
                                       
                                        {count}
                                    </strong> 
                                     
                                     
                                    
                                   
                                
                            <button onClick = { () =>  increment(id) } 
                                
                           
                            className="btn bg-dark m-3 "> <span>+</span> </button>
                        </td>
                        
                        <td className="border-0 align-middle text-center Pr "> <a href = '#' > 
                        <img onClick = { () =>  remove(id)
                            
                         } src= {Trash}  alt="Remove" 
                        width = '25' /> </a>  </td>
                        <td className="border-0 align-middle text-center Pr "> <h5> ${total} </h5> </td>
                    </tr>
                </tbody>
           
            
        </table>
    </div>
     );
}

// const CartBody = () => {
//     return ( 
//         <div>
            
//         </div>
//      );
// }
 

 
export default CartHead  ;