import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Axios from 'axios';

const Cart = () => {
    const url = "http://localhost:4000/carts";

    const [products, setproducts] = useState({
      loading: false,
      data: null,
      error: false,
    });
  
    useEffect(() => {
      setproducts({
        loading: false,
        data: null,
        error: false,
      });
      Axios.get(url)
        .then((response) => {
          setproducts({
            loading: false,
            data: response.data,
            error: false,
          });
        })
        .catch(() => {
          setproducts({
            loading: false,
            data: null,
            error: false,
          });
        });
    }, [url]);
  
    let content = null;
    if (products.error) {
      content = <p>There was an error pls Refresh and try again letter...</p>;
    }
  
    return (
    <div>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Shopping Cart</h1>
        </div>
        
        <div className='px-4 my-5 bg-light rounder-3 key={cartItem.id}'>
                <div className='container py-4'>
                     {/* <button onClick="submit"className='btn-close-float-end'aria-label='Close'></button> */}
                    <div className="row justify-content-center">
                            <div className='col-md-8'>
                                <img src="./assets/aboutus.jpg"  height='200px' width='180px' />
                            </div>
                        <div className="col-md-4">
                            <h3>
                                Name
                            </h3>
                            <p className='lead fw-bold'>$500</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
            <div className='row'>
                <NavLink to='/chackout' className='btn btn-outline-primary mb-5 w-25'>Proceed to Checkout</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Cart