import React,{useState, useEffect} from 'react'
import Axios from 'axios';
const Product = ({pid}) => {
  const url = `http://localhost:4000/api/product/${pid}`;
  console.log("printed pid",pid);
  
  const [product, setproduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
// console.log("printsetstate",setproduct);
  useEffect(() => {
    setproduct({
      loading: false,
      data: null,
      error: false,
    });
    Axios.get(url)
      .then((response) => {
        console.log("printdata====> ", response);
        setproduct({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setproduct({
          loading: false,
          data: null,
          error: false,
        });
      });
  }, ["url"]);

//   let content = null;
//   if (product.error) {
//     // content = <p>There was an error pls Refresh and try again letter...</p>;
//   }
  return (
    <div>
        <div className='container my-2 py-0'>
                <div className='row'>
                    <div className='col-0 mb-0'>
                        <h1 className='display-6 fw-bolder text-center'>Have Some Product Details</h1>
                        <hr />
                    </div>
                </div>
        </div>
            
        <div className="product-container">
          {product?.data &&
            product.data.map((content, key) => {
               console.log("product printed", product);
              return (
                <>
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                      <img src={content.img} alt={content.title} height="400px" weidth="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                      <h1 className="display-5 fw-bold">{content.tital}</h1>
                      <hr />
                      <h2 className="my-4">${content.price}</h2>
                      <p className="lead">{content.desc}</p>
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

export default Product