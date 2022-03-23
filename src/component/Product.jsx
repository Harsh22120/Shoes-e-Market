import React, {useState, useEffect} from 'react'
import Axios from "axios";
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

const Product = () => {

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Product Detail</h1>
            <hr />

          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src='/assets/aboutus.jpg' alt='Contact us' height="400px" weidth="400px" />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Product Name:</label>
                 </div>

              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Product Detail:</label>
                </div>
              
              <div class="mb-4">
                <label for="exampleFormControlTextarea1" class="form-label">Produt Price:</label>
              </div>
              <button type="submit" class="btn btn-outline-dark"> Add to cart </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product