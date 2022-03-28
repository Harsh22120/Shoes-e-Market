import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navebar';
import Product from './component/Product';
import Products from './component/Products';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';
import {Switch, Route} from "react-router-dom";
import ProductDetail from "./component/Product";
import { useState } from 'react';

function App() {
  const [state, setState] = useState();
   
const  ProductDetail = (pid) => {
  if(pid){
    setState(pid);
    }
  };
return (
   <>
     <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route exact path='/contact' component={Contact} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/register' component={Register} />
       <Route exact path='/cart' component={Cart} />
        <Route exact path='/products' component={Products} />

       {/* <Route exact path='/product' component={Product} /> 
        <Route exact path='/products'>
         <Products Product = {Products} />
       </Route>
      */}
      
       <Route exact path='/product'>
          <Product pid={state} 
          contentSetter = { ProductDetail } 
          product={state} />          
       </Route>
   
     </Switch>
   </>
  );
}

export default App;
