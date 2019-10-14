import React, { Component } from 'react';
import { StoreProducts,  DetailProduct  } from '../data';


const ProductContext = React.createContext();
// Provider
// Consumer


class ProductsDataProvider extends Component {
    state = { 
        products : [],
        DetailProduct,
        cart : [],
        cartSubTotal : 0,
        cartTax : 0,
        cartTotal : 0,
        cartShipping : 0,
     }

     componentDidMount () {
         this.setProduct();
     }

     setProduct = () => {
         let tempoProduct = [];
         StoreProducts.forEach( item => {
             const singleItem = {...item };
             tempoProduct = [...tempoProduct, singleItem];
         } );
         this.setState( () => {
             return {products : tempoProduct};
         } )
     }

     getItem = (id) => {
        const product = this.state.products.find( item => item.id === id );
        return product;
        
        
     }

     

     addToCart = (id) => {
         
        let tempoProduct = [...this.state.products];
        const index = tempoProduct.indexOf(this.getItem(id));
        const product = tempoProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {product : tempoProduct , cart : [...this.state.cart, product]}
          } ,() => {
              this.addTotal();
          }  )

    }

    

    

    addTotal = () => {
       let subTotal = 0;
        this.state.cart.map( item => (subTotal += item.total) );
        const tempoTax = subTotal * 0.1;
        const tax = parseFloat(tempoTax.toFixed(2));
        const tempoShip = subTotal * 0.05;
        const ship = parseFloat(tempoShip.toFixed(2));
        const total = subTotal + tax  + ship;

        this.setState (() => {
            return {
                cartSubTotal : subTotal,
                cartTax : tax,
                cartShipping : ship,
                cartTotal : total,
            }
        })
    }

    increment = (id) => {
        let tempoCart = [...this.state.cart];
        const plusProduct = tempoCart.find(item => (item.id === id) );
        const index = tempoCart.indexOf(plusProduct);
         const product = tempoCart[index];

         product.count = product.count + 1;
         product.total = product.count * product.price;

         this.setState( () => {
             return {
                 cart : [...tempoCart]
             }
         }, () => {
             this.addTotal();
         } )


        
    }

    decrement = (id) => {
        let tempoCart = [...this.state.cart];
        const minusProduct = tempoCart.find( item => (item.id === id) );

        const index = tempoCart.indexOf(minusProduct);

        const product = tempoCart[index];

        product.count = product.count - 1;

       if (product.count === 0) {
           this.remove(id);
       }else{
           product.total = product.count * product.price;
           this.setState( () => {
               return {
                   cart : [...tempoCart]

               }
           }, () => {
               this.addTotal();
           } )
       }

        

        
    }

    remove = (id) => {
        let tempoProduct = [...this.state.products];
        let tempoCart = [...this.state.cart];

        tempoCart = tempoCart.filter(item => (item.id !== id));

        const index = tempoProduct.indexOf(this.getItem(id));

        let removeProduct = tempoProduct[index];

        removeProduct.inCart = false;

        removeProduct.count = 0;

        removeProduct.total = 0;

        this.setState(() => {
            return {
                cart : [...tempoCart],
                products : [...tempoProduct]
            }
        } , () => {
            this.addTotal();
        })
    }

    clear = () => {
        this.setState( () => {
            return {
                cart : []
            }
        }, () => {
            this.setProduct();
            this.addTotal();
        } )
    }


     


    render() { 
        return ( 
           <ProductContext.Provider 
           value = {
                    {
                    ...this.state,
                    
                    addToCart : this.addToCart,
                    increment : this.increment,
                    decrement : this.decrement,
                    remove : this.remove,
                    clear : this.clear,
                    

                    }
                    } 
               >
               {this.props.children}
           </ProductContext.Provider>

           
         );
    }
}



const ProductConsumer = ProductContext.Consumer;



export { ProductsDataProvider ,ProductConsumer};
