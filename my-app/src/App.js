import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import ProductList from './components/productList';
import Default from './components/Default';
import Modal from './components/Modal';








class App extends Component {
  
  render() { 
    return ( 
      <React.Fragment>
       
        <NavBar />
        <Switch>
          <Route exact path = '/' component = {ProductList}  />
          <Route path = '/details' component = {Details} />
          <Route path = '/cart' component = {Cart} />
          <Route  component = {Default} />

        </Switch>
        {/* <Modal/> */}
          
        
        
      </React.Fragment>
     );
  }
}
 
export default App;