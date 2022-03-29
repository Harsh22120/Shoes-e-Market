import React, { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';
import Axios from "axios";
const Product = () => {
  // const id = useParams();
  const url = "http://localhost:4000/api/products";

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
        <div className='container my-2 py-0'>
                <div className='row'>
                    <div className='col-0 mb-0'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                        <hr />
                    </div>
                </div>
        </div>
            
        <div className="products-container">
          {products?.data &&
            products.data.map((content, key) => {
              // console.log("products printed", content);
              return (
                <>
                  <div className=" card border mb-4 rounded overflow-hidden shedow ">
                    <img src={content.image} class="card-img-top" alt="" height="250px" />
                    <br />
                    {content.name} 
                    <br />
                     $ : {content.price}
                    <br />
                     {content.category}
                    <br />
                    <br />
                    <div className="" >
                    <NavLink to= '/cart' class="btn btn-outline-dark ">Add to Cart</NavLink> 
                    <NavLink to= {'/product/${product.id}'} class="btn btn-outline-dark">View Detail</NavLink>                                 
                    </div>
                  </div>
                </>
              );
            })}
        </div>
    </div>
  );
};

export default Product;