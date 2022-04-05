import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const Product = ({ ProductDetail }) => {
  // const id = useParams();
  // const url = "http://localhost:4000/api/products";
  const url = "https://444c-42-105-167-144.ngrok.io/api/products";

  const [products, setproducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let Cart = (item) => {
    let LocalStorageCart = JSON.parse(localStorage.getItem("Cart")) || [];
    LocalStorageCart.push(item);

    if (LocalStorageCart) {
      setproducts((Cart) =>
        Cart.id === products.id ? { ...LocalStorageCart, qty: LocalStorageCart.qty + 1 } : Cart
      );
    } else {
      setproducts([...products, { ...Cart, qty: 1 }]);
    }

    localStorage.setItem("Cart", JSON.stringify(LocalStorageCart));
  };
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

  // let content = null;
  if (products.error) {
    // content = <p>There was an error pls Refresh and try again letter...</p>;
  }
  let TempcartId = [];

  return (
    <div>
      <div className="container my-2 py-0">
        <div className="row">
          <div className="col-0 mb-0">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="products-container">
        {products?.data &&
          products.data.map((content, key) => {
            // if(!TempcartId.contains(content.id)){
            //   TempcartId.push(content.id);
            // }
            // else{

            // }

            return (
              <>
                <div className=" card border mb-4 rounded overflow-hidden shedow ">
                  <img src={content.image} class="card-img-top" alt="" height="250px" />
                  <br />
                  {content.name}
                  {content.name}
                  {content.name}
                  <br />$ : {content.price}
                  <br />
                  {content.category}
                  <br />
                  <br />
                  <div className="">
                    <Link to={"/cart"} class="btn btn-outline-dark" onClick={() => Cart(content)}>
                      Add to Cart
                    </Link>
                    &nbsp;
                    <Link
                      to="/product"
                      class="btn btn-outline-dark"
                      onClick={() => {
                        ProductDetail(content.id);
                      }}
                    >
                      View Detail
                    </Link>
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
