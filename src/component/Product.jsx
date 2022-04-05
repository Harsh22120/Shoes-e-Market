import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { useParams } from 'react-router-dom';

const Product = ({ productDetail }) => {
  // const url = `http://localhost:4000/product/${productDetail}`;
  const url = `https://444c-42-105-167-144.ngrok.io`;

  //  console.log("print pid ====>>>>>>>>", productDetail);

  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  // console.log("printsetstate",setproduct);
  useEffect(() => {
    setproducts({
      loading: false,
      data: null,
      error: false,
    });
    Axios.get(url)
      .then((response) => {
        // console.log("printdata====> ", response);
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

  // let { productDetail } = useParams();
  //   if (product.error) {
  //     // content = <p>There was an error pls Refresh and try again letter...</p>;
  //   }
  return (
    <div>
      <div className="container my-2 py-0">
        <div className="row">
          <div className="col-0 mb-0">
            <h1 className="display-6 fw-bolder text-center">Have Some Product Details</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="product-container">
        {products?.data &&
          products.data.map((products, key) => {
            console.log("product printed", products);
            return (
              <>
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center">
                    <img src={products.image} alt={products?.name} height="400px" weidth="400px" />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2 className="display-5 fw-bold">{products.name}</h2>
                    <hr />
                    <h3 className="my-4">${products.price}</h3>
                    <p className="lead">{products.description}</p>
                    <button className="btn btn-outline-dark my-5">Add to Cart</button>
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
