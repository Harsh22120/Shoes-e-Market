import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navebar';
import Product from './component/Product';
import Products from './component/Products';
import Login from './component/Login';
import {Switch, Route} from "react-router-dom";
//import ProductDetail from './component/ProductDetail';

function App() {
  
  ProductDetail (pid) {
    setState({ 
        content : pid,
    });
  }
return (
   <>
     <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route exact path='/contact' component={Contact} />
       <Route exact path='/login' component={Login} />
     
       <Route exact path='/products'>
         <Products ProductDetail = {ProductDetail} />
       </Route>
     
       <Route exact path='/product'>
         <Product contentSetter={ProductDetail}
         pid={state.content}
         ></Product>
       </Route>
     </Switch>
   </>
  );
}

export default App;
