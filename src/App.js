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
import Checkout from './component/Checkout';
import {Switch, Route} from "react-router-dom";
import { useState } from 'react';

function App() {
  let content;
  const [pid, setpid] = useState(null);
  const  ProductDetail = (pid) => {
  if(pid){
    content = pid;
    setpid(pid);

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
       <Route exact path='/checkout' component={Checkout} />
       
        <Route exact path='/products'>
          <Products
          ProductDetail={ProductDetail} />
          </Route> 

     {/* <Route exact path='/product' component={Product} /> 
         <Route exact path='/products'>
         <Products Product = {Products} />
         </Route>
      */}
      {/* <Route exact path='/:id' component = { Product} /> */}

       <Route exact path='/product'>
          <Product productDetail={pid} contentSetter = { ProductDetail }   />          
       </Route>
       
     </Switch>
   </>
  );
}

export default App;
