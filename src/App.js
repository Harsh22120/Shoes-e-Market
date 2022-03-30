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
import Chackout from './component/Chackout';
import {Switch, Route} from "react-router-dom";
import { useState } from 'react';

function App() {
  let content;
  const [pid, setpid] = useState(null);
  //  console.log("printstate ===/>",state);
  const  ProductDetail = (pid) => {
  if(pid){
    content = pid;
    // console.log("first PID App.js", pid);
    setpid(pid);

    }
  };

  // useEffect(()=>{
  //   
  // },[product]);

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
       <Route exact path='/chackout' component={Chackout} />
       
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
       
       {/* console.log("bcjdsvascbjasjcbvbsb pid ====", pid); */}
   
     </Switch>
   </>
  );
}

export default App;
