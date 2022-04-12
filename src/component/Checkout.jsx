import React, { useState, useCallback } from "react";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import useRazorpay from "react-razorpay";
const Checkout =()=> {
  
  // const [AddToCartLocalStorage, setAddToCartLocalStorag0e0.] = useState([]);

    const AddToCartLocalStorageCart = JSON.parse(localStorage.getItem("Cart")) || [];
    let carttotal = 0; const Razorpay = useRazorpay();

    const LocalStorage = JSON.parse(localStorage.getItem("Cart"));
    const LocalStorageuser = JSON.parse(localStorage.getItem("user"));
    const handlePayment = useCallback(() => {
      // const order = await createOrder(params);
      console.log("handlepayment is called");
  
            const options = {
              key: "rzp_test_7IGHa5Igq6Gaka",
              amount: carttotal  * 100,
              currency: "INR",
              name: "Shoes Market",
              description: "Thank you for purchasing with ShoesMarket",
              image: `https://media.geeksforgeeks.org/wp-content/uploads/20210806114908/dummy-200x200.png`,
              handler: (res) => {
                console.log(res);
              },
              prefill: {
                name: LocalStorageuser?.name,
                email: LocalStorageuser?.email,
                contact: prompt("what is your contact no"),
              },
              theme: {
                  color: "#2300a3",
              },
          };
          const rzpay = new Razorpay(options);
          rzpay.open();
        }, [Razorpay]);
        // const { currentUser, LocalStorageforCheckout } = state;
    
    return (
      <React.Fragment>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Checkout</h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-header">
                  <IconEnvelope className="i-va" /> Contact Info
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile no"
                        aria-label="Mobile no"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconTruck className="i-va" /> Shipping Infomation
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                         placeholder="FirstName"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="LastName"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Addresss"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <select  
                         className="form-select" required>
                        <option value>-- Country --</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select 
                        className="form-select" required>
                        <option value>-- State --</option>
                        <option>Gujrat</option>
                        <option>Pune</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Benglur</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 border-info">
                <div className="card-header bg-info">
                  <IconCreditCard2Front className="i-va" /> Payment Method
                </div>

                <div className="card-footer border-info row">
                  <span type="button" className="btn btn-block btn-info" onClick={ () => handlePayment()}>
                    Pay Now 
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">

              <div className="card">
                <div className="card-header">
                  <IconCart3 className="i-va" /> Cart{" "}
                  <span className="badge bg-secondary float-right">{AddToCartLocalStorageCart?.length}</span>
                </div>
              {AddToCartLocalStorageCart.map((Cart)=>{
                   carttotal = carttotal + Cart.price;
                return(                
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{Cart.name}</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">${Cart.price}</span>
                  </li>
                  </ul>
                  );
            })}
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−$50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${(carttotal)}</strong>
                  </li>
           
            
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

export default Checkout;
