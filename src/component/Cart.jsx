import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Cart = () => {
  // const AddToCart = JSON.parse(localStorage.getItem("Cart")) || [];
  const [AddToCartLocalStorage, setAddToCartLocalStorage] = useState([]);
  const [parmid, setparmid] = useState("");

  let cartItem = [];
  let cartItemId = [];
  let carttotal = 0;
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("Cart")) || [];

    localStorageData.map((Cart) => {
      if (cartItemId.indexOf(Cart.id) < 0) {
        Cart["qty"] = 1;
        cartItemId.push(Cart.id);
        cartItem.push(Cart);
      } else {
        const tempIndexOfCurrentCartItem = cartItemId.indexOf(Cart.id);
        cartItem[tempIndexOfCurrentCartItem].qty += 1;
        cartItem[tempIndexOfCurrentCartItem].price += Cart.price;
      }
    });

    setAddToCartLocalStorage(cartItem);
  }, [parmid]);
 
  const removelocalstorageproduct = (parmid) => {
    const LocalStorageCart = JSON.parse(localStorage.getItem("Cart")) || [];
    var index = LocalStorageCart.map((x) => {
      return x.id;
    }).indexOf(parmid);
    LocalStorageCart.splice(index, 1);
    localStorage.setItem("Cart", JSON.stringify(LocalStorageCart));
    setparmid(parmid);
  };
const increaseCount = (singleProductqty) =>{
    // setparmid(singleProductqty.id + Math.random());
    // LocalStorageCart = JSON.parse(localStorage.getItem("Cart")) || [];
    // LocalStorageCart.push(item);
    // localStorage.setItem("Cart", JSON.stringify(LocalStorageCart));
};

  return (
    <div>
      <div className="bg-secondary border-top p-4 text-white mb-3">
        <h1 className="display-6">Shopping Cart</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={150}>
                        Price
                      </th>
                      <th scope="col" className="text-right" width={130}></th>
                    </tr>
                  </thead>

                  {AddToCartLocalStorage.map((Cart) => {
                        carttotal = carttotal + Cart.price;

                    return (
                      <tbody>
                        <tr>
                          <td>
                            <div className="row">
                              <div className="col-3 d-none d-md-block">
                                <img src={Cart.image} width="80" alt="..." />
                              </div>
                              <div className="col">
                                <Link to="/product/detail" className="text-decoration-none">
                                  {Cart.name}
                                </Link>
                                <p className="small text-muted">Color: blue, Brand: XYZ</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="input-group input-group-sm mw-140">
                              {/* <button
                                className="btn btn-primary text-white"
                                onClick> - </button> */}
                              <input type="text" className="form-control" Value={Cart.qty} />
                              {/* <button className="btn btn-primary text-white" onClick={()=>increaseCount()}> + </button> */}
                            </div>
                          </td>
                          <td>
                            <var className="price">${Cart.price}</var>
                          </td>
                          <td className="text-right">
                            <button className="btn btn-sm btn-outline-secondary mr-2">
                              <IconHeartFill className="i-va" />
                            </button>
                            &nbsp;
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removelocalstorageproduct(Cart.id)}
                            >
                              <IconTrash className="i-va" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
              <div className="card-footer">
                <Link to="/checkout" className="btn btn-dark float-right">
                  Make Purchase <IconChevronRight className="i-va" />
                </Link>
                &nbsp;
                <Link to="/products" className="btn btn-dark">
                  <IconChevronLeft className="i-va" /> Continue shopping
                </Link>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                <IconTruck className="i-va mr-2" /> Free Delivery within 1-2 weeks
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Total price:</dt>
                  <dd className="col-6 text-right">${(carttotal)}</dd>

                  <dt className="col-6 text-success">Discount</dt>
                  <dd className="col-6 text-success text-right">-$58</dd>                
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-right  h5">
                    <strong>${(carttotal)}</strong>
                  </dd>
                </dl>
                <hr />
                <p className="text-center">
                  <img src="../assets/payment/payments.webp" alt="..." height={26} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
