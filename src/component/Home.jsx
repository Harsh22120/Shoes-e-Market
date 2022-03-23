import React from 'react'
import Product from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-white text-black ">
                <img src="/assets/3.jpg" class="card-img" alt="Background" 
                height="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 class="card-title display-3 fw-bolder mb-0">MEN'S SHOES</h5>
                        <p class="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    
                    </div>
                    
                </div>
            </div>
  
            <Product />
        </div>
    );
};
export default Home;
