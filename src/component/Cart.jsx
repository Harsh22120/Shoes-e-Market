import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {delItem} from '../redux/action/index';
const Cart = () => { 
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()
    const handleClose =(item) =>{
        dispatch(delItem(item))
    }
    const cartItems = (cartItem) => {
        return(
            <div className='px-4 my-5 bg-light rounder-3 key={cartItem.id}'>
                <div className='container py-4'>
                     <button onClick={()=>handleClose(cartItem)}className='btn-close-float-end'aria-label='Close'></button>
                    <div className="row justify-content-center">
                            <div className='col-md-4'>
                                <img src="./assets/about.jpg"  height='200px' width='180px' />
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
        );
    } 
    const button = () =>{
        return(
        <div className='container'>
            <div className='row'>
                <NavLink to='/checkout' className='btn btn-outline-primary mb-5 w-25'>Proceed to Checkout</NavLink>
            </div>
        </div>
        );
    }
    return (
    <>
        {/* {state.length === 0 && emptyCart()} */}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
    </>
  )
}

export default Cart