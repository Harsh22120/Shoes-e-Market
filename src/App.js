import './App.css';
import Home from './component/Home';
import Navbar from './component/Navebar';
import Product from './component/Product';
import Products from './component/Products';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
   <>
     <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/product' component={Product} />
       <Route exact path='/products/:id' component={Products} />
     </Switch>
   </>
  );
}

export default App;
